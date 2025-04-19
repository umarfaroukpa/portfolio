import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

