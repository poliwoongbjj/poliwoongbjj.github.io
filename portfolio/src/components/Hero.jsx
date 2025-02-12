import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm Woong Kim
            <span className="text-indigo-600 block mt-2">
              Full Stack Developer
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I build modern web applications using React, Node.js, and other
            cutting-edge technologies.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              View My Projects
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/poliwoongbjj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/woong-kim-19a49b51"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:poliwoong.1@gmail.com"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
