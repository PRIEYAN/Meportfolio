import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  // Achievement data with placeholder images (replace with your actual images)
  const achievements = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Binorix Team",
      subtitle: "Innovation & Collaboration",
      description: "Leading innovative solutions in artificial intelligence and machine learning applications. Spearheaded development of cutting-edge AI models and ML pipelines for enterprise solutions.",
      tags: ["Innovation", "AI", "Team Leadership", "Product Development"],
      link: "#",
      achievement: "Successfully launched MVP with 10k+ users"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Team AVA",
      subtitle: "AI & Machine Learning",
      description: "Developed advanced machine learning algorithms and AI-powered solutions that revolutionized data processing and analysis capabilities for multiple industry verticals.",
      tags: ["AI", "Machine Learning", "Python", "TensorFlow"],
      link: "#",
      achievement: "Achieved 95% accuracy in predictive models"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Team BNB",
      subtitle: "Blockchain Solutions",
      description: "Built scalable blockchain solutions and decentralized applications with focus on smart contract development, DeFi protocols, and Web3 integration technologies.",
      tags: ["Blockchain", "Smart Contracts", "Web3", "DeFi"],
      link: "#",
      achievement: "Processed $1M+ in blockchain transactions"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Team FOSS",
      subtitle: "Open Source",
      description: "Contributing to open-source projects and fostering collaborative development. Active maintainer of several popular repositories with thousands of stars and contributors.",
      tags: ["Open Source", "GitHub", "Community", "Collaboration"],
      link: "#",
      achievement: "1000+ GitHub stars across projects"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      title: "Zypher Pitch",
      subtitle: "Tech Innovation",
      description: "Successfully pitched cutting-edge technology solutions to industry leaders and investors. Secured funding and partnerships for innovative tech startups and products.",
      tags: ["Pitching", "Innovation", "Leadership", "Strategy"],
      link: "#",
      achievement: "Secured $500K+ in funding rounds"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing my journey through innovative projects, collaborative achievements, and impactful solutions across various domains
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Main Slideshow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Display */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
            {/* Image Container */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={achievements[currentSlide].image}
                  alt={achievements[currentSlide].title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isTransitioning ? 'scale-105 blur-sm' : 'scale-100'
                  }`}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Auto-play Control */}
              <button
                onClick={toggleAutoPlay}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
                aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              {/* Slide Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentSlide + 1} / {achievements.length}
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <div className={`transform transition-all duration-500 ${
                  isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                }`}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {achievements[currentSlide].title}
                  </h3>
                  <p className="text-xl text-blue-200 mb-3">
                    {achievements[currentSlide].subtitle}
                  </p>
                  <p className="text-lg leading-relaxed max-w-3xl mb-4">
                    {achievements[currentSlide].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-green-300 font-semibold">
                      🏆 {achievements[currentSlide].achievement}
                    </p>
                    <a
                      href={achievements[currentSlide].link}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      Learn More <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags Section */}
            <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50">
              <div className={`flex flex-wrap gap-2 justify-center transition-all duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}>
                {achievements[currentSlide].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'bg-blue-600 w-8 h-3 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                } disabled:opacity-50`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {achievements.map((achievement, index) => (
              <button
                key={achievement.id}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`relative overflow-hidden rounded-xl transition-all duration-300 group ${
                  index === currentSlide
                    ? 'ring-4 ring-blue-500 scale-105 shadow-xl'
                    : 'hover:scale-105 shadow-lg'
                } disabled:opacity-50`}
              >
                <div className="aspect-video">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-500/20' 
                      : 'bg-black/50 group-hover:bg-black/30'
                  }`} />
                </div>
                
                {/* Thumbnail Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3">
                  <div className="bg-gradient-to-t from-black/90 to-transparent -m-3 p-3 rounded-b-xl">
                    <h4 className="text-white font-semibold text-sm leading-tight mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-blue-200 text-xs leading-tight">
                      {achievement.subtitle}
                    </p>
                  </div>
                </div>

                {/* Active Indicator */}
                {index === currentSlide && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full shadow-lg animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-8 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300 ease-out"
              style={{ width: `${((currentSlide + 1) / achievements.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Create Something Amazing Together?</h3>
            <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
              These achievements represent just the beginning. Let's collaborate to build innovative solutions that make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Start a Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                View All Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;