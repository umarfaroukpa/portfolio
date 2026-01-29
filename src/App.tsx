import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Certifications from './components/Progress';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Projects from './components/Projects';


const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

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
        <Projects prefersReducedMotion={false} />
        <About />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;