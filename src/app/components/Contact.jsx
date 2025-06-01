import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { assets } from "../../../assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");

  const WEB3_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", WEB3_ACCESS_KEY); // 👈 Safe usage

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-2 text-base sm:text-lg font-ovo dark:text-white"
      >
        Connect With Me
      </motion.h4>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-ovo dark:text-white"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo dark:text-white"
      >
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Whether you have a question,
        want to collaborate, or just want to say hi, feel free to reach out!
      </motion.p>

      <motion.form
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 mt-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-white/20 rounded-md bg-white dark:bg-[#28282b] dark:text-white dark:placeholder-white/60"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-white/20 rounded-md bg-white dark:bg-[#28282b] dark:text-white dark:placeholder-white/60"
            required
          />
        </motion.div>
        <motion.textarea
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          rows="6"
          placeholder="Enter your Message"
          name="message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-white/20 rounded-md bg-white dark:bg-[#28282b] dark:text-white dark:placeholder-white/60 mb-6"
          required
        ></motion.textarea>
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 dark:bg-white text-white dark:text-black rounded-full mx-auto hover:bg-black dark:hover:bg-gray-200 duration-500 cursor-pointer"
        >
          Submit
          <Image
            src={assets.right_arrow_white}
            alt="right-arrow"
            className="w-4 dark:hidden"
          />
          <Image
            src={assets.arrow_icon}
            alt="right-arrow"
            className="w-4 hidden dark:block"
          />
        </motion.button>
        {result && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`mt-6 p-4 rounded-lg text-center font-outfit ${
              result === "Sending...."
                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700"
                : result === "Form Submitted Successfully"
                ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-700"
                : "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-700"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              {result === "Sending...." && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"></div>
              )}
              {result === "Form Submitted Successfully" && (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {result !== "Sending...." &&
                result !== "Form Submitted Successfully" && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              <span className="font-medium">{result}</span>
            </div>
          </motion.div>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
