import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import axios from 'axios';

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/prieyan/repos?sort=updated&per_page=12');
        setRepositories(response.data);
      } catch (err) {
        setError('Failed to fetch repositories');
        console.error('Error fetching repositories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

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

  const featuredProjects = [
    {
      title: "JustEverything Mobile App",
      description: "Core backend development for a mobile application that achieved beta launch on Play Store. Built scalable APIs and cloud infrastructure.",
      technologies: ["Python", "Flask", "AWS", "Mobile Development", "API Development"],
      githubUrl: "https://github.com/prieyan",
      liveUrl: "#",
      featured: true,
      status: "Beta Launched"
    },
    {
      title: "Zero2Site Digital Agency",
      description: "Full-stack solutions for startups and companies. End-to-end product development from concept to deployment.",
      technologies: ["Full-Stack", "React", "Node.js", "MongoDB", "Cloud"],
      githubUrl: "https://github.com/prieyan",
      liveUrl: "#",
      featured: true,
      status: "Active"
    }
  ];

  const getLanguageColor = (language) => {
    const colors = {
      'Python': '#3776ab',
      'JavaScript': '#f7df1e',
      'TypeScript': '#3178c6',
      'Java': '#f89820',
      'C++': '#00599c',
      'Go': '#00add8',
      'HTML': '#e34f26',
      'CSS': '#1572b6',
      'Shell': '#89e051',
      'Dockerfile': '#2496ed'
    };
    return colors[language] || '#6b7280';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <section id="projects" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>
          
          <motion.p variants={itemVariants} className="section-subtitle">
            Highlighting my key projects and GitHub contributions
          </motion.p>

          <div className="space-y-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Beta Launched' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        <FaGithub />
                        View Code
                      </a>
                      {project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-8">GitHub Repositories</h3>
            
            {error ? (
              <div className="text-center py-8">
                <p className="text-red-600 mb-4">{error}</p>
                <a 
                  href="https://github.com/prieyan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaGithub />
                  Visit GitHub Profile
                </a>
              </div>
            ) : (
              <div className="grid grid-2 lg:grid-3 gap-6">
                {repositories.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    variants={itemVariants}
                    className="card hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 truncate flex-1 mr-2">
                        {repo.name}
                      </h4>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    </div>

                    {repo.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {repo.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      {repo.language && (
                        <div className="flex items-center space-x-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                          ></div>
                          <span className="text-sm text-gray-600">{repo.language}</span>
                        </div>
                      )}
                      <span className="text-xs text-gray-500">
                        Updated {formatDate(repo.updated_at)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <FaStar />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaCodeBranch />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaEye />
                        <span>{repo.watchers_count}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <a
                href="https://github.com/prieyan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8 py-3"
              >
                <FaGithub />
                View All Repositories
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
