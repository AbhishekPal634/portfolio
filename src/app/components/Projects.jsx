import React from "react";
import { motion } from "motion/react";
import { assets, workData } from "../../../assets/assets";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-2 text-base sm:text-lg font-ovo dark:text-white"
      >
        A glimpse into my work
      </motion.h4>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-ovo dark:text-white"
      >
        My Projects
      </motion.h2>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo dark:text-white"
      >
        I enjoy creating thoughtful, user-friendly experiences. These projects
        reflect my passion for clean design, efficient code, and building
        solutions that make an impact.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto"
      >
        {workData.map((project, index) => (
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
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-cover bg-center hover:-translate-y-2 transition-all duration-300 hover:shadow-dark-solid dark:hover:shadow-light-solid"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90"></div>

            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 text-white">
              <div></div>

              <div className="space-y-3">
                <div>
                  <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 font-outfit">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-200 font-outfit">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex gap-2 sm:gap-3">
                    {project.githubUrl && (
                      <button
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm font-outfit hover:bg-white/30 cursor-pointer"
                      >
                        <Image
                          src="/github-icon.svg"
                          alt="GitHub"
                          width={14}
                          height={14}
                          className="filter brightness-0 invert"
                        />
                        GitHub
                      </button>
                    )}
                    {project.liveUrl && (
                      <button
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm font-outfit hover:bg-white/30 cursor-pointer"
                      >
                        <Image
                          src="/live-demo-icon.svg"
                          alt="Live Demo"
                          width={14}
                          height={14}
                          className="filter brightness-0 invert"
                        />
                        Live Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      >
        <p className="mb-4 font-ovo dark:text-white">
          Want to see more of my work?
        </p>
        <button
          onClick={() =>
            window.open(
              "https://github.com/AbhishekPal634?tab=repositories",
              "_blank"
            )
          }
          className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-ovo cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          <Image
            src="/github-icon.svg"
            alt="GitHub"
            width={18}
            height={18}
            className="filter brightness-0 invert dark:invert-0"
          />
          View More Projects
        </button>
      </motion.div>
    </div>
  );
};

export default Projects;
