import { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Calendar, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured?: boolean;
  year?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Content Creation Platform",
    description: "A comprehensive platform for content creators to manage their projects, collaborate with teams, and track progress. Features include user authentication, markdown support, and real-time collaboration tools.",
    image: "/chatter.png",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    github: "https://github.com/umarfaroukpa/chatter-platform",
    demo: "https://chatter-platform.vercel.app",
    featured: true,
    year: "2024"
  },
  {
    id: 2,
    title: "Weather App",
    description: "A sophisticated weather application providing real-time forecasts, location-based weather data, and interactive weather maps with detailed analytics.",
    image: "/weather.png",
    tags: ["React", "API Integration", "Geolocation", "CSS Modules"],
    github: "https://github.com/umarfaroukpa/weather-app",
    demo: "https://umarfaroukpa.github.io/weather-app/",
    year: "2024"
  },
  {
    id: 3,
    title: "Healthcare Provider Search",
    description: "Advanced healthcare platform with hospital search capabilities, export functionality, social sharing, user authentication, and comprehensive markdown support.",
    image: "/carefinder.png",
    tags: ["React", "TypeScript", "React DnD", "Firebase"],
    github: "https://github.com/umarfaroukpa/carefinder",
    demo: "https://carefinder-blond.vercel.app",
    featured: true,
    year: "2024"
  },
  {
    id: 4,
    title: "URL Shortener & Custom URL Generator",
    description: "Professional URL shortening service with custom URL generation, QR code creation, detailed analytics, and markdown-supported documentation.",
    image: "/shorty.png",
    tags: ["NextJS", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/shorty",
    demo: "https://shorty-sigma.vercel.app",
    year: "2024"
  },
  {
    id: 5,
    title: "Todo App",
    description: "A responsive task management application with advanced features for adding, editing, categorizing, and organizing daily tasks with productivity insights.",
    image: "/todo.png",
    tags: ["React", "LocalStorage", "CSS", "JavaScript"],
    github: "https://github.com/umarfaroukpa/ToDo-App",
    demo: "https://umarfaroukpa.github.io/ToDo-App/",
    year: "2023"
  },
  {
    id: 6,
    title: "Restaurant Page",
    description: "An elegant restaurant website showcasing menu items, contact information, reservation capabilities, and immersive dining experience features.",
    image: "/afridish.png",
    tags: ["JavaScript", "HTML", "CSS", "Webpack"],
    github: "https://github.com/umarfaroukpa/Restaurant-Page",
    demo: "https://umarfaroukpa.github.io/Restaurant-Page/",
    year: "2023"
  },
  {
    id: 7,
    title: "Library Books",
    description: "A digital library management system allowing users to track, categorize, and manage their reading collection with detailed book information.",
    image: "/library.png",
    tags: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    github: "https://github.com/umarfaroukpa/Library-Books",
    demo: "https://umarfaroukpa.github.io/Library-Books",
    year: "2023"
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "A modern personal portfolio website showcasing skills, experiences, and projects in web development with smooth animations and responsive design.",
    image: "/generator.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    github: "https://github.com/umarfaroukpa/CV-Generataor",
    demo: "https://generator-blush-eta.vercel.app/",
    year: "2024"
  },
  {
    id: 9,
    title: "GitHub API Explorer",
    description: "An advanced application leveraging the GitHub API to search for users, display repositories, analyze activity data, and provide developer insights.",
    image: "/fetch.png",
    tags: ["React", "API Integration", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/github-fecth-api-react",
    demo: "https://github-fecth-api-react.vercel.app/",
    year: "2024"
  },
  {
    id: 10,
    title: "Personal Blog",
    description: "A sophisticated personal blog platform built with modern technologies, featuring article publishing, content management, and reader engagement tools.",
    image: "/blog.png",
    tags: ["NextJS", "MongoDB", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/blog",
    demo: "https://blog-phi-five-71.vercel.app",
    year: "2024"
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [projectsPerView, setProjectsPerView] = useState(2);

  const filters = ['All', 'React', 'TypeScript', 'NextJS', 'Tailwind CSS', 'JavaScript'];

  // Update number of visible projects based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProjectsPerView(1);
      } else if (window.innerWidth < 1024) {
        setProjectsPerView(2);
      } else {
        setProjectsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.tags.includes(activeFilter));

  const visibleProjects = filteredProjects.slice(startIndex, startIndex + projectsPerView);
  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex + projectsPerView < filteredProjects.length;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setStartIndex(prev => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setStartIndex(prev => Math.min(filteredProjects.length - projectsPerView, prev + 1));
    }
  };

  useEffect(() => {
    setStartIndex(0);
  }, [activeFilter, projectsPerView]);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
            <Star size={16} />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative web applications and digital solutions. Each project represents a unique challenge solved with modern technologies and creative problem-solving.
          </p>
        </div>

        {/* Enhanced Filter Section */}
        <div className="mb-12 overflow-x-auto pb-2">
          <div className="flex gap-3 md:gap-4 md:flex-wrap md:justify-center min-w-max px-4">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Enhanced Navigation Buttons */}
          {(projectsPerView > 1 || window.innerWidth >= 640) && (
            <>
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${
                  canScrollLeft
                    ? 'bg-white/90 dark:bg-slate-800/90 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transform hover:scale-110'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                }`}
                aria-label="Previous project"
              >
                <ChevronLeft size={24} className="mx-auto" />
              </button>

              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${
                  canScrollRight
                    ? 'bg-white/90 dark:bg-slate-800/90 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transform hover:scale-110'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                }`}
                aria-label="Next project"
              >
                <ChevronRight size={24} className="mx-auto" />
              </button>
            </>
          )}

          {/* Enhanced Project Cards */}
          <div ref={scrollContainerRef} className="overflow-hidden px-4 md:px-14">
            <div className="flex flex-col sm:flex-row transition-all duration-500 ease-out gap-8">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="w-full sm:flex-1 min-w-0 group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-700">
                    {/* Enhanced Image Section */}
                    <div className="relative aspect-video overflow-hidden">
                      {project.featured && (
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-full">
                          <Star size={14} />
                          Featured
                        </div>
                      )}
                      {project.year && (
                        <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                          <Calendar size={14} />
                          {project.year}
                        </div>
                      )}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Enhanced Content Section */}
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Enhanced Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 font-medium"
                        >
                          <Github size={18} />
                          <span>Code</span>
                        </a>

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-xl"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Pagination */}
          <div className="flex justify-center mt-10 gap-3">
            {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * projectsPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(startIndex / projectsPerView) === index
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;