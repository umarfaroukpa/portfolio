import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

// Define types for certification data
interface Certification {
    id: number;
    title: string;
    issuer: string;
    date: string;
    category: string;
    link?: string;
    description: string;
}

interface CertificationCategory {
    category: string;
    icon: React.ReactNode;
}

// Sample certification data (replace with your actual certifications)
const certificationsData: Certification[] = [
    {
        id: 1,
        title: 'Frontend Development',
        issuer: 'Altschool Africa',
        date: 'August 2023 to August 2024',
        category: 'Frontend',
        link: 'https://www.udemy.com/certificate/UC-12345678/',
        description: 'Frontend Development. Learned advanced technologies concepts, algorithms, and data structures',
    },
    {
        id: 2,
        title: 'Full Stack Development',
        issuer: 'Zuri Internship',
        date: 'March 2021',
        category: 'Fullstack',
        link: 'https://www.freecodecamp.org/certification/umarfaroukpa/javascript-algorithms-and-data-structures',
        description: 'Completed a full-stack development course covering HTML, CSS, JavaScript, and React.',
    },
    {
        id: 3,
        title: 'Node.js and Express.js',
        issuer: 'Zuri Internship',
        date: '2022',
        category: 'Backend',
        link: 'https://www.coursera.org/account/accomplishments/certificate/ABC123',
        description: 'Developed RESTful APIs and middleware using Node.js and Express.',
    },
];

// Certification categories (aligned with skills categories from About.tsx)
const certificationCategories: CertificationCategory[] = [
    {
        category: 'All',
        icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-indigo-600 dark:text-indigo-400" />,
    },
    {
        category: 'Frontend',
        icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />,
    },
    {
        category: 'Backend',
        icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-green-500" />,
    },
    {
        category: 'Tools',
        icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />,
    },
];

const Certifications: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    // Memoize filtered certifications
    const filteredCertifications = useMemo(
        () =>
            activeCategory === 'All'
                ? certificationsData
                : certificationsData.filter((cert) => cert.category === activeCategory),
        [activeCategory]
    );

    return (
        <section
            id="certifications"
            className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        >
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="mb-8 md:mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                        Certifications
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-800 dark:text-white">
                        My <span className="text-indigo-600 dark:text-indigo-400">Credentials</span>
                    </h2>
                    <div className="w-16 md:w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4 md:mb-8"></div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Professional certifications that validate my expertise in web development and design.
                    </p>
                </motion.div>

                {/* Category Tabs - Scrollable on mobile */}
                <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-2 hide-scrollbar">
                    <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        {certificationCategories.map((category) => (
                            <motion.button
                                key={category.category}
                                className={`flex items-center whitespace-nowrap px-3 sm:px-4 py-2 rounded-md transition-colors text-sm md:text-base ${
                                    activeCategory === category.category
                                        ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                                }`}
                                onClick={() => setActiveCategory(category.category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`Filter by ${category.category}`}
                            >
                                {category.icon}
                                <span className="ml-1 md:ml-2">{category.category}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Certifications Grid */}
                <AnimatePresence>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {filteredCertifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 md:p-6"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-start md:items-center mb-3 md:mb-4">
                                    <div className="bg-indigo-100 dark:bg-indigo-900 p-1.5 md:p-2 rounded-md mr-3 shrink-0">
                                        <Award className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base md:text-lg text-gray-800 dark:text-white line-clamp-1">{cert.title}</h3>
                                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                                    </div>
                                </div>
                                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                    {cert.description}
                                </p>
                                <div className="flex justify-between items-center flex-wrap gap-2">
                                    <span className="text-xs md:text-sm text-indigo-600 dark:text-indigo-400">{cert.date}</span>
                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                            aria-label={`View ${cert.title} certificate`}
                                        >
                                            <span>View</span>
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty state when no certifications match the filter */}
                {filteredCertifications.length === 0 && (
                    <motion.div 
                        className="text-center py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-gray-500 dark:text-gray-400">No certifications found in this category.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Certifications;