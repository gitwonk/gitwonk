"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";

const HomeInput = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    const { error } = await supabase
      .from("waitlist")
      .insert([{ email: email }]);
    if (!error) {
      toast.success("You're now on the ship!");
      setEmail("");
    } else {
      if (error.code === "23505") {
        toast("Don't worry we already have you", {
          icon: "😉",
        });
      } else {
        toast.error("Oops! Something went wrong.");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="dark:bg-black-subtle rounded-2xl border-none bg-gray-50 p-1 shadow-[0px_24px_80px_0px_rgba(43,_41,_46,_0.15)] sm:p-0">
        <input
          type="text"
          name="notify"
          id="notify"
          className="w-full bg-transparent  py-4 pl-4 pr-0.5 focus:outline-none sm:text-base md:w-80"
          placeholder="Your Email"
          value={email}
          onChange={onChange}
          required
        />
        <div className="mr-1.5 inline-block w-full xl:w-fit">
          <button
            type="submit"
            className="bg-brand-500 dark:bg-brand-600 hover:bg-brand-600 w-full rounded-xl px-6 py-3 text-sm font-medium text-white shadow-lg transition-all xl:w-fit">
            Notify me
          </button>
        </div>
      </div>
      <p className="py-4 text-center text-xs text-gray-400">
        We respect your privacy 🔒
      </p>
    </form>
  );
};

export default HomeInput;
