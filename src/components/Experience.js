import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaCode } from 'react-icons/fa';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const experiences = [
    {
      title: "Core Backend Developer Intern",
      company: "JustEverything (Tesys India Private Limited)",
      duration: "March 2024 - July 2024",
      location: "Remote",
      description: [
        "Developed core backend infrastructure for mobile application using modern technologies",
        "Worked with AWS services for scalable cloud deployments",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Contributed to mobile app development that achieved beta launch on Play Store",
        "Received monthly stipend of ₹12,000 for exceptional performance"
      ],
      technologies: ["Python", "Flask", "AWS", "Mobile Development", "API Development"],
      type: "work"
    },
    {
      title: "Founder & Lead Developer",
      company: "Zero2Site Digital Agency",
      duration: "2023 - Present",
      location: "Chennai, India",
      description: [
        "Founded and lead a digital agency specializing in startup solutions",
        "Build products for startups, customers, and established companies",
        "Manage team operations and client relationships",
        "Deliver end-to-end solutions from concept to deployment"
      ],
      technologies: ["Full-Stack Development", "Team Management", "Client Relations", "Product Development"],
      type: "entrepreneurship"
    },
    {
      title: "Freelance Developer",
      company: "Independent",
      duration: "2022 - Present",
      location: "Remote",
      description: [
        "Provide backend development services to various clients",
        "Specialize in scalable web applications and API development",
        "Work with startups and established companies",
        "Available for consultation and project collaboration"
      ],
      technologies: ["Backend Development", "API Design", "Cloud Solutions", "Consulting"],
      type: "freelance"
    }
  ];

  const achievements = [
    {
      title: "Finalist",
      event: "Avalanche Team 1 Hackathon",
      type: "Offline",
      icon: FaTrophy
    },
    {
      title: "Finalist", 
      event: "BNB Bombay Hack Hackathon",
      type: "Offline",
      icon: FaTrophy
    },
    {
      title: "Participant",
      event: "FOSS Hack Hackathon",
      type: "Online",
      icon: FaCode
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Experience & Achievements
          </motion.h2>
          
          <motion.p variants={itemVariants} className="section-subtitle">
            My professional journey and notable accomplishments
          </motion.p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-3 h-3 rounded-full ${
                        exp.type === 'work' ? 'bg-blue-500' : 
                        exp.type === 'entrepreneurship' ? 'bg-green-500' : 'bg-purple-500'
                      }`}></div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <FaBuilding className="text-gray-500" />
                      <span className="text-xl font-semibold text-gray-700">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaMapMarkerAlt />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className="text-gray-600">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">Hackathon Achievements</h3>
            <div className="grid grid-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <achievement.icon className="text-yellow-600 text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 mb-2">{achievement.event}</p>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {achievement.type}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
