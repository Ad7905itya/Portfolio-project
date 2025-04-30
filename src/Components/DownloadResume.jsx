import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'

const DownloadResume = ({ ResumeUrl, onHandler }) => {
    return (
        <div className='flex flex-col items-center gap-3 mt-5 p-5 border-4 border-cyan-600 rounded-xl max-w-xl'>
            <h1 className='font-bold text-3xl uppercase'>Frontend Developer</h1>
            <p className='text-center'>
                Hi there! Thank you for visiting my portfolio. <br />
                I'm a frontend developer with experience in HTML5, CSS3, JavaScript, Tailwind CSS, and React.js. <br />
                I'm also proficient with Git for version control and commonly use tools like VS Code and Figma for development and UI design.
            </p>
            <div className='flex gap-4 mt-4'>
                <button
                    className='bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded-xl text-white uppercase transition cursor-pointer'
                    onClick={onHandler}
                >
                    Download Resume
                </button>

                <a
                    href={ResumeUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center bg-white hover:bg-cyan-600 px-6 py-2 border-2 border-cyan-600 rounded-xl text-cyan-600 hover:text-white uppercase transition'
                >
                    <AiOutlineEye className='inline mr-2 text-lg' />
                    View Resume
                </a>
            </div>

        </div>
    )
}

export default DownloadResume