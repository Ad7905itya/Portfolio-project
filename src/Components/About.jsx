import React from 'react'

const About = () => {
    return (
        <div className='max-w-[1550px] w-full min-h-screen m-auto flex flex-col md:flex-row'>
            <div className='w-full md:w-[40%] h-screen flex items-center justify-center'>
                <div className='bg-cyan-700 w-96 h-7/12 border-4 shadow-2xl border-cyan-200 overflow-hidden rounded-xl'>
                    <img src="assets/images/Home.png" alt="Home" className='-mt-2 ml-3' />
                </div>
            </div>
            <div className='w-full md:w-[60%] px-4 md:h-screen h-full gap-5 flex flex-col items-center justify-center mb-10 md:mb-0'>
                <h1 className='text-4xl font-bold uppercase'>About Me</h1>
                <p className='max-w-xl text-xl'>My name is Aditya singh, and I am a passionate and web Developer specializing in the mern stack. I love new technologies and creating innovative solutions. with exercise in full stack development, I efficiently handle Front-end tasks. Gaming is my hobbies. I Motivated professional who is always ready to take on new Challenges and Contribute to the web development community.</p>
                
            <div className='mt-10'>
                <span className='bg-slate-500 py-2 px-3 text-white rounded-xl'>
                Front-end Developer
                </span>
                <span className='bg-slate-500 py-2 px-3 text-white rounded-xl ml-4'>
                Software Developer
                </span>
                <span className='bg-slate-500 py-2 px-3 text-white rounded-xl ml-4'>
                Machine Learning
                </span>
            </div>
            </div>
        </div>
    )
}

export default About