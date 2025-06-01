"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../../assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="background"
          className="w-full"
        />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/90 to-transparent pointer-events-none"></div>
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
        } dark:bg-transparent`}
      >
        <a href="#top">
          <span className="text-2xl font-bold font-outfit cursor-pointer mr-14">
            Abhishek Pal
          </span>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolled
              ? ""
              : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="font-ovo">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="font-ovo">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon-icon"
              className="w-6 cursor-pointer"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow-icon"
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={toggleMenu}>
            <Image
              src={
                isMenuOpen
                  ? isDarkMode
                    ? assets.close_white
                    : assets.close_black
                  : isDarkMode
                  ? assets.menu_white
                  : assets.menu_black
              }
              alt={isMenuOpen ? "close-icon" : "menu-icon"}
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* ---Mobile Menu--- */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden absolute left-0 right-0 top-full z-50 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <div className="bg-white dark:bg-[#28282b] shadow-lg border-t border-gray-200 dark:border-white/20">
            <ul className="flex flex-col py-6 px-5">
              <li className="border-b border-gray-100 dark:border-white/10 last:border-b-0">
                <a
                  href="#top"
                  className="font-ovo block py-4 px-4 hover:bg-gray-50 dark:hover:bg-white/10 rounded-lg text-center dark:text-white"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li className="border-b border-gray-100 dark:border-white/10 last:border-b-0">
                <a
                  href="#about"
                  className="font-ovo block py-4 px-4 hover:bg-gray-50 dark:hover:bg-white/10 rounded-lg text-center dark:text-white"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li className="border-b border-gray-100 dark:border-white/10 last:border-b-0">
                <a
                  href="#skills"
                  className="font-ovo block py-4 px-4 hover:bg-gray-50 dark:hover:bg-white/10 rounded-lg text-center dark:text-white"
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>
              <li className="border-b border-gray-100 dark:border-white/10 last:border-b-0">
                <a
                  href="#projects"
                  className="font-ovo block py-4 px-4 hover:bg-gray-50 dark:hover:bg-white/10 rounded-lg text-center dark:text-white"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
              <li className="border-b border-gray-100 dark:border-white/10 last:border-b-0">
                <a
                  href="#contact"
                  className="font-ovo block py-4 px-4 hover:bg-gray-50 dark:hover:bg-white/10 rounded-lg text-center dark:text-white"
                  onClick={closeMenu}
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
