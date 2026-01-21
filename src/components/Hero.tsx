import { motion } from 'framer-motion';


const EASING = [0.22, 1, 0.36, 1] as any; 

const VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: EASING }
    }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, ease: EASING }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: EASING }
    }
  }
};

const Hero = ({ prefersReducedMotion }: { prefersReducedMotion?: boolean }) => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate="visible"
        variants={VARIANTS.fadeUp}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-medium leading-tight tracking-tight mb-6">
          I build web interfaces that feel stable, clear, and intentional.
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed">
          Web developer focused on performance, accessibility, and systems thinking.
          Motion serves understanding—not attention.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
