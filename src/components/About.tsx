import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Monitor,
  Server,
  Database,
  GitBranch,
  Layout,
  Globe,
  PenTool,
  Terminal,
  BookOpen,
} from 'lucide-react';

// Define types for skills data
interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  description: string;
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
}

// Skills data
const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: <Monitor className="w-6 h-6 text-blue-500" />,
    skills: [
      {
        name: 'HTML & CSS',
        level: 95,
        icon: <Layout className="w-5 h-5" />,
        description: 'Creating semantic, accessible markup and modern CSS with Flexbox, Grid, and animations',
      },
      {
        name: 'JavaScript',
        level: 90,
        icon: <Code className="w-5 h-5" />,
        description: 'ES6+, DOM manipulation, async programming, and modern JS patterns',
      },
      {
        name: 'TypeScript',
        level: 85,
        icon: <Terminal className="w-5 h-5" />,
        description: 'Static typing, interfaces, generics, and type guards for robust applications',
      },
      {
        name: 'React',
        level: 90,
        icon: <Globe className="w-5 h-5" />,
        description: 'Hooks, Context API, custom hooks, state management, and component optimization',
      },
      {
        name: 'Tailwind CSS',
        level: 85,
        icon: <PenTool className="w-5 h-5" />,
        description: 'Utility-first styling, responsive design, and custom configurations',
      },
      {
        name: 'NextJS',
        level: 75,
        icon: <BookOpen className="w-5 h-5" />,
        description: 'Server-side rendering, static generation, and API routes',
      },
    ],
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6 text-green-500" />,
    skills: [
      {
        name: 'NodeJS',
        level: 80,
        icon: <Server className="w-5 h-5" />,
        description: 'RESTful APIs, middleware, authentication, and Express framework',
      },
      {
        name: 'MongoDB',
        level: 80,
        icon: <Database className="w-5 h-5" />,
        description: 'Schema design, queries, aggregation, and Mongoose ODM',
      },
      {
        name: 'Firebase',
        level: 80,
        icon: <Database className="w-5 h-5" />,
        description: 'Authentication, Firestore, realtime database, and cloud functions',
      },
    ],
  },
  {
    category: 'Tools',
    icon: <GitBranch className="w-6 h-6 text-orange-500" />,
    skills: [
      {
        name: 'Git',
        level: 80,
        icon: <GitBranch className="w-5 h-5" />,
        description: 'Version control, branching strategies, and collaborative workflows',
      },
    ],
  },
];

const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Frontend');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const filteredSkills = skillsData.find((category) => category.category === activeCategory)?.skills || [];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Who I <span className="text-indigo-600 dark:text-indigo-400">Am</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Frontend developer with a passion for creating intuitive, responsive, and accessible web experiences.
          </p>
        </motion.div>

        {/* Timeline & About Me */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column - Timeline */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800 space-y-12">
              {/* Journey Point 1 */}
              <div className="relative">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    2022 - Present
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1 mb-2">
                    Frontend Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building responsive web applications with React, Next.js, and modern frontend tools.
                  </p>
                </div>
              </div>

              {/* Journey Point 2 */}
              <div className="relative Bosco">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    2021 - 2022
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1 mb-2">
                    UI/UX Designer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Designed user interfaces and experiences for web and mobile applications focusing on usability.
                  </p>
                </div>
              </div>

              {/* Journey Point 3 */}
              <div className="relative">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    2020 - 2021
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1 mb-2">
                    Web Development Student
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Learned fundamentals of web development, JavaScript, and modern frameworks.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Me Information */}
          <motion.div
            className="lg:col-span-7 flex flex-col md:flex-row gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-2/5">
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="src/assets/my-pic.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-200 dark:bg-indigo-900 rounded-xl -z-10"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-800 rounded-xl -z-10"></div>
              </div>
            </div>

            <div className="md:w-3/5">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Frontend Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate frontend developer with a strong foundation in creating modern web applications. With a background in design and user experience, I focus on building intuitive and visually appealing interfaces that deliver exceptional user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I love solving complex problems through clean, efficient code and am constantly expanding my skills to stay at the forefront of web development technologies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Name</span>
                  <span className="font-medium text-gray-800 dark:text-white">Umar Farouk</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Location</span>
                  <span className="font-medium text-gray-800 dark:text-white">Kaduna, Nigeria</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Email</span>
                  <span className="font-medium text-gray-800 dark:text-white">yasmarfaq51@gmail.com</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <span className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Experience</span>
                  <span className="font-medium text-gray-800 dark:text-white">3 Years</span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg transition-colors shadow-md hover:shadow-xl"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="pt-16 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h3>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
              {skillsData.map((category) => (
                <motion.button
                  key={category.category}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${activeCategory === category.category
                      ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                    }`}
                  onClick={() => {
                    setActiveCategory(category.category);
                    setSelectedSkill(null); // Reset selected skill when changing category
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon}
                  <span className="ml-2">{category.category}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <AnimatePresence>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer"
                  onClick={() =>
                    setSelectedSkill(selectedSkill === skill.name ? null : skill.name)
                  }
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-md mr-3">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">{skill.name}</h4>
                      <div className="text-sm text-indigo-600 dark:text-indigo-400">
                        {skill.level}%
                      </div>
                    </div>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-4">
                    <motion.div
                      className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    ></motion.div>
                  </div>

                  {/* Expandable description */}
                  <AnimatePresence>
                    {selectedSkill === skill.name && (
                      <motion.div
                        className="text-gray-600 dark:text-gray-300 text-sm"
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 100, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.description}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default About;