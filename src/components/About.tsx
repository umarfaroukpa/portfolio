import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Monitor, Server, Database,  GitBranch,  Layout, Globe, PenTool, Terminal, BookOpen,  Award, Calendar, MapPin, Mail, User, Download, ExternalLink, ChevronRight, Star, Zap, Target } from 'lucide-react';
      
     
interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  description: string;
  color: string;
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: <Monitor className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-600',
    skills: [
      {
        name: 'HTML & CSS',
        level: 95,
        icon: <Layout className="w-5 h-5" />,
        description: 'Creating semantic, accessible markup and modern CSS with Flexbox, Grid, and animations',
        color: 'from-orange-400 to-red-500'
      },
      {
        name: 'JavaScript',
        level: 90,
        icon: <Code className="w-5 h-5" />,
        description: 'ES6+, DOM manipulation, async programming, and modern JS patterns',
        color: 'from-yellow-400 to-orange-500'
      },
      {
        name: 'TypeScript',
        level: 85,
        icon: <Terminal className="w-5 h-5" />,
        description: 'Static typing, interfaces, generics, and type guards for robust applications',
        color: 'from-blue-500 to-blue-600'
      },
      {
        name: 'React',
        level: 90,
        icon: <Globe className="w-5 h-5" />,
        description: 'Hooks, Context API, custom hooks, state management, and component optimization',
        color: 'from-cyan-400 to-blue-500'
      },
      {
        name: 'Tailwind CSS',
        level: 85,
        icon: <PenTool className="w-5 h-5" />,
        description: 'Utility-first styling, responsive design, and custom configurations',
        color: 'from-teal-400 to-cyan-500'
      },
      {
        name: 'NextJS',
        level: 75,
        icon: <BookOpen className="w-5 h-5" />,
        description: 'Server-side rendering, static generation, and API routes',
        color: 'from-gray-700 to-gray-900'
      },
    ],
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
    skills: [
      {
        name: 'NodeJS',
        level: 80,
        icon: <Server className="w-5 h-5" />,
        description: 'RESTful APIs, middleware, authentication, and Express framework',
        color: 'from-green-500 to-green-600'
      },
      {
        name: 'ExpressJS',
        level: 80,
        icon: <Server className="w-5 h-5" />,
        description: 'Schema design, queries, aggregation, and Mongoose ODM',
        color: 'from-orange-500 to-red-500'
      },
      {
        name: 'MongoDB',
        level: 80,
        icon: <Database className="w-5 h-5" />,
        description: 'Authentication, Firestore, realtime database, and cloud functions',
        color: 'from-green-500 to-green-600'
      },
      {
        name: 'Postgress',
        level: 70,
        icon: <Database className="w-5 h-5" />,
        description: 'Authentication, Firestore, realtime database, and cloud functions',
        color: 'from-orange-500 to-red-500'
      },
      {
        name: 'Firebase',
        level: 80,
        icon: <Database className="w-5 h-5" />,
        description: 'Authentication, Firestore, realtime database, and cloud functions',
        color: 'from-green-500 to-green-600'
      },
      {
        name: 'Supabase',
        level: 75,
        icon: <Database className="w-5 h-5" />,
        description: 'Authentication, Firestore, realtime database, and cloud functions',
        color: 'from-orange-500 to-red-500'
      },
    ],
  },
  {
    category: 'Tools',
    icon: <GitBranch className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-600',
    skills: [
      {
        name: 'Git',
        level: 90,
        icon: <GitBranch className="w-5 h-5" />,
        description: 'Version control, branching strategies, and collaborative workflows',
        color: 'from-blue-500 to-blue-600'
      },
       {
        name: 'Vercel',
        level: 95,
        icon: <GitBranch className="w-5 h-5" />,
        description: 'Version control, branching strategies, and collaborative workflows',
        color: 'from-orange-500 to-red-600'
      },
       {
        name: 'Render',
        level: 70,
        icon: <GitBranch className="w-5 h-5" />,
        description: 'Version control, branching strategies, and collaborative workflows',
        color: 'from-yellow-400 to-orange-500'
      },
       {
        name: 'Railway',
        level: 70,
        icon: <GitBranch className="w-5 h-5" />,
        description: 'Version control, branching strategies, and collaborative workflows',
        color: 'from-cyan-400 to-blue-500'
      },
       {
        name: 'Github Actions',
        level: 65,
        icon: <GitBranch className="w-5 h-5" />,
        description: 'Version control, branching strategies, and collaborative workflows',
        color: 'from-teal-400 to-cyan-500'
      },
       {
        name: 'Docker',
        level: 65,
        icon: <GitBranch className="w-5 h-5" />,
        description: 'Version control, branching strategies, and collaborative workflows',
        color: 'from-gray-700 to-gray-900'
      },
    ],
  },
];

