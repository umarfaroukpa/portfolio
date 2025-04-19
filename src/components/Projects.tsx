import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

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
    image: "src/assets/Screenshot (9).png",
    tags: ["React", "TypeScript", "React DnD", "Firebase"],
    github: "https://github.com/umarfaroukpa/carefinder",
    demo: "https://carefinder-blond.vercel.app"
  },
  {
    id: 4,
    title: "Personal Blog",
    description: "A markdown-supported blog platform with categories, tags, and a dynamic commenting system.",
    image: "src/assets/Screenshot (11).png",
    tags: ["NextJS", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/shorty",
    demo: "https://shorty-sigma.vercel.app"
  },
  {
    id: 5,
    title: "Personal Blog",
    description: "A markdown-supported blog platform with categories, tags, and a dynamic commenting system.",
    image: "src/assets/Screenshot (12).png ",
    tags: ["NextJS", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/ToDo-App",
    demo: "https://umarfaroukpa.github.io/ToDo-App/"
  },
  {
    id: 6,
    title: "Personal Blog",
    description: "A markdown-supported blog platform with categories, tags, and a dynamic commenting system.",
    image: "src/assets/Screenshot (13).png",
    tags: ["NextJS", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/Restaurant-Page",
    demo: "https://umarfaroukpa.github.io/Restaurant-Page/"
  },
  {
    id: 7,
    title: "Personal Blog",
    description: "A markdown-supported blog platform with categories, tags, and a dynamic commenting system.",
    image: "src/assets/Screenshot (14).png",
    tags: ["NextJS", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/shorty",
    demo: "https://umarfaroukpa.github.io/Library-Books"
  },
  {
    id: 8,
    title: "Personal Blog",
    description: "A markdown-supported blog platform with categories, tags, and a dynamic commenting system.",
    image: "src/assets/Screenshot (11).png",
    tags: ["NextJS", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/shorty",
    demo: "https://umarfaroukpa.github.io/Library-Books"
  },
  {
    id: 9,
    title: "Personal Blog",
    description: "A markdown-supported blog platform with categories, tags, and a dynamic commenting system.",
    image: "src/assets/Screenshot (11).png",
    tags: ["NextJS", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/shorty",
    demo: "https://shorty-sigma.vercel.app"
  },
  {
    id: 10,
    title: "Personal Blog",
    description: "A markdown-supported blog platform with categories, tags, and a dynamic commenting system.",
    image: "src/assets/Screenshot (11).png",
    tags: ["NextJS", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/umarfaroukpa/shorty",
    demo: "https://shorty-sigma.vercel.app"
  },

];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'React', 'TypeScript', 'NextJS', 'Tailwind CSS'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.tags.includes(activeFilter));

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
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md transition-colors ${activeFilter === filter
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
    </section>
  );
};

export default Projects;