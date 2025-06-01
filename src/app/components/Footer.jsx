import Image from "next/image";
import React from "react";
import { assets } from "../../../assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20 mb-4">
      <div className="text-center">
        <span className="text-3xl font-bold font-outfit cursor-pointer mx-auto">
          Abhishek Pal
        </span>
        <div className="w-max flex items-center gap-2 mx-auto my-2">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail-icon"
            className="w-6"
          />
          abhishekpal1413@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Abhishek Pal. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/AbhishekPal634" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abhishekpal63" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://x.com/iwritebugs" target="_blank">
              X (Twitter)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