const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Frontend');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const filteredSkills = skillsData.find((category) => category.category === activeCategory)?.skills || [];

  const achievements = [
    { icon: <Award className="w-5 h-5" />, label: 'Projects Completed', value: '10+' },
    { icon: <Star className="w-5 h-5" />, label: 'Years Experience', value: '3+' },
    { icon: <Zap className="w-5 h-5" />, label: 'Technologies', value: '15+' },
    { icon: <Target className="w-5 h-5" />, label: 'Client Satisfaction', value: '100%' },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Enhanced Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Who I <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Am</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate developer with a strong foundation in creating modern web applications that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 mb-20">
          {/* Left Column - Enhanced Timeline */}
          <motion.div
            className="xl:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
              <div className="space-y-8">
                
                {/* Journey Point 1 */}
                <div className="relative flex items-start">
                  <div className="absolute left-3 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">2023 - 2024</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Diploma In Frontend Development
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Building responsive web applications with React, Next.js, and modern frontend tools.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">React</span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">Next.js</span>
                    </div>
                  </div>
                </div>

                {/* Journey Point 2 */}
                <div className="relative flex items-start">
                  <div className="absolute left-3 w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">2023</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Zuri Backend Development Internship
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Learned backend development with Node.js, Express, and MongoDB.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">Node.js</span>
                      <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium">MongoDB</span>
                    </div>
                  </div>
                </div>

                {/* Journey Point 3 */}
                <div className="relative flex items-start">
                  <div className="absolute left-3 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-16 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      <span className="text-sm font-medium text-orange-600 dark:text-orange-400">2022</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Zuri Fullstack Development Internship
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Learned fundamentals of web development, JavaScript, and modern frameworks.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">JavaScript</span>
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">Fullstack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Enhanced About Me */}
          <motion.div
            className="xl:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Profile Image */}
              <div className="lg:col-span-2">
                <div className="relative group">
                  <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src="/my-pic.png"
                      alt="Profile"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-2xl -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-800/50 dark:to-purple-800/50 rounded-2xl -z-10"></div>
                </div>
              </div>

              {/* About Information */}
              <div className="lg:col-span-3">
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Frontend <span className="text-indigo-600 dark:text-indigo-400">Developer</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate developer with a strong foundation in creating modern web applications. With a background in design and user experience, I focus on building intuitive and visually appealing interfaces that deliver exceptional user experiences.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I love solving complex problems through clean, efficient code and am constantly expanding my skills to stay at the forefront of web development technologies.
                </p>

                {/* Enhanced Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-2">
                      <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</span>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">Umar Farouk</span>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</span>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">Kaduna, Nigeria</span>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</span>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">yasmarfaq51@gmail.com</span>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Experience</span>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">3+ Years</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Let's Talk</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300">
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mb-4">
                <span className="text-white">{achievement.icon}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{achievement.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{achievement.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Enhanced Skills Section */}
        <motion.div
          className="pt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels across different technologies.
            </p>
          </div>

          {/* Enhanced Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
              {skillsData.map((category) => (
                <motion.button
                  key={category.category}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.category
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-700'
                  }`}
                  onClick={() => {
                    setActiveCategory(category.category);
                    setSelectedSkill(null);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon}
                  <span>{category.category}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Enhanced Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border border-gray-100 dark:border-slate-700 group"
                  onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-md`}>
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{skill.name}</h4>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Proficiency: {skill.level}%
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-300 dark:text-gray-600 group-hover:text-indigo-500 transition-colors">
                      {skill.level}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mb-4">
                      <motion.div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-700 ease-out`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedSkill === skill.name && (
                      <motion.div
                        className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed pt-4 border-t border-gray-100 dark:border-slate-700"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
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