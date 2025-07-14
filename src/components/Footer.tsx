
import { Github, Linkedin, X, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-800 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-indigo-400">DevPortfolio</h2>
            <p className="text-gray-400 mt-2 max-w-sm">
              Frontend developer creating modern and responsive web applications.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/umarfaroukpa" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full text-gray-300 hover:bg-indigo-800 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full text-gray-300 hover:bg-indigo-800 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/FaroukIlyas" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full text-gray-300 hover:bg-indigo-800 hover:text-white transition-colors">
              <X size={24} />
            </a>
            <a href="mailto:yasmarfaq51@gmail.com"
              className="p-2 bg-gray-800 rounded-full text-gray-300 hover:bg-indigo-800 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Umar Farouk Ilyas. All rights reserved.
            </p>

            <nav>
              <ul className="flex flex-wrap justify-center gap-6">
                <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;