import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="text-yellow-300">Woong Kim</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Full Stack Developer & Educational Technology Specialist
          </p>
          <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto">
            Creating innovative learning platforms and data-driven applications
            that enhance research and solve real-world problems in education and
            beyond.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-6 mb-12"
        >
          <a
            href="https://github.com/poliwoongbjj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/woong-kim-19a49b51/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:woongkim@wankiweb.com"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <button 
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            View My Work
          </button>
          <div className="animate-bounce">
            <ArrowDown size={24} className="text-blue-200" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
