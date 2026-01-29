import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MapPin, Calendar, Clock } from 'lucide-react';
import Email from './Email';
   
   

const EASING = [0.22, 1, 0.36, 1] as const;

const VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: EASING } 
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2
      }
    }
  },
  iconFloat: {
    rest: { y: 0 },
    hover: { y: -4, transition: { duration: 0.4, ease: EASING } }
  },
  underlineReveal: {
    hidden: { width: '0%' },
    visible: { width: '100%', transition: { duration: 0.5, ease: EASING } }
  }
};

interface ContactLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export const ContactLink = ({ href, label, icon }: ContactLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3 text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
      variants={VARIANTS.iconFloat}
      initial="rest"
      whileHover="hover"
    >
      <div className="p-3 rounded-lg bg-neutral-100/80 dark:bg-neutral-800/60 backdrop-blur-sm group-hover:bg-neutral-200/80 dark:group-hover:bg-neutral-700/60 transition-colors">
        {icon}
      </div>
      <span>{label}</span>

      {/* Underline effect */}
      <motion.span
        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300 rounded-full"
        variants={VARIANTS.underlineReveal}
        initial="hidden"
        whileHover="visible"
      />
    </motion.a>
  );
};

const Contact = ({ prefersReducedMotion = false }: { prefersReducedMotion?: boolean }) => {
  const contactLinks = [
    {
      href: "https://github.com/umarfaroukpa",
      label: "GitHub",
      icon: <Github className="w-6 h-6" />
    },
    {
      href: "https://www.linkedin.com/in/umar-farouk-ilyas-51a509170", 
      label: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />
    },
    {
      href: 'https://x.com/FaroukIlyas',
      icon: <Twitter className="w-5 h-5" />,
      label: 'X / Twitter'
    },
  ];

  return (
    <section id='contact' className="relative py-28 md:py-36 px-5 sm:px-8 lg:px-12 bg-white/80 backdrop-blur-md shadow-xl overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={VARIANTS.staggerContainer}
        >
          {/* Header */}
          <motion.div variants={VARIANTS.fadeUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white">
              Let's Build Something Together
            </h2>
            <p className="mt-5 text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Open to freelance, full-time roles, collaborations, or just interesting conversations.
            </p>
          </motion.div>

          {/* Main contact card - glassmorphism */}
          <motion.div
            variants={VARIANTS.fadeUp}
            className="backdrop-blur-xl bg-white/70 dark:bg-neutral-900/60 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-2xl shadow-black/5 dark:shadow-black/30 p-8 md:p-12"
          >
            <div className="space-y-10">
              {/* Email Form Component */}
              <motion.div variants={VARIANTS.fadeUp}>
                <Email />
              </motion.div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200/50 dark:border-neutral-800/50" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/70 dark:bg-neutral-900/60 text-neutral-500 dark:text-neutral-400">
                    Or connect with me on
                  </span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 flex-wrap">
                {contactLinks.map((link) => (
                  <ContactLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                    icon={link.icon}
                  />
                ))}
              </div>

              {/* Optional location / availability hint */}
              <motion.div 
                variants={VARIANTS.fadeUp}
                className="pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50 text-center text-neutral-600 dark:text-neutral-400"
              >
                <div className="flex items-center justify-center gap-6 text-sm flex-wrap">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Abuja, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>UTC+1 (WAT)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Available for new projects • 2026</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Final warm closing */}
          <motion.p
            variants={VARIANTS.fadeUp}
            className="mt-12 text-center text-neutral-500 dark:text-neutral-400 italic text-lg"
          >
            Looking forward to hearing from you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;