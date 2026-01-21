import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';

const EASING = [0.22, 1, 0.36, 1] as any; 

const VARIANTS = {
  slideFromLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: EASING }
    }
  },
  slideFromRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: EASING, delay: 0.2 }
    }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, ease: EASING, delay: 0.5 }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  },
  socialItem: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: EASING }
    }
  },
  textStagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  },
  textItem: {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: EASING }
    }
  }
};

const Hero = ({ prefersReducedMotion }: { prefersReducedMotion?: boolean }) => {
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

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 relative">
      {/* Social Icons - Slide in from Left */}
      <motion.div
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate="visible"
        variants={VARIANTS.staggerContainer}
        className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={`hero-social-${link.label}-${index}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={VARIANTS.socialItem}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Hero Content - Slide in from Right */}
      <motion.div
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate="visible"
        variants={VARIANTS.textStagger}
        className="max-w-3xl"
      >
        <motion.h1 
          variants={VARIANTS.textItem}
          className="text-5xl md:text-6xl font-medium leading-tight tracking-tight mb-6"
        >
          I build web interfaces that feel stable, clear, and intentional.
        </motion.h1>
        
        <motion.p 
          variants={VARIANTS.textItem}
          className="text-xl text-neutral-600 leading-relaxed mb-8"
        >
          Web developer focused on performance, accessibility, and systems thinking.
          Motion serves understanding—not attention.
        </motion.p>
        
        {/* Action Buttons */}
        <motion.div
          variants={VARIANTS.textItem}
          className="flex gap-4 flex-wrap"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium"
          >
            Contact Me
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1hGzSQCepGCpD_uRrMXQqn5YLa3D4qmjf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 border border-neutral-300 rounded-lg hover:border-neutral-400 hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-medium inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;