import React, { useState, useEffect } from 'react';
import { Github, Linkedin, X, Mail, ArrowDown, Code, Monitor, Zap } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textOptions = ["Frontend Developer", "Problem Solver", "Coding Enthusiast", "Developing with Passion"];
  const currentText = textOptions[currentTextIndex];
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // Type text character by character
    if (!isDeleting && typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 100);
    }
    // Pause at end of word
    else if (!isDeleting && typedText.length === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    }
    // Delete text character by character
    else if (isDeleting && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length - 1));
      }, 50);
    }
    // Move to next word
    else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex + 1) % textOptions.length);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentText, currentTextIndex]);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 transition-colors duration-300 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left side - text content */}
        <div className="w-full lg:w-1/2 text-left pt-8 sm:pt-10 lg:pt-0">
          <div className="mb-3 sm:mb-4 flex items-center">
            <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              Available for work
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-8 md:mt-12 mb-4 sm:mb-6 text-gray-800 dark:text-white leading-tight">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Umar Farouk</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-gray-700 dark:text-gray-200 h-8 sm:h-10 md:h-12 lg:h-14 flex items-center">
            <span className="text-indigo-600 dark:text-indigo-400">{typedText}</span>
            <span className="animate-pulse ml-1">|</span>
          </h2>

          <p className="text-base sm:text-lg max-w-xl mb-6 sm:mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
            Building beautiful, responsive and user-friendly web applications with modern technologies that deliver exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a
              href="#contact"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              Let's Talk
            </a>
            <a
              href="#projects"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white text-sm sm:text-base font-medium rounded-lg border border-gray-300 dark:border-gray-600 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              View Projects
            </a>
          </div>

          <div className="flex space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            <a
              href="https://github.com/umarfaroukpa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors shadow-md hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors shadow-md hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://x.com/FaroukIlyas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors shadow-md hover:shadow-lg"
              aria-label="Twitter"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:yasmarfaq51@gmail.com"
              className="p-2 sm:p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors shadow-md hover:shadow-lg"
              aria-label="Email"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Right side - image and floating elements */}
        <div className="w-full lg:w-1/2 flex justify-center relative mb-8 sm:mb-10 lg:mb-0">
          <div className="relative">
            {/* Main image with gradient overlay */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-6 sm:border-8 border-white dark:border-gray-800 shadow-2xl relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/30 to-purple-600/30 z-20"></div>
              <img src="src/assets/my-pic.png" alt="Umar Farouk" className="w-full h-full object-cover" />
            </div>

            {/* Animated background elements - hide on very small screens */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-10 sm:w-16 h-10 sm:h-16 bg-yellow-400 dark:bg-yellow-500 rounded-lg animate-float opacity-70 hidden xs:block"></div>
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-14 sm:w-24 h-14 sm:h-24 bg-indigo-400 dark:bg-indigo-600 rounded-full animate-float-delay opacity-70 hidden xs:block"></div>
              <div className="absolute top-1/2 -right-6 sm:-right-12 w-12 sm:w-20 h-12 sm:h-20 bg-pink-400 dark:bg-pink-600 rounded-lg rotate-12 animate-float-slow opacity-70 hidden xs:block"></div>
            </div>

            {/* Floating skill cards - responsive positioning and sizing */}
            <div className="absolute -top-3 sm:-top-6 -left-12 sm:-left-16 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 sm:p-3 flex items-center gap-1 sm:gap-2 animate-float z-20 hidden xs:flex">
              <Code size={16} className="sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white">ReactJs</span>
            </div>

            <div className="absolute -bottom-2 sm:-bottom-4 -right-8 sm:-right-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 sm:p-3 flex items-center gap-1 sm:gap-2 animate-float-delay z-20 hidden xs:flex">
              <Monitor size={16} className="sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
              <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white">Mongodb</span>
            </div>

            <div className="absolute top-3/4 -left-14 sm:-left-20 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 sm:p-3 flex items-center gap-1 sm:gap-2 animate-float-slow z-20 hidden xs:flex">
              <Zap size={16} className="sm:w-5 sm:h-5 text-yellow-600 dark:text-yellow-400" />
              <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white">NextJs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator - hide on smaller screens */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden sm:flex">
        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">Scroll Down</span>
        <a href="#about" className="animate-bounce">
          <ArrowDown size={20} className="sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;