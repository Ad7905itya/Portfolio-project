import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Tailwind CSS',
    'React.js',
    'Git & GitHub',
    'VS Code',
    'Figma',
  ];

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }} className="flex flex-col justify-center items-center gap-10 m-auto p-10 w-full max-w-[1550px] min-h-screen">
      {/* Heading */}
      <div className="text-center">
        <h1 className="font-bold text-cyan-700 text-4xl uppercase">My Skills</h1>
        <p className="mt-3 max-w-xl text-gray-600">
          Here are some of the technologies and tools I’ve worked with during my frontend development journey.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl p-5 border-2 border-cyan-500 rounded-xl font-semibold text-cyan-700 text-center transition-all duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
