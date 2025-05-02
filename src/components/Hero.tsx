import React, { useState, useEffect } from 'react';
import { Github, Linkedin, X, Mail, ArrowDown, Code, Monitor, Zap } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textOptions = ["Frontend Developer", "Problem Solver", "Coding Enthusiast", "Developing with  Passion"];
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
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left side - text content */}
        <div className="w-full lg:w-1/2 text-left pt-12 lg:pt-0">
          <div className="mb-4 flex items-center">
            <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
              Available for work
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mt-12 mb-6 text-gray-800 dark:text-white leading-tight">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Umar Farouk</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-200 h-14 flex items-center">
            <span className="text-indigo-600 dark:text-indigo-400">{typedText}</span>
            <span className="animate-pulse ml-1">|</span>
          </h2>

          <p className="text-lg max-w-xl mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
            Building beautiful, responsive and user-friendly web applications with modern technologies that deliver exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              Let's Talk
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              View Projects
            </a>
          </div>

          <div className="flex space-x-4 mb-8">
            <a
              href="https://github.com/umarfaroukpa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors shadow-md hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors shadow-md hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/FaroukIlyas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors shadow-md hover:shadow-lg"
              aria-label="Twitter"
            >
              <X size={20} />
            </a>
            <a
              href="mailto:yasmarfaq51@gmail.com"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors shadow-md hover:shadow-lg"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right side - image and floating elements */}
        <div className="w-full lg:w-1/2 flex justify-center relative mb-12 lg:mb-0">
          <div className="relative">
            {/* Main image with gradient overlay */}
            <div className="w-64 h-64 md:w-80 md:h-80 -mt-8 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/30 to-purple-600/30 z-20"></div>
              <img src="src/assets/my-pic.png" alt="Umar Farouk" className="w-full h-full object-cover" />
            </div>

            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 dark:bg-yellow-500 rounded-lg animate-float opacity-70"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-indigo-400 dark:bg-indigo-600 rounded-full animate-float-delay opacity-70"></div>
              <div className="absolute top-1/2 -right-12 w-20 h-20 bg-pink-400 dark:bg-pink-600 rounded-lg rotate-12 animate-float-slow opacity-70"></div>
            </div>

            {/* Floating skill cards */}
            <div className="absolute -top-6 -left-16 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 flex items-center gap-2 animate-float z-20">
              <Code size={20} className="text-indigo-600 dark:text-indigo-400" />
              <span className="font-medium text-gray-800 dark:text-white">ReactJs</span>
            </div>

            <div className="absolute -bottom-4 -right-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 flex items-center gap-2 animate-float-delay z-20">
              <Monitor size={20} className="text-green-600 dark:text-green-400" />
              <span className="font-medium text-gray-800 dark:text-white">Mongodb</span>
            </div>

            <div className="absolute top-3/4 -left-20 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 flex items-center gap-2 animate-float-slow z-20">
              <Zap size={20} className="text-yellow-600 dark:text-yellow-400" />
              <span className="font-medium text-gray-800 dark:text-white">NextJs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
        <a href="#about" className="animate-bounce">
          <ArrowDown size={24} className="text-indigo-600 dark:text-indigo-400" />
        </a>
      </div>

      {/* Animation classes are defined in the main CSS file instead */}
    </section>
  );
};

export default Hero;