import { useState, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Layout, 
  Code, 
  Database, 
  Server, 
  Zap, 
  GitBranch, 
  Terminal, 
  Layers, 
  Globe, 
  Cpu, 
  ShieldCheck, 
  Rocket 
} from 'lucide-react';

const EASING = [0.22, 1, 0.36, 1] as const;

const VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: EASING } 
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  },
  cardHover: {
    rest: { y: 0, scale: 1 },
    hover: { y: -8, scale: 1.02, transition: { duration: 0.4, ease: EASING } }
  },
  iconPop: {
    hidden: { scale: 0.7, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: EASING } }
  }
};

interface SkillGroup {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const Skills = () => {
  const skillGroups: SkillGroup[] = [
    {
      title: "Building Interfaces",
      description: "Crafting responsive, accessible, and delightful user experiences",
      icon: <Layout className="w-8 h-8" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Headless UI"],
      color: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Making Things Work",
      description: "Turning ideas into reliable, performant backend logic and APIs",
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL", "REST & GraphQL", "Prisma", "Zod"],
      color: "from-emerald-500/10 to-teal-500/10"
    },
    {
      title: "Shipping & Maintaining",
      description: "Delivering fast, keeping things stable, and iterating with confidence",
      icon: <Rocket className="w-8 h-8" />,
      skills: ["Git & GitHub", "Vercel", "CI/CD", "Jest + React Testing Library", "Playwright", "Documentation", "Performance Optimization"],
      color: "from-amber-500/10 to-orange-500/10"
    }
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-white/80 backdrop-blur-md shadow-xl overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute right-20 bottom-10 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.staggerContainer}
        >
          <motion.div variants={VARIANTS.fadeUp} className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white">
              How I Build Things
            </h2>
            <p className="mt-5 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Systems-first thinking. Clean code. Obsession with clarity, speed, and reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {skillGroups.map((group, index) => (
              <SkillCard key={group.title} group={group} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ group, index }: { group: SkillGroup; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={VARIANTS.cardHover}
      initial="rest"
      whileHover="hover"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div 
        className={`
          relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-neutral-900/60 
          border border-neutral-200/60 dark:border-neutral-800/60 shadow-xl shadow-black/5 dark:shadow-black/30 
          p-8 transition-all duration-500
        `}
      >
        {/* Gradient background on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        />

        <div className="relative z-10">
          <motion.div 
            variants={VARIANTS.iconPop}
            className="text-neutral-700 dark:text-neutral-300 mb-6"
          >
            {group.icon}
          </motion.div>

          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-3">
            {group.title}
          </h3>

          <p className="text-neutral-600 dark:text-neutral-400 mb-8 min-h-[3rem]">
            {group.description}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {group.skills.map((skill) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.3 }}
                className="px-4 py-2 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-800 dark:text-neutral-200 border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm hover:shadow-md transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;