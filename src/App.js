import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaChevronDown, FaPython, FaJs, FaAws, FaDocker, FaLinux, FaGitAlt, FaStar, FaCodeBranch, FaEye, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import axios from 'axios';
import binorixImage from './assets/binorixPitch.jpeg';
import profileImage from './assets/profile.jpeg';
import teamAVA from './assets/teamAVA.jpeg';
import teamBNB from './assets/teamBNB.jpeg';
import teamFOSS from './assets/teamFOSS.jpeg';
import zypherPitch from './assets/zypherPitch.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            Prieyan MN
          </a>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#experience" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
            <li><a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>

          <button className="nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <img 
            src={profileImage} 
            
            className="hero-image"
          />
          
          <h1 className="hero-title">Prieyan MN</h1>
          <p className="hero-subtitle">Backend Developer | Cloud Enthusiast | Full-Stack Engineer</p>
          
          <p className="hero-description">
            Passionate about building scalable web and mobile applications. 
            I specialize in backend development with Python, JavaScript, and cloud technologies.
          </p>

          <div className="hero-buttons">
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
          </div>

          <div className="social-links">
            <a href="https://github.com/prieyan" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/prieyanmn/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/prie.aur/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <FaChevronDown />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate backend developer with a focus on scalable solutions and cloud technologies
        </p>

        <div className="about-content">
          <div>
            <p className="about-text">
              I'm a passionate backend developer with expertise in Python (Flask), JavaScript (Express.js), 
              and cloud technologies like AWS. I specialize in building scalable and secure web and mobile 
              applications. I actively contribute to open-source projects and solve real-world problems.
            </p>
            <p className="about-text">
              With a strong foundation in Linux system administration and DevOps practices, I create 
              efficient, secure, and high-performance backend solutions. I enjoy mentoring others and 
              exploring innovative technologies that can redefine user experiences.
            </p>
          </div>
          
          <div>
            <img 
              src={binorixImage} 
              alt="Binorix Pitch Presentation" 
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    {
      name: 'Python',
      icon: FaPython,
      description: 'Expert in Python development with Flask framework'
    },
    {
      name: 'JavaScript',
      icon: FaJs,
      description: 'Proficient in JavaScript and Node.js development'
    },
    {
      name: 'AWS',
      icon: FaAws,
      description: 'Cloud infrastructure and deployment expertise'
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      description: 'NoSQL database design and optimization'
    },
    {
      name: 'Docker',
      icon: FaDocker,
      description: 'Containerization and orchestration'
    },
    {
      name: 'Linux',
      icon: FaLinux,
      description: 'System administration and DevOps'
    },
    {
      name: 'Git',
      icon: FaGitAlt,
      description: 'Version control and collaboration'
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to build amazing solutions
        </p>

        <div className="grid grid-3">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <skill.icon />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: 'Core Backend Developer Intern',
      company: 'JustEverything (Tesys India Private Limited)',
      duration: 'March 2024 - July 2024',
      description: 'Developed core backend infrastructure for mobile application using modern technologies. Worked with AWS services for scalable cloud deployments and contributed to mobile app development that achieved beta launch on Play Store.'
    },
    {
      role: 'Founder & Lead Developer',
      company: 'Zero2Site Digital Agency',
      duration: '2023 - Present',
      description: 'Founded and lead a digital agency specializing in startup solutions. Build products for startups, customers, and established companies with end-to-end development from concept to deployment.'
    },
    {
      role: 'Freelance Backend Developer',
      company: 'Independent',
      duration: '2022 - Present',
      description: 'Provide backend development services to various clients. Specialize in scalable web applications, API development, and cloud solutions for startups and established companies.'
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey and notable accomplishments
        </p>

        <div>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-duration">{exp.duration}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Easy to add new images - just add them to this array
  const achievements = [
    {
      id: 1,
      image: teamAVA,
      title: "Team AVA",
      description: "Achievement description for Team AVA"
    },
    {
      id: 2,
      image: teamBNB,
      title: "Team BNB",
      description: "Achievement description for Team BNB"
    },
    {
      id: 3,
      image: teamFOSS,
      title: "Team FOSS",
      description: "Achievement description for Team FOSS"
    },
    {
      id: 4,
      image: zypherPitch,
      title: "Zypher Pitch",
      description: "Achievement description for Zypher Pitch"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="achievements" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Highlights of my journey and accomplishments
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Slideshow Container */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Main Image Display */}
              <div className="relative h-96 overflow-hidden">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={achievements[currentSlide].image}
                    alt={achievements[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <FaChevronDown className="rotate-90" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <FaChevronDown className="-rotate-90" />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {achievements[currentSlide].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {achievements[currentSlide].description}
                </p>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-3">
                  {achievements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-blue-600 scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-6 grid grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <button
                  key={achievement.id}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    index === currentSlide
                      ? 'ring-4 ring-blue-500 scale-105'
                      : 'hover:scale-105'
                  }`}
                >
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-20 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        console.log('Fetching repositories from https://github.com/prieyan...');
        setLoading(true);
        
        // Use CORS proxy to bypass GitHub API rate limits
        const githubApiUrl = 'https://api.github.com/users/prieyan/repos?sort=stars&per_page=20&type=public';
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(githubApiUrl)}`;
        
        const response = await fetch(proxyUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        
        const repos = await response.json();
        console.log(`Successfully fetched ${repos.length} repositories from your GitHub account`);
        
        // Sort by stars (descending) and then by updated date
        const sortedRepos = repos
          .sort((a, b) => {
            // Primary sort: by stars (highest first)
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            // Secondary sort: by updated date (most recent first)
            return new Date(b.updated_at) - new Date(a.updated_at);
          })
          .slice(0, 12); // Take top 12

        // Debug: Log the sorted repositories
        console.log('Your repositories sorted by stars:', sortedRepos.map(repo => ({
          name: repo.name,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          updated: repo.updated_at,
          url: repo.html_url
        })));

        setRepositories(sortedRepos);
        setError(null);
        
      } catch (err) {
        console.error('Failed to fetch from GitHub API:', err);
        setError('Unable to fetch repositories from GitHub. Please check your internet connection.');
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

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
      'Dockerfile': '#2496ed',
      'PHP': '#777bb4',
      'Ruby': '#cc342d',
      'Swift': '#fa7343',
      'Kotlin': '#7f52ff',
      'Rust': '#000000',
      'C': '#a8b9cc',
      'C#': '#239120'
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

  const getProjectImage = (repo) => {
    // Use binorix image for all projects
    return binorixImage;
  };

  if (loading) {
    return (
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Some of my recent work and side projects
          </p>
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <div style={{ 
              display: 'inline-block',
              width: '40px',
              height: '40px',
              border: '4px solid #e2e8f0',
              borderTop: '4px solid #3b82f6',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <p style={{ marginTop: '1rem', color: '#64748b' }}>Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          My GitHub repositories sorted by popularity (stars)
        </p>

        {error ? (
          <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#fef3c7', borderRadius: '0.5rem', marginBottom: '2rem' }}>
            <p style={{ color: '#92400e', marginBottom: '1rem', fontWeight: '500' }}>
              ⚠️ {error}
            </p>
            <a 
              href="https://github.com/prieyan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaGithub /> Visit GitHub Profile
            </a>
          </div>
        ) : null}
        
        <div className="grid grid-3">
            {repositories.map((repo) => (
              <div key={repo.id} className="project-card">
                <img 
                  src={getProjectImage(repo)} 
                  alt={repo.name} 
                  className="project-image"
                />
                <div className="project-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 className="project-title" style={{ margin: 0, flex: 1, marginRight: '0.5rem' }}>
                      {repo.name}
                    </h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#64748b', fontSize: '0.875rem' }}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>

                  {repo.description && (
                    <p className="project-description" style={{ marginBottom: '1rem' }}>
                      {repo.description}
                    </p>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    {repo.language && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div
                          style={{ 
                            width: '12px', 
                            height: '12px', 
                            borderRadius: '50%',
                            backgroundColor: getLanguageColor(repo.language)
                          }}
                        ></div>
                        <span style={{ fontSize: '0.875rem', color: '#64748b' }}>{repo.language}</span>
                      </div>
                    )}
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      Updated {formatDate(repo.updated_at)}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: '#64748b' }}>
                        <FaStar />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: '#64748b' }}>
                        <FaCodeBranch />
                        <span>{repo.forks_count}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: '#3b82f6', fontWeight: '600', backgroundColor: '#eff6ff', padding: '0.25rem 0.5rem', borderRadius: '0.375rem' }}>
                        <FaStar />
                        <span>{repo.stargazers_count || 0} stars</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: '#64748b' }}>
                      <FaEye />
                      <span>{repo.watchers_count}</span>
                    </div>
                  </div>

                  <div className="project-links">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> View Code
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://github.com/prieyan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub /> View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Let's work together on your next project
        </p>

        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              I'm always interested in new opportunities, whether it's freelance work, 
              collaboration on exciting projects, or just having a chat about technology.
            </p>
            <p>
              Feel free to reach out through the form or connect with me on social media!
            </p>

            <div className="contact-social">
              <a href="https://github.com/prieyan" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/prieyanmn/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/prie.aur/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
