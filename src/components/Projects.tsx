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
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
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
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/30 transition"
                        >
                          View Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium hover:bg-white/30 transition"
                        >
                          Source
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {!imageLoaded && (
                <div className="absolute inset-0 bg-neutral-100 animate-pulse" />
              )}
            </>
          ) : (
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

        <motion.div
          className="space-y-6"
          variants={VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          {...animationProps}
        >
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

          <motion.div variants={VARIANTS.item}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Problem
            </h4>
            <p className="text-base text-neutral-700">{project.problem}</p>
          </motion.div>

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

          <motion.div variants={VARIANTS.item}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Outcome
            </h4>
            <p className="text-base text-neutral-700 font-medium">{project.outcome}</p>
          </motion.div>

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
      context: 'A comprehensive web application designed to help users find and book hospitals in Nigeria',
      problem: 'Finding healthcare facilities and booking appointments was fragmented and time-consuming',
      decisions: [
        'Hospital search with location-based filtering and specialty matching',
        'Role-based access control for users, moderators, and administrators',
        'Firebase integration for authentication and real-time data'
      ],
      outcome: 'Simplified hospital discovery with user reviews, ratings, and seamless appointment booking',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'MongoDB'],
      image: '/carefinder.png',
      liveUrl: 'https://carefinder-blond.vercel.app/',
      githubUrl: 'https://github.com/umarfaroukpa/carefinder'
    },
    {
      id: 'p2',
      title: 'AfriDish Restaurant',
      context: 'Responsive website for a restaurant specializing in authentic African cuisine',
      problem: 'Needed an interactive platform to showcase menu, enable reservations, and highlight cultural heritage',
      decisions: [
        'Interactive navigation with smooth tab switching between pages',
        'Filterable menu with dynamic cart functionality',
        'Mobile-first responsive design with Webpack bundling'
      ],
      outcome: 'Enhanced user experience with reservation system, testimonial slider, and Google Maps integration',
      tech: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Webpack'],
      image: '/afridish.png',
      liveUrl: 'https://umarfaroukpa.github.io/Restaurant-Page',
      githubUrl: 'https://github.com/umarfaroukpa/Restaurant-Page'
    },
    {
      id: 'p3',
      title: 'Shorty URL Shortener',
      context: 'URL shortening app with custom domains, user authentication, and analytics',
      problem: 'Users needed branded short links with custom domains and detailed tracking',
      decisions: [
        'Custom domain logic with DNS verification for branded URLs',
        'MongoDB for scalable link storage and analytics',
        'Next.js with Vercel deployment for optimal performance'
      ],
      outcome: 'Personalized short URLs with domain customization and comprehensive tracking analytics',
      tech: ['Next.js', 'MongoDB', 'Vercel', 'TypeScript'],
      image: '/shorty.png',
      liveUrl: 'https://shorty-sigma.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/shorty'
    },
    {
      id: 'p4',
      title: 'Chatter Platform',
      context: 'A Next.js content creation platform for writers to create, share, and connect',
      problem: 'Writers needed a unified platform to personalize their experience and build community',
      decisions: [
        'Onboarding flow to tailor experience by writer type',
        'Firebase Authentication with responsive Tailwind CSS design',
        'Interactive dashboard for content creation and social feed'
      ],
      outcome: 'User-friendly platform with personalized dashboards and built-in help guide for seamless navigation',
      tech: ['Next.js', 'React', 'Firebase', 'Tailwind CSS'],
      image: '/chatter.png',
      liveUrl: 'https://chatter-platform.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/chatter-platform'
    },
    {
      id: 'p5',
      title: 'Library Management System',
      context: 'Library management system for tracking books with read/unread toggles',
      problem: 'Needed a simple interface to manage personal book collections and reading status',
      decisions: [
        'Vanilla JavaScript with Webpack for bundling',
        'Toggle functionality for read/unread status tracking',
        'GitHub Pages deployment for easy access'
      ],
      outcome: 'Lightweight book tracking system with intuitive status management',
      tech: ['Vanilla JavaScript', 'HTML5', 'CSS3', 'Webpack', 'GitHub Pages'],
      image: '/library.png',
      liveUrl: 'https://umarfaroukpa.github.io/Library-Books',
      githubUrl: 'https://github.com/umarfaroukpa/Library-Books'
    },
    {
      id: 'p6',
      title: 'CV Generator',
      context: 'A React application for creating and customizing professional CVs/résumés',
      problem: 'Users needed an easy way to build professional CVs with real-time preview',
      decisions: [
        'Interactive form with real-time CV preview',
        'Edit and update functionality for iterative refinement',
        'Responsive layout for desktop and mobile devices'
      ],
      outcome: 'Clean, professional CV builder with instant visual feedback and mobile accessibility',
      tech: ['React', 'JavaScript', 'CSS3', 'Vite'],
      image: '/generator.png',
      liveUrl: 'https://generator-blush-eta.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/CV-Generataor'
    },
    {
      id: 'p7',
      title: 'Devcore Agency',
      context: 'Next.js agency workflow platform with role-based dashboards and project management',
      problem: 'Agencies needed unified project, task, and approval management across roles',
      decisions: [
        'Role-based dashboards for Admin, Developer, and Client users',
        'JWT authentication with Zustand for persisted state',
        'Data export capabilities (XLSX/PDF) and Recharts for reporting'
      ],
      outcome: 'Comprehensive agency management with contact inbox, invites, approvals, and analytics',
      tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Axios', 'Zustand', 'Recharts, nodejs, express, render, JWT'],
      image: '/devcore.png',
      liveUrl: 'https://devcore-agency-snowy.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/Devcore-Agency-Frontend'
    },
    {
      id: 'p8',
      title: 'Academy Hub',
      context: 'Comprehensive academic management platform for universities with multi-role support',
      problem: 'Universities needed streamlined course management, enrollment, and assignment workflows',
      decisions: [
        'Multi-role authentication with Google OAuth integration',
        'Role-based dashboards for students, lecturers, and administrators',
        'Complete CRUD operations for courses, assignments, and enrollments'
      ],
      outcome: 'Unified platform with study groups, grade tracking, and comprehensive analytics for all roles',
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Axios', 'SWR', 'Google OAuthm nodejs, express, render, JWT, MongoDB, docker,'],
      image: '/academy.png',
      liveUrl: 'https://academic-manager.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/AcademyHub-frontend'
    },
    {
      id: 'p9',
      title: 'Asset Manager',
      context: 'Comprehensive asset management platform with subscription billing and role-based access',
      problem: 'Organizations needed complete lifecycle tracking with QR codes and usage-based pricing',
      decisions: [
        'Multi-tenant architecture with Firebase Authentication',
        'Flexible subscription plans (Starter, Professional, Enterprise) with Paystack integration',
        'QR code scanning for mobile field operations and real-time analytics'
      ],
      outcome: 'Full-featured platform with 14-day trials, audit trails, and advanced analytics for enterprise use',
      tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Chart.js', 'Vite, nodejs, express, render, JWT'],
      image: '/asset.png',
      liveUrl: 'https://asset-management-eta.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/Asset-Manager-Frontend/tree/main/asset-management'
    },
    {
      id: 'p10',
      title: 'Blog Site',
      context: 'A modern blogging platform with content creation, user authentication, and social features',
      problem: 'Writers needed a unified platform to personalize their experience and build community',
      decisions: [
        'Multi-tenant architecture with Firebase Authentication',
        'Flexible subscription plans (Starter, Professional, Enterprise) with Paystack integration',
        'QR code scanning for mobile field operations and real-time analytics'
      ],
      outcome: 'Full-featured ',
      tech: ['React 18', 'TypeScript', 'Tailwind CSS',  'Vite'],
      image: '/blog.png',
      liveUrl: 'https://blog-phi-five-71.vercel.app',
      githubUrl: 'https://github.com/umarfaroukpa/blog'
    }
  ];

  return (
    <section id='projects' className="max-w-7xl mx-auto py-16 px-4 md:px-8">
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