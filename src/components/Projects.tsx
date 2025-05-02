import React, { useState, useRef } from 'react';
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
    title: "E-Commerce Dashboard",
    description: "A responsive admin dashboard for e-commerce platforms with real-time analytics, inventory management and order processing capabilities.",
    image: "src/assets/Screenshot (10).png",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    github: "https://github.com/umarfaroukpa/chatter-platform",
    demo: "https://chatter-platform.vercel.app"
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather application that provides real-time forecasts, location-based weather data, and interactive weather maps.",
    image: "src/assets/Screenshot (8).png",
    tags: ["React", "API Integration", "Geolocation", "CSS Modules"],
    github: "https://github.com/umarfaroukpa/weather-app",
    demo: "https://umarfaroukpa.github.io/weather-app/"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "A comprehensive task management application with features like drag-and-drop task organization, reminders, and team collaboration.",
    image: "/api/placeholder/600/350",
    tags: ["React", "TypeScript", "React DnD", "Firebase"],
    github: "https://github.com/umarfaroukpa/carefinder",
    demo: "https://carefinder-blond.vercel.app"
  },
  {
    id: 4,
    title: "Personal Blog",
    description: "A markdown-supported blog platform with categories, tags, and a dynamic commenting system.",
    image: "/api/placeholder/600/350",
    tags: ["NextJS", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/shorty",
    demo: "https://shorty-sigma.vercel.app"
  },
  {
    id: 5,
    title: "Todo App",
    description: "A responsive task tracking application with features for adding, editing, and organizing daily tasks.",
    image: "/api/placeholder/600/350",
    tags: ["React", "LocalStorage", "CSS", "JavaScript"],
    github: "https://github.com/umarfaroukpa/ToDo-App",
    demo: "https://umarfaroukpa.github.io/ToDo-App/"
  },
  {
    id: 6,
    title: "Restaurant Page",
    description: "An elegant restaurant website showcasing menu items, contact information, and reservation capabilities.",
    image: "/api/placeholder/600/350",
    tags: ["JavaScript", "HTML", "CSS", "Webpack"],
    github: "https://github.com/umarfaroukpa/Restaurant-Page",
    demo: "https://umarfaroukpa.github.io/Restaurant-Page/"
  },
  {
    id: 7,
    title: "Library Books",
    description: "A digital library application allowing users to track, categorize, and manage their reading collection.",
    image: "/api/placeholder/600/350",
    tags: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    github: "https://github.com/umarfaroukpa/Library-Books",
    demo: "https://umarfaroukpa.github.io/Library-Books"
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, experiences, and projects in web development.",
    image: "/api/placeholder/600/350",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    github: "https://github.com/umarfaroukpa/portfolio",
    demo: "#"
  },
  {
    id: 9,
    title: "GitHub API Explorer",
    description: "An application leveraging the GitHub API to search for users and display their repositories and activity data.",
    image: "/api/placeholder/600/350",
    tags: ["React", "API Integration", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/github-fecth-api-react",
    demo: "https://github-fecth-api-react.vercel.app/"
  },
  {
    id: 10,
    title: "URL Shortener",
    description: "A web application that shortens long URLs and provides analytics on link usage and click-through rates.",
    image: "/api/placeholder/600/350",
    tags: ["NextJS", "MongoDB", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/shorty",
    demo: "https://shorty-sigma.vercel.app"
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [startIndex, setStartIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filters = ['All', 'React', 'TypeScript', 'NextJS', 'Tailwind CSS', 'JavaScript'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.tags.includes(activeFilter));

  const visibleProjects = filteredProjects.slice(startIndex, startIndex + 2);
  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex + 2 < filteredProjects.length;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setStartIndex(prev => prev - 1);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setStartIndex(prev => prev + 1);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience in frontend development.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveFilter(filter);
                setStartIndex(0); // Reset to first item when changing filter
              }}
              className={`px-4 py-2 rounded-md transition-colors ${activeFilter === filter
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md ${canScrollLeft
                ? 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
                : 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
              }`}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md ${canScrollRight
                ? 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
                : 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
              }`}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Project carousel container */}
          <div
            ref={scrollContainerRef}
            className="overflow-hidden px-10"
          >
            <div className="flex transition-all duration-300 ease-in-out gap-8">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex-1 min-w-0 bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
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
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(filteredProjects.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * 2)}
                className={`w-3 h-3 rounded-full ${Math.floor(startIndex / 2) === index
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