import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Jobbyo",
      location: "San Francisco, CA",
      period: "June 2025 - Present",
      description: [
        "Architected and implemented comprehensive job crawler system supporting 25+ ATS platforms (Greenhouse, BambooHR, Breezy, Applitrack, etc.)",
        "Developed robust web scraping solutions with multiple fallback strategies, pagination/infinite scroll support, and error handling",
        "Enhanced onboarding system within first week, streamlining user registration process and improving new user experience",
        "Processing thousands of job listings daily across diverse platform architectures"
      ],
      technologies: ["Web Scraping", "ATS Integration", "JavaScript", "Python", "Node.js"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Universitat Autònoma de Barcelona",
      location: "Barcelona, Spain",
      period: "2024",
      description: [
        "Deployed OutCosT web application in collaboration with CodeOp and UAB's Veterinary Department",
        "Transformed an Excel-based tool into a comprehensive web application using Shiny for Python",
        "Built tool calculating costs of 112 different disease outbreak control measures",
        "Collaborated with veterinary experts and agricultural economists to meet industry requirements"
      ],
      technologies: ["Python", "Shiny", "Data Analysis", "Agricultural Economics"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Java Spring Backend Development Certification",
      school: "Habsida",
      location: "Incheon, South Korea",
      period: "2025",
      description: "Comprehensive certification program focusing on Java Spring framework and backend development"
    },
    {
      id: 2,
      degree: "Full Stack Development Certification",
      school: "CodeOp",
      location: "Barcelona, Spain",
      period: "2024",
      description: "Intensive full-stack development program covering modern web technologies and practices"
    },
    {
      id: 3,
      degree: "Master of Science in Computer Science",
      school: "National University of Life and Environmental Sciences of Ukraine",
      location: "Kyiv, Ukraine",
      period: "2018-2022",
      description: "Comprehensive training in algorithms, data structures, and databases"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Briefcase className="text-blue-600" size={24} />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg relative"
                >
                  <div className="absolute left-0 top-6 w-1 h-16 bg-blue-600 rounded-r"></div>
                  
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-2">
                      {exp.company}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm">{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <svg className="text-blue-600" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg relative"
                >
                  <div className="absolute left-0 top-6 w-1 h-12 bg-purple-600 rounded-r"></div>
                  
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-purple-600 font-semibold mb-2">
                      {edu.school}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 text-sm">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
