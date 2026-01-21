import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Certifications from './components/Progress';
import Hero from './components/Hero';
import About from './components/About';
import { ContactLink } from './components/Contact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Projects from './components/Projects';


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
        <Projects prefersReducedMotion={false} />
        <About />
        <Certifications />
        <ContactLink href="mailto:yasmarfaq51@email.com" label="Email" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

