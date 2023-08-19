"use client";

import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

const EarlyInput = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
    if (!regex.test(email)) {
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
    <form onSubmit={handleSubmit} className="mb-32">
      <input
        type="text"
        name="early-access"
        id="early-access"
        className="bg-white-subtle dark:bg-black-subtle mb-4 w-full rounded-2xl py-4 pl-4 pr-0.5 text-black focus:outline-2 focus:outline-white dark:text-white sm:text-base"
        placeholder="Your Email"
        value={email}
        onChange={onChange}
        required
      />
      <button
        type="submit"
        className="bg-brand-500 dark:bg-brand-600 hover:bg-brand-600 w-full rounded-xl px-6 py-3 text-sm font-medium text-white shadow-lg transition-all">
        Request early access
      </button>
    </form>
  );
};

export default EarlyInput;
