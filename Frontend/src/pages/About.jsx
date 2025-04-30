import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }} className='flex md:flex-row flex-col m-auto w-full max-w-[1550px] min-h-screen'>

            {/* Image Section */}
            <div className='flex justify-center items-center p-6 w-full md:w-[40%] h-screen'>
                <div className='group relative shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-4 border-cyan-200 rounded-2xl w-72 md:w-80 h-72 md:h-80 overflow-hidden transition-all duration-500'>
                    <img
                        src="assets/images/Home.png"
                        alt="Aditya"
                        className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
                        draggable={false}
                    />
                    <div className='absolute inset-0 bg-cyan-700 opacity-10 group-hover:opacity-0 transition-opacity duration-500'></div>
                </div>
            </div>



            {/* About Content */}
            <div className='flex flex-col justify-center items-center gap-5 px-6 w-full md:w-[60%] md:text-left text-center'>
                <h1 className='font-bold text-cyan-700 text-4xl uppercase'>About Me</h1>

                <p className='max-w-xl text-gray-700 text-lg'>
                    My name is <span className="font-semibold text-cyan-600">Aditya Singh</span>, and I’m a passionate frontend developer skilled in HTML, CSS, JavaScript, Tailwind CSS, and React.js. <br /><br />
                    I love exploring new technologies and enjoy building clean, responsive user interfaces. I’m also familiar with tools like Git, VS Code, and Figma which help me streamline the development process. <br /><br />
                    Apart from coding, I enjoy gaming and always look forward to learning new things in the world of web development.
                </p>


                {/* Tags */}
                <div className='flex flex-wrap gap-4 mt-6'>
                    <span className='bg-slate-600 px-4 py-2 rounded-xl text-white text-sm'>Front-end Developer</span>
                    <span className='bg-slate-600 px-4 py-2 rounded-xl text-white text-sm'>Software Developer</span>
                    <span className='bg-slate-600 px-4 py-2 rounded-xl text-white text-sm'>Machine Learning Enthusiast</span>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
