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
        {/* <ContactLink
          href="mailto:yasmarfaq51@email.com"
          label="Email"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          }
        />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;

