import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import Achievements from './Achievements';

// Placeholder images - replace with your actual images
const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80";
const binorixImage = "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Prieyan MN
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {['home', 'about', 'achievements', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mx-4 mb-4 p-4">
            <ul className="space-y-3">
              {['home', 'about', 'achievements', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left capitalize text-gray-700 font-medium hover:text-blue-600 py-2"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {/* Background pattern (escaped to avoid JSX parser errors) */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "url( data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E )",
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8">
          <img 
            src={profileImage} 
            alt="Prieyan MN Profile"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl object-cover"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Prieyan MN
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-6">
            Backend Developer | Cloud Enthusiast | Full-Stack Engineer
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about building scalable web and mobile applications. 
            I specialize in backend development with Python, JavaScript, and cloud technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get in Touch
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              View My Work
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/prieyan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-400 transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/prieyanmn/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-400 transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/prie.aur/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-400 transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate backend developer with a focus on scalable solutions and cloud technologies
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate backend developer with expertise in Python (Flask), JavaScript (Express.js), 
              and cloud technologies like AWS. I specialize in building scalable and secure web and mobile 
              applications. I actively contribute to open-source projects and solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong foundation in Linux system administration and DevOps practices, I create 
              efficient, secure, and high-performance backend solutions. I enjoy mentoring others and 
              exploring innovative technologies that can redefine user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={binorixImage} 
              alt="Binorix Pitch Presentation" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
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
      description: 'Expert in Python development with Flask framework',
      color: 'bg-blue-500'
    },
    {
      name: 'JavaScript',
      description: 'Proficient in JavaScript and Node.js development',
      color: 'bg-yellow-500'
    },
    {
      name: 'AWS',
      description: 'Cloud infrastructure and deployment expertise',
      color: 'bg-orange-500'
    },
    {
      name: 'MongoDB',
      description: 'NoSQL database design and optimization',
      color: 'bg-green-500'
    },
    {
      name: 'Docker',
      description: 'Containerization and orchestration',
      color: 'bg-blue-600'
    },
    {
      name: 'Linux',
      description: 'System administration and DevOps',
      color: 'bg-gray-800'
    },
    {
      name: 'Git',
      description: 'Version control and collaboration',
      color: 'bg-red-500'
    },
    {
      name: 'React',
      description: 'Frontend development and component architecture',
      color: 'bg-cyan-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Skills