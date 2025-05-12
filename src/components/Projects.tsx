import React, { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Content Creation Platform",
    description: "A platform for content creators to manage their projects, collaborate with teams, and track progress, User Authentication, Markdown Suppor.",
    image: "/chatter.png",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    github: "https://github.com/umarfaroukpa/chatter-platform",
    demo: "https://chatter-platform.vercel.app"
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather application that provides real-time forecasts, location-based weather data, and interactive weather maps.",
    image: "/weather.png",
    tags: ["React", "API Integration", "Geolocation", "CSS Modules"],
    github: "https://github.com/umarfaroukpa/weather-app",
    demo: "https://umarfaroukpa.github.io/weather-app/"
  },
  {
    id: 3,
    title: "Healthcare Provider Search",
    description: "Hospital Search, Export Hospitals, Share Hospitals, User Authentication, Markdown Suppor",
    image: "/carefinder.png",
    tags: ["React", "TypeScript", "React DnD", "Firebase"],
    github: "https://github.com/umarfaroukpa/carefinder",
    demo: "https://carefinder-blond.vercel.app"
  },
  {
    id: 4,
    title: "Url Shortener & Custom Url Generator",
    description: "URL-Shortening, Custom URL Generator, A markdown-supported,  QR Code Generation,  Analytics",
    image: "/shorty.png",
    tags: ["NextJS", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/shorty",
    demo: "https://shorty-sigma.vercel.app"
  },
  {
    id: 5,
    title: "Todo App",
    description: "A responsive task tracking application with features for adding, editing, and organizing daily tasks.",
    image: "/todo.png",
    tags: ["React", "LocalStorage", "CSS", "JavaScript"],
    github: "https://github.com/umarfaroukpa/ToDo-App",
    demo: "https://umarfaroukpa.github.io/ToDo-App/"
  },
  {
    id: 6,
    title: "Restaurant Page",
    description: "An elegant restaurant website showcasing menu items, contact information, and reservation capabilities.",
    image: "/afridish.png",
    tags: ["JavaScript", "HTML", "CSS", "Webpack"],
    github: "https://github.com/umarfaroukpa/Restaurant-Page",
    demo: "https://umarfaroukpa.github.io/Restaurant-Page/"
  },
  {
    id: 7,
    title: "Library Books",
    description: "A digital library application allowing users to track, categorize, and manage their reading collection.",
    image: "/library.png",
    tags: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    github: "https://github.com/umarfaroukpa/Library-Books",
    demo: "https://umarfaroukpa.github.io/Library-Books"
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, experiences, and projects in web development.",
    image: "/generator.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    github: "https://github.com/umarfaroukpa/CV-Generataor",
    demo: "https://generator-blush-eta.vercel.app/"
  },
  {
    id: 9,
    title: "GitHub API Explorer",
    description: "An application leveraging the GitHub API to search for users and display their repositories and activity data.",
    image: "/fetch.png",
    tags: ["React", "API Integration", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/github-fecth-api-react",
    demo: "https://github-fecth-api-react.vercel.app/"
  },
  {
    id: 10,
    title: "Personal Blog",
    description: "A personal blog platform built with React.js, allowing users to read articles published.",
    image: "/blog.png",
    tags: ["NextJS", "MongoDB", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/blog",
    demo: "https://blog-phi-five-71.vercel.app"
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [startIndex, setStartIndex] = useState(0);
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

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
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

  // Reset startIndex when filter changes or screen resizes
  useEffect(() => {
    setStartIndex(0);
  }, [activeFilter, projectsPerView]);

  return (
    <section id="projects" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center text-gray-800 dark:text-white">
          My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience in frontend development.
        </p>

        {/* Filter buttons - scrollable on mobile */}
        <div className="mb-8 md:mb-12 overflow-x-auto pb-2">
          <div className="flex gap-2 md:gap-4 md:flex-wrap md:justify-center min-w-max px-4">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveFilter(filter);
                }}
                className={`px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-md whitespace-nowrap transition-colors ${activeFilter === filter
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Navigation buttons - hide on mobile if single project view */}
          {(projectsPerView > 1 || window.innerWidth >= 640) && (
            <>
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-1 md:p-2 shadow-md ${canScrollLeft
                  ? 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
                  : 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  }`}
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-1 md:p-2 shadow-md ${canScrollRight
                  ? 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
                  : 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  }`}
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Project carousel container */}
          <div
            ref={scrollContainerRef}
            className="overflow-hidden px-4 md:px-10"
          >
            <div className="flex flex-col sm:flex-row transition-all duration-300 ease-in-out gap-6 md:gap-8">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="w-full sm:flex-1 min-w-0 bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6 sm:mb-0"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs py-1 px-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 md:gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 md:gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination indicators */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {Array.from({ length: Math.ceil(filteredProjects.length / projectsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * projectsPerView)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${Math.floor(startIndex / projectsPerView) === index
                  ? 'bg-indigo-600 dark:bg-indigo-400'
                  : 'bg-gray-300 dark:bg-gray-600'
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