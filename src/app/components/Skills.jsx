import React from "react";
import { motion } from "motion/react";
import { skillsData, competitiveProgrammingData } from "../../../assets/assets";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full px-[8%] sm:px-[10%] lg:px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-2 text-base sm:text-lg font-ovo dark:text-white"
      >
        What I know
      </motion.h4>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-ovo dark:text-white"
      >
        My Skills
      </motion.h2>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo dark:text-white"
      >
        I work with modern technologies and tools to create efficient, scalable,
        and user-friendly applications. I also actively participate in
        competitive programming to enhance my problem-solving skills and
        algorithmic thinking.
      </motion.p>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              className="text-center p-6 sm:p-8 border border-gray-300 dark:border-white/20 rounded-xl hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-dark-solid dark:hover:bg-dark-hover dark:hover:shadow-light-solid"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-white mb-6 font-outfit">
                {skillCategory.category}
              </h4>
              <div className="space-y-2 font-outfit">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-sm text-gray-700 dark:text-white/80"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8"
        >
          {competitiveProgrammingData.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.6,
                delay: 1.0 + index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              className="text-center p-6 sm:p-8 border border-gray-300 dark:border-white/20 rounded-xl hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-dark-solid dark:hover:bg-dark-hover dark:hover:shadow-light-solid cursor-pointer"
              onClick={() => window.open(platform.profileUrl, "_blank")}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={platform.logo}
                  alt={`${platform.platform} logo`}
                  className="w-12 h-12 hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-white mb-2 font-outfit hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {platform.platform}
              </h4>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2 font-outfit">
                {platform.rating}
              </div>
              <div className="text-xs text-gray-500 dark:text-white/60 font-outfit">
                {platform.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
