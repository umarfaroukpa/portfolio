import React, { useState, useEffect } from 'react';
import { Github, Linkedin, X, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Frontend Developer";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Umar Farouk</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-200 h-8">
          <span>{typedText}</span>
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
          Building beautiful, responsive and user-friendly web applications with modern technologies.
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <a href="https://github.com/umarfaroukpa" target="_blank" rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/FaroukIlyas" target="_blank" rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors">
            <X size={24} />
          </a>
          <a href="mailto:yasmarfaq51@gmail.com"
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors">
            <Mail size={24} />
          </a>
        </div>

        <a href="#about" className="inline-block animate-bounce">
          <ArrowDown size={32} className="text-indigo-600 dark:text-indigo-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;