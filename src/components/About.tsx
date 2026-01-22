import { motion,   } from 'framer-motion';
import { Layout, Zap, Target, Eye, } from 'lucide-react';
   
  
  
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
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  },
  iconPop: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.5, ease: EASING } 
    }
  }
};

interface AboutProps {
  prefersReducedMotion?: boolean;
}

const About = ({ prefersReducedMotion = false }: AboutProps) => {
  const animationProps = {};

  const paragraphs = [
    "Over the past 3+ years, I've focused on building web applications people actually rely on — from internal coordination tools and data-heavy dashboards to customer-facing platforms that need to perform under pressure.",
    "I approach problems system-first: strong layout hierarchies, predictable state patterns, tight performance budgets, and thoughtful accessibility from day one.",
    "I obsess over the small things that build trust — reliable keyboard navigation, honest loading states, graceful error handling, and micro-interactions that clarify rather than decorate."
  ];

  const principles = [
    { icon: <Layout className="w-6 h-6" />, text: "Clarity before everything" },
    { icon: <Zap className="w-6 h-6" />, text: "Performance as a feature" },
    { icon: <Target className="w-6 h-6" />, text: "Respect for user attention" },
    { icon: <Eye className="w-6 h-6" />, text: "Predictable & accessible UX" }
  ];

  return (
    <section  id='about' className="relative py-28 md:py-36 px-5 sm:px-8 lg:px-12 bg-white/80 backdrop-blur-md shadow-xl overflow-hidden">
      {/* Optional subtle background texture / gradient orb */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -left-20 top-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute right-10 bottom-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          animate={prefersReducedMotion ? "visible" : undefined}
          viewport={{ once: true, margin: "-80px" }}
          variants={VARIANTS.staggerContainer}
        >
          {/* Header */}
          <motion.div variants={VARIANTS.fadeUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white">
              Designing Reliable Digital Experiences
            </h2>
            <p className="mt-5 text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Systems thinker. Detail obsessive. Frontend engineer focused on clarity, performance, and trust.
            </p>
          </motion.div>

          {/* Main content card - glassmorphism */}
          <motion.div
            variants={VARIANTS.fadeUp}
            className="relative backdrop-blur-xl bg-white/70 dark:bg-neutral-900/60 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-2xl shadow-black/5 dark:shadow-black/30 p-8 md:p-12"
          >
            <div className="space-y-8 md:space-y-10 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              {paragraphs.map((text, i) => (
                <motion.p 
                  key={i} 
                  variants={VARIANTS.fadeUp}
                  className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-neutral-900 dark:first-letter:text-white first-letter:mr-1 first-letter:float-left"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Principles / values grid */}
            <motion.div 
              variants={VARIANTS.staggerContainer}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {principles.map((principle, i) => (
                <motion.div
                  key={i}
                  variants={VARIANTS.iconPop}
                  className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/40 dark:bg-neutral-800/40 border border-neutral-200/40 dark:border-neutral-700/40 backdrop-blur-sm hover:bg-white/60 dark:hover:bg-neutral-800/60 transition-colors duration-300"
                >
                  <div className="text-neutral-700 dark:text-neutral-300">
                    {principle.icon}
                  </div>
                  <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    {principle.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Optional subtle CTA or signature feel */}
          <motion.div 
            variants={VARIANTS.fadeUp}
            className="mt-12 text-center"
          >
            <p className="text-neutral-500 dark:text-neutral-400 italic">
              “Build for clarity first. Motion only when it teaches. Attention is scarce—don’t waste it.”
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;