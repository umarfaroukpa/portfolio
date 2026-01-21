import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const EASING = [0.22, 1, 0.36, 1] as const;

const VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: EASING } 
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  iconHover: {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } }
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://github.com/umarfaroukpa',
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/umarfaroukpa',
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn'
    },
    {
      href: 'https://x.com/FaroukIlyas',
      icon: <Twitter className="w-5 h-5" />,
      label: 'X / Twitter'
    },
    {
      href: 'mailto:yasmarfaq51@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      label: 'Email'
    }
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="relative bg-white/80 backdrop-blur-md shadow-xl dark:from-neutral-950 dark:to-neutral-900 text-neutral-700 dark:text-neutral-300 overflow-hidden mt-10 -mb-8">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-10 bottom-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute right-20 top-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={VARIANTS.staggerContainer}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0"
        >
          {/* Left: Brand & Description */}
          <motion.div variants={VARIANTS.fadeUp} className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-white mb-4">
              Umar Farouk
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Frontend engineer crafting reliable, performant web experiences. Based in Abuja, Nigeria.
            </p>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div variants={VARIANTS.staggerContainer} className="flex gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={VARIANTS.iconHover}
                initial="rest"
                whileHover="hover"
                className="p-3 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-md rounded-full text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm hover:shadow-md transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.hr 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: EASING }}
          viewport={{ once: true }}
          className="my-10 border-neutral-200/50 dark:border-neutral-800/50"
        />

        {/* Bottom: Copyright & Nav */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={VARIANTS.staggerContainer}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 dark:text-neutral-400"
        >
          <motion.p variants={VARIANTS.fadeUp}>
            © {currentYear} Umar Farouk. All rights reserved.
          </motion.p>

          <nav>
            <motion.ul 
              variants={VARIANTS.staggerContainer}
              className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0"
            >
              {navLinks.map((link, i) => (
                <motion.li key={i} variants={VARIANTS.fadeUp}>
                  <a 
                    href={link.href} 
                    className="hover:text-neutral-900 dark:hover:text-white transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-0.5 bg-neutral-900 dark:bg-white w-0 group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;