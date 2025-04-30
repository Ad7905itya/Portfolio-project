import React from 'react'

const ProjectCard = ({ name, url, codeLink, image }) => {
    return (
        <div className="flex flex-col items-center bg-gray-800 shadow-md hover:shadow-cyan-400/40 p-5 border border-cyan-400 rounded-2xl text-white hover:scale-105 transition-all duration-300">
            <img
                src={image}
                alt={name}
                className="mb-4 border-2 border-cyan-500 rounded-xl w-24 h-24 object-cover"
            />
            <h3 className="mb-3 font-semibold text-cyan-300 text-lg text-center">{name}</h3>

            <div className="flex gap-3">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 px-3 py-1 rounded-md text-white text-sm transition"
                >
                    Live Demo
                </a>
                <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-white text-sm transition"
                >
                    View Code
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
    