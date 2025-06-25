import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import portfolioConfig from "@/config/portfolioConfig";
import PixelAvatar from "@/components/PixelAvatar";
import PixelWindow from "@/components/PixelWindow";
import PixelSocialLink from "@/components/PixelSocialLink";
import PixelExperienceItem from "@/components/PixelExperienceItem";
import PixelEducationItem from "@/components/PixelEducationItem";
import PixelProjectCard from "@/components/PixelProjectCard";
import PixelContactForm from "@/components/PixelContactForm";

const Index = () => {
  const { scrollY } = useScroll();
  const ref = useRef(null);

  const scrollVelocity = useSpring(useTransform(scrollY, [0, 100], [0, 1]), {
    stiffness: 500,
    damping: 90,
  });

  const y = useTransform(scrollVelocity, [0, 1], [0, -5]);
  const rotate = useTransform(scrollVelocity, [0, 1], [0, 1]);

  // Interactive animations for sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <motion.div
      className="min-h-screen py-8 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="max-w-7xl mx-auto" style={{ y }}>
        <div className="flex flex-col gap-6">
          {/* Profile Terminal */}
          <motion.div
            className="w-full"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PixelWindow title="profile.txt" className="h-full">
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <PixelAvatar
                    src={portfolioConfig.avatar}
                    alt={portfolioConfig.name}
                    className="w-40 h-40 mb-4 animate-pixel-float"
                  />
                </motion.div>

                <motion.h1
                  id="name"
                  className="font-pixel text-lg text-pixel-cyan mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05, color: "#FF61DC" }}
                >
                  {portfolioConfig.name}
                </motion.h1>

                <motion.p
                  id="title"
                  className="font-mono text-sm mb-4 text-pixel-pink"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {portfolioConfig.title}
                </motion.p>
                <div className="w-full">
                  <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, staggerChildren: 0.2 }}
                  >
                    {portfolioConfig.socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + index * 0.1 }}
                        whileHover={{
                          x: 5,
                          backgroundColor: "rgba(255, 97, 220, 0.1)",
                          scale: 1.02,
                        }}
                        className="px-2 py-1 rounded"
                      >
                        <PixelSocialLink social={social} />
                      </motion.div>
                    ))}
                  </motion.div>

                  <PixelWindow title="about.sh" className="w-full mb-4">
                    <div id="about">
                      <motion.h2
                        className="font-pixel text-base text-white mb-4"
                        whileHover={{ color: "#61DCFF" }}
                      >
                        ABOUT ME -
                      </motion.h2>
                      <motion.p
                        className="font-mono text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {portfolioConfig.about} <br />
                        <br />
                        {portfolioConfig.domains} <br />
                        <br />
                        {portfolioConfig.description} <br />
                      </motion.p>
                    </div>
                  </PixelWindow>

                  <motion.div
                    className="mt-6 text-center flex flex-wrap gap-2 justify-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link to="/projects" className="pixel-btn inline-block">
                      Projects
                    </Link>
                    <Link
                      to="/contact"
                      className="pixel-btn inline-block bg-pixel-purple"
                    >
                      Contact
                    </Link>
                  </motion.div>
                </div>
              </div>
            </PixelWindow>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="w-full space-y-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -3 }}
            >
              <PixelWindow title="skills.json">
                <div>
                  <div className="mt-8">
                    <motion.h2
                      className="font-pixel text-base text-white mb-4"
                      whileHover={{ color: "#61DCFF" }}
                    >
                      TECHNICAL SKILLS
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                      {portfolioConfig.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between p-2 rounded w-full"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{
                            backgroundColor: "rgba(123, 97, 255, 0.2)",
                            scale: 1.02,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <pre className="bg-zinc-900 text-white p-4 rounded-md text-sm font-mono w-full">
                            {JSON.stringify(
                              {
                                [skill.name]: {
                                  ...(skill.lang?.length
                                    ? { languages: skill.lang }
                                    : {}),
                                  ...(skill.frameworks?.length
                                    ? { frameworks: skill.frameworks }
                                    : {}),
                                },
                              },
                              null,
                              2
                            )}
                          </pre>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </PixelWindow>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -3 }}
            >
              <PixelWindow title="experience.xml">
                <div>
                  <motion.h2
                    className="font-pixel text-base text-white mb-4"
                    whileHover={{ color: "#61DCFF" }}
                  >
                    EXPERIENCE
                  </motion.h2>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    {portfolioConfig.experience.map((exp, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <PixelExperienceItem experience={exp} />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </PixelWindow>
            </motion.div>

            {/* Projects Preview */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -3 }}
            >
              <PixelWindow title="projects.tsx">
                <div>
                  <motion.h2
                    className="font-pixel text-base text-white mb-4"
                    whileHover={{ color: "#61DCFF" }}
                  >
                    FEATURED PROJECTS
                  </motion.h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {portfolioConfig.projects
                      .slice(0, 2)
                      .map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + index * 0.2 }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <PixelProjectCard project={project} />
                        </motion.div>
                      ))}
                  </div>
                  <motion.div
                    className="text-center mt-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/projects" className="pixel-btn inline-block">
                      See All Projects
                    </Link>
                  </motion.div>
                </div>
              </PixelWindow>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -3 }}
            >
              <PixelWindow title="education.html">
                <div>
                  <motion.h2
                    className="font-pixel text-base text-white mb-4"
                    whileHover={{ color: "#61DCFF" }}
                  >
                    EDUCATION
                  </motion.h2>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    {portfolioConfig.education.map((edu, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <PixelEducationItem education={edu} index={index} />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </PixelWindow>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ y: -3 }}
            >
              <PixelWindow title="contact.txt">
                <div>
                  <motion.h2
                    className="font-pixel text-base text-white mb-4"
                    whileHover={{ color: "#61DCFF" }}
                  >
                    CONTACT ME
                  </motion.h2>
                  <p className="font-mono text-sm mb-6">
                    Have a project in mind? Need a new website? Want to
                    collaborate? Feel free to drop me a message!
                  </p>
                  <PixelContactForm />
                </div>
              </PixelWindow>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
