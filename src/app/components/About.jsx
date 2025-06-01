import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { assets, infoList } from "../../../assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-[8%] sm:px-[10%] lg:px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-2 text-base sm:text-lg font-ovo dark:text-white"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-ovo dark:text-white"
      >
        About Me
      </motion.h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 my-12 sm:my-16 lg:my-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="w-60 sm:w-72 md:w-80 lg:w-96 rounded-3xl max-w-none flex-shrink-0"
        >
          <Image
            src={assets.user_image}
            alt="user-image"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 sm:mb-10 max-w-2xl font-ovo text-sm sm:text-base lg:text-lg leading-relaxed mx-auto lg:mx-0 dark:text-white"
          >
            I'm a passionate Computer Science student on a mission to bridge the
            gap between innovative ideas and real-world solutions. My journey
            began with curiosity about how technology shapes our world, and it
            has evolved into a deep commitment to creating meaningful digital
            experiences.
          </motion.p>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8 sm:mb-10 max-w-2xl font-ovo text-sm sm:text-base lg:text-lg leading-relaxed mx-auto lg:mx-0 dark:text-white"
          >
            Beyond code, I lead a tech community at my college, where I've seen
            how collaboration sparks the best innovation. Outside of tech, I
            enjoy sketching, painting, and playing piano — creative outlets that
            shape my problem-solving mindset.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className="border-[0.5px] border-gray-400 dark:border-white/20 rounded-xl p-4 sm:p-6 hover:bg-light-hover hover:-translate-y-1 dark:hover:bg-dark-hover duration-500 hover:shadow-dark-solid dark:hover:shadow-light-solid"
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-6 sm:w-7 mt-2 sm:mt-3 mx-auto lg:mx-0 dark:hidden"
                />
                <Image
                  src={iconDark}
                  alt={title}
                  className="w-6 sm:w-7 mt-2 sm:mt-3 mx-auto lg:mx-0 hidden dark:block"
                />
                <h3 className="my-3 sm:my-4 font-semibold text-gray-700 dark:text-white text-sm sm:text-base font-outfit">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-white/80 text-xs sm:text-sm leading-relaxed font-outfit">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default About;
