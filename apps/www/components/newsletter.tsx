"use client";

import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

const NewsletterContainer = () => {
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
      .from("newsletter")
      .insert([{ email: email }]);
    if (!error) {
      toast.success("You're now on the ship!");
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
    <div className="dark:bg-black-subtle mb-12 flex min-h-[400px] w-full flex-col items-center justify-center rounded-lg border-t border-gray-100 bg-white dark:border-gray-900">
      <div className="max-w-md text-center">
        <div className="pb-5">
          <h1 className="font-display pb-2 text-2xl font-bold md:text-3xl">
            Subscribe to our newsletter
          </h1>
          <p className="font-medium">
            Stay in the loop with our latest updates on GitWonk.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={onChange}
            required
            className="bg-white-pure rounded-xl border border-black px-4 py-2 focus:outline-black dark:border-black dark:bg-black dark:focus:outline-white sm:text-base md:w-[280px]"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-xl border border-black bg-black px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-white hover:text-black dark:bg-white dark:text-black xl:w-fit">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterContainer;
