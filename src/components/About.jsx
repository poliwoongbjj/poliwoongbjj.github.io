import { motion } from "framer-motion";
import profileImg from "../assets/images/profile-img.JPG?url";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 mx-auto mb-8">
              <img
                src={profileImg}
                alt="Woong Kim Profile"
                className="w-full h-full object-cover rounded-full shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a passionate full-stack developer specializing in
              educational technology, data analysis, and scalable web
              applications. My expertise spans from creating learning platforms
              to developing job crawler systems that process thousands of
              listings daily across 25+ ATS platforms.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With strong proficiency in Python, Java, Kotlin, and JavaScript, I
              work with modern frameworks including React, Django, Spring Boot,
              and FastAPI. I&apos;ve collaborated with academic institutions
              like UAB&apos;s Veterinary Department and built production systems
              for companies like Jobbyo, focusing on robust web scraping, data
              processing, and user experience optimization.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">
                  Learning Efficiency
                </h4>
                <p className="text-2xl font-bold text-blue-600">+40%</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">
                  Study Optimization
                </h4>
                <p className="text-2xl font-bold text-blue-600">+60%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
