import React from 'react';

const skillsData = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git", level: 80 },
  { name: "React", level: 90 },
  { name: "NextJS", level: 75 },
  { name: "Nodejs", level: 80 },
  { name: "Mongodb", level: 80 },
  { name: "Firebase", level: 80 }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="aspect-square w-70 h-70 mx-auto md:mx-0 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              <img src="src/assets/my-pic.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate frontend developer with a strong foundation in creating modern web applications. With a background in design and user experience, I focus on building intuitive and visually appealing interfaces that deliver exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I love solving complex problems through clean, efficient code and am constantly expanding my skills to stay at the forefront of web development technologies.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-800 dark:text-white"><strong>Name:</strong> <span className="text-gray-600 dark:text-gray-300">Umar Farouk</span></p>
                <p className="text-gray-800 dark:text-white"><strong>Email:</strong> <span className="text-gray-600 dark:text-gray-300">yasmarfaq51@gmail.com</span></p>
              </div>
              <div>
                <p className="text-gray-800 dark:text-white"><strong>Location:</strong> <span className="text-gray-600 dark:text-gray-300">Kaduna, Nigeria</span></p>
                <p className="text-gray-800 dark:text-white"><strong>Experience:</strong> <span className="text-gray-600 dark:text-gray-300">3 Years</span></p>
              </div>
            </div>
            
            <a href="#contact" className="inline-block mt-6 px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-white">My Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skillsData.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-700 dark:text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;