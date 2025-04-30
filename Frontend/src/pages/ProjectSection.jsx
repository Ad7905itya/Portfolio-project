import React from 'react'
import projects from '../Data/Projects'
import ProjectCard from '../Components/ProjectCard'
import { motion } from 'framer-motion'

const ProjectSection = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }} className="bg-gray-200 px-4 sm:px-8 py-10 min-h-screen text-white">
        <h1 className="mb-8 font-bold text-cyan-700 text-3xl text-center">My Projects</h1>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-6xl">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    </motion.div>
    )
}

export default ProjectSection