import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaServer, FaGraduationCap, FaBuilding } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          
          <motion.p variants={itemVariants} className="section-subtitle">
            Passionate backend developer with a focus on scalable solutions and cloud technologies
          </motion.p>

          <div className="grid grid-2 gap-8 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm Prieyan MN, a passionate and detail-oriented backend developer with experience 
                  in building scalable web and mobile applications using technologies like Python (Flask), 
                  JavaScript (Express.js), and AWS services.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I have a strong foundation in Linux system administration, DevOps practices, and 
                  cloud-based deployments, which allows me to create efficient, secure, and 
                  high-performance backend solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I enjoy solving real-world problems, contributing to open-source projects, and 
                  mentoring others. My work is driven by curiosity, a growth mindset, and a desire 
                  to build impactful solutions that scale.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  When I'm not coding, I explore blockchain, AI-driven applications, and innovative 
                  tech tools that can redefine user experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                  <FaGraduationCap className="text-blue-600" />
                  <span className="text-blue-800 font-medium">Chennai Institute of Technology</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                  <FaBuilding className="text-green-600" />
                  <span className="text-green-800 font-medium">Freelancer & Entrepreneur</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid grid-2 gap-6">
                <div className="card text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaCode className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                  <p className="text-gray-600">
                    Specialized in building robust APIs and server-side applications
                  </p>
                </div>

                <div className="card text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <FaCloud className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cloud Technologies</h3>
                  <p className="text-gray-600">
                    Expert in AWS and Google Cloud Platform deployments
                  </p>
                </div>

                <div className="card text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaServer className="text-purple-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">DevOps & Linux</h3>
                  <p className="text-gray-600">
                    Strong foundation in system administration and automation
                  </p>
                </div>

                <div className="card text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <FaBuilding className="text-orange-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Entrepreneurship</h3>
                  <p className="text-gray-600">
                    Founder of Zero2Site digital agency and freelance developer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
