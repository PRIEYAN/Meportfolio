import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaNodeJs, FaReact, FaAws, FaGoogle, FaLinux, 
  FaDatabase, FaServer, FaMobile, FaCode, FaCloud 
} from 'react-icons/fa';
import { SiFlask, SiExpress, SiMongodb, SiTypescript, SiDocker } from 'react-icons/si';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Backend Development",
      icon: FaServer,
      skills: [
        { name: "Python", icon: FaPython, level: 90 },
        { name: "Flask", icon: SiFlask, level: 85 },
        { name: "JavaScript", icon: FaJs, level: 88 },
        { name: "Node.js", icon: FaNodeJs, level: 85 },
        { name: "Express.js", icon: SiExpress, level: 82 },
        { name: "Golang", icon: FaCode, level: 75 },
        { name: "TypeScript", icon: SiTypescript, level: 80 }
      ]
    },
    {
      title: "Frontend Development",
      icon: FaCode,
      skills: [
        { name: "React", icon: FaReact, level: 85 },
        { name: "Next.js", icon: FaReact, level: 80 },
        { name: "React Native", icon: FaMobile, level: 82 },
        { name: "JavaScript", icon: FaJs, level: 88 },
        { name: "TypeScript", icon: SiTypescript, level: 80 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      skills: [
        { name: "AWS", icon: FaAws, level: 85 },
        { name: "Google Cloud", icon: FaGoogle, level: 80 },
        { name: "Linux", icon: FaLinux, level: 90 },
        { name: "Docker", icon: SiDocker, level: 75 },
        { name: "DevOps", icon: FaServer, level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: FaDatabase,
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 85 },
        { name: "PostgreSQL", icon: FaDatabase, level: 80 },
        { name: "Firestore", icon: FaDatabase, level: 75 },
        { name: "DynamoDB", icon: FaDatabase, level: 70 }
      ]
    }
  ];

  const additionalSkills = [
    "API Development & Design",
    "Microservices Architecture", 
    "RESTful APIs",
    "GraphQL",
    "System Administration",
    "Bash Scripting",
    "Git Version Control",
    "Agile Development",
    "Team Leadership",
    "Client Management",
    "Project Planning",
    "Code Review",
    "Testing & Debugging",
    "Performance Optimization",
    "Security Best Practices"
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Skills & Technologies
          </motion.h2>
          
          <motion.p variants={itemVariants} className="section-subtitle">
            Technologies and tools I work with to build amazing solutions
          </motion.p>

          <div className="grid grid-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="card"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <category.icon className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <skill.icon className="text-gray-600" />
                          <span className="font-medium text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="card">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Additional Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm font-medium transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Focus Areas
              </h3>
              <div className="grid grid-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaServer className="text-blue-600 text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Backend Development</h4>
                  <p className="text-gray-600 text-sm">My primary focus and expertise</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <FaCloud className="text-green-600 text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cloud Solutions</h4>
                  <p className="text-gray-600 text-sm">Scalable and secure deployments</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaLinux className="text-purple-600 text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">System Administration</h4>
                  <p className="text-gray-600 text-sm">Linux expertise and DevOps</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
