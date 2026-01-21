import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  },
  imageReveal: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, ease: EASING } 
    }
  },
  cardHover: {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -4, transition: { duration: 0.3, ease: EASING } }
  },
  overlayReveal: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  }
};

interface Project {
  id: string;
  title: string;
  context: string;
  problem: string;
  decisions: string[];
  outcome: string;
  tech: string[];
  image?: string; // Optional screenshot URL
  liveUrl?: string; // Optional live demo URL
  githubUrl?: string; // Optional GitHub URL
}

const ProjectCard = ({
  project,
  prefersReducedMotion
}: {
  project: Project;
  prefersReducedMotion?: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const animationProps = prefersReducedMotion
    ? { initial: false, animate: false }
    : {};

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-neutral-100/50 p-6 md:p-8"
      variants={VARIANTS.cardHover}
      initial="rest"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      {...animationProps}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Visual Evidence with depth and reveal */}
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-lg"
          variants={VARIANTS.imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          {...animationProps}
        >
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-auto object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
              />
              {/* Glassmorphism overlay with links on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-6 backdrop-blur-sm"
                    variants={VARIANTS.overlayReveal}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/30 transition"
                        >
                          View Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/30 transition"
                        >
                          Source
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Loading placeholder with subtle animation */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-neutral-100 animate-pulse" />
              )}
            </>
          ) : (
            // Fallback: Tech stack with glassmorphism
            <div className="p-6 bg-white/50 backdrop-blur-md rounded-xl">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-600 mb-4">
                Built with
              </h4>
              <motion.ul
                className="flex flex-wrap gap-2"
                variants={VARIANTS.staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {project.tech.map((tech) => (
                  <motion.li
                    key={tech}
                    variants={VARIANTS.item}
                    className="px-3 py-1 bg-neutral-100/80 rounded-full text-sm font-medium text-neutral-800"
                  >
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          )}
        </motion.div>

        {/* Right: Project Details with better typography and fluid expansions */}
        <motion.div
          className="space-y-6"
          variants={VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          {...animationProps}
        >
          {/* Title & Context - Elegant typography */}
          <motion.h3
            variants={VARIANTS.fadeUp}
            className="text-2xl md:text-3xl font-serif font-bold text-neutral-900"
          >
            {project.title}
          </motion.h3>
          <motion.p
            variants={VARIANTS.fadeUp}
            className="text-base text-neutral-600 leading-relaxed"
          >
            {project.context}
          </motion.p>

          {/* Problem - Clean section */}
          <motion.div variants={VARIANTS.item}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Problem
            </h4>
            <p className="text-base text-neutral-700">{project.problem}</p>
          </motion.div>

          {/* Decisions - Accordion-like expansion with stagger */}
          <motion.div variants={VARIANTS.item}>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm font-semibold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors duration-200 flex items-center gap-2"
              aria-expanded={expanded}
            >
              Approach
              <motion.span
                animate={{ rotate: expanded ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                →
              </motion.span>
            </button>
            <AnimatePresence>
              {expanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: EASING }}
                  className="mt-3 space-y-2 pl-4"
                >
                  {project.decisions.map((decision, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="text-base text-neutral-700 list-disc"
                    >
                      {decision}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Outcome - Highlighted */}
          <motion.div variants={VARIANTS.item}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Outcome
            </h4>
            <p className="text-base text-neutral-700 font-medium">{project.outcome}</p>
          </motion.div>

          {/* Tech Stack - Inline chips */}
          <motion.div variants={VARIANTS.item} className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-neutral-100/80 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-800 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = ({ prefersReducedMotion }: { prefersReducedMotion?: boolean }) => {
  const projects: Project[] = [
    {
      id: 'p1',
      title: 'Carefinder',
      context: 'Internal tool for distributed team coordination',
      problem: 'Existing tools created noise. Teams needed clarity, not features.',
      decisions: [
        'Single-view interface—no context switching',
        'Status hierarchy through layout, not color',
        'Optimistic updates for perceived speed'
      ],
      outcome: '40% reduction in daily tool switches. Adopted across 3 departments.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Zustand'],
      image: '/carefinder.png',
      liveUrl: 'https://carefinder-blond.vercel.app/',
      githubUrl: 'https://github.com/umarfaroukpa/carefinder'
    },
    {
      id: 'p2',
      title: 'E-commerce Checkout Flow',
      context: 'High-traffic retail platform with 60% mobile usage',
      problem: 'Cart abandonment at 72%. Form friction, unclear progress.',
      decisions: [
        "Progressive disclosure—show what's needed, when needed",
        'Real-time validation with clear recovery paths',
        'Mobile-first layout with thumb-zone CTA placement'
      ],
      outcome: 'Abandonment dropped to 48%. 24% increase in mobile conversions.',
      tech: ['Next.js', 'Stripe', 'React Hook Form', 'Zod'],
      image: '/afridish.png',
      liveUrl: 'https://umarfaroukpa.github.io/Restaurant-Page',
      githubUrl: 'https://github.com/umarfaroukpa/Restaurant-Page'
    },
    {
      id: 'p3',
      title: 'Url Shortener',
      context: 'Url shortening app with user authentication and analytics',
      problem: 'Metrics overwhelmed users. Charts without narrative.',
      decisions: [
        'Hierarchy through size and position, not decoration',
        'Progressive detail—summary to drill-down',
        'Consistent layout grid for pattern recognition'
      ],
      outcome: 'Weekly usage increased 3x. Executive team adopted for quarterly reviews.',
      tech: ['React', 'D3.js', 'Chart.js', 'TanStack Query'],
      image: '/shorty.png',
      liveUrl: 'https://shorty-sigma.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/shorty'
    },
    {
      id: 'p4',
      title: 'Chatter-Platform',
      context: 'An App for chatting with friends and family',
      problem: 'Metrics overwhelmed users. Charts without narrative.',
      decisions: [
        'Hierarchy through size and position, not decoration',
        'Progressive detail—summary to drill-down',
        'Consistent layout grid for pattern recognition'
      ],
      outcome: 'Weekly usage increased 3x. Executive team adopted for quarterly reviews.',
      tech: ['React', 'D3.js', 'Chart.js', 'TanStack Query'],
      image: '/chatter.png',
      liveUrl: 'https://chatter-platform.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/chatter-platform'
    },
    {
      id: 'p5',
      title: 'Library Management System',
      context: 'Library management system for tracking books and users',
      problem: 'Metrics overwhelmed users. Charts without narrative.',
      decisions: [
        'Hierarchy through size and position, not decoration',
        'Progressive detail—summary to drill-down',
        'Consistent layout grid for pattern recognition'
      ],
      outcome: 'Weekly usage increased 3x. Executive team adopted for quarterly reviews.',
      tech: ['React', 'D3.js', 'Chart.js', 'TanStack Query'],
      image: '/library.png',
      liveUrl: 'https://umarfaroukpa.github.io/Library-Books',
      githubUrl: 'https://github.com/umarfaroukpa/Library-Books'
    },
    {
      id: 'p6',
      title: 'CV-Generator',
      context: 'A web app to create and download professional CVs',
      problem: 'Metrics overwhelmed users. Charts without narrative.',
      decisions: [
        'Hierarchy through size and position, not decoration',
        'Progressive detail—summary to drill-down',
        'Consistent layout grid for pattern recognition'
      ],
      outcome: 'Weekly usage increased 3x. Executive team adopted for quarterly reviews.',
      tech: ['React', 'D3.js', 'Chart.js', 'TanStack Query'],
      image: '/generator.png',
      liveUrl: 'https://generator-blush-eta.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/CV-Generataor'
    },
    {
      id: 'p7',
      title: 'Devcore',
      context: 'An Agency web app building and managing modern web applications',
      problem: 'Metrics overwhelmed users. Charts without narrative.',
      decisions: [
        'Hierarchy through size and position, not decoration',
        'Progressive detail—summary to drill-down',
        'Consistent layout grid for pattern recognition'
      ],
      outcome: 'Weekly usage increased 3x. Executive team adopted for quarterly reviews.',
      tech: ['React', 'D3.js', 'Chart.js', 'TanStack Query'],
      image: '/devcore.png',
      liveUrl: 'https://devcore-agency-snowy.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/Devcore-Agency-Frontend'
    },
    {
      id: 'p8',
      title: 'Academy Hub',
      context: 'Academic management system for institutions',
      problem: 'Metrics overwhelmed users. Charts without narrative.',
      decisions: [
        'Hierarchy through size and position, not decoration',
        'Progressive detail—summary to drill-down',
        'Consistent layout grid for pattern recognition'
      ],
      outcome: 'Weekly usage increased 3x. Executive team adopted for quarterly reviews.',
      tech: ['React', 'D3.js', 'Chart.js', 'TanStack Query'],
      image: '/academy.png',
      liveUrl: 'https://academic-manager.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/AcademyHub-frontend'
    },
    {
      id: 'p9',
      title: 'Asset Manager',
      context: 'an app to manage company, corporate, and individual assets',
      problem: 'Metrics overwhelmed users. Charts without narrative.',
      decisions: [
        'Hierarchy through size and position, not decoration',
        'Progressive detail—summary to drill-down',
        'Consistent layout grid for pattern recognition'
      ],
      outcome: 'Weekly usage increased 3x. Executive team adopted for quarterly reviews.',
      tech: ['React', 'D3.js', 'Chart.js', 'TanStack Query'],
      image: '/asset.png',
      liveUrl: 'https://asset-management-eta.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/Asset-Manager-Frontend/tree/main/asset-management'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
      <motion.h2
        className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-12 text-center"
        variants={VARIANTS.fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Selected Work
      </motion.h2>
      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;