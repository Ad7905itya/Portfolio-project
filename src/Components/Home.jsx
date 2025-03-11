import React from 'react'

const Home = () => {
    const ResumeUrl = './Resume.pdf';

    const onHandler = () => {
        const link = document.createElement('a');
        link.href = ResumeUrl;
        link.download = 'Resume.pdf';
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section className='flex flex-col justify-center items-center gap-10 m-auto p-10 w-full max-w-[1550px] min-h-screen'>
            <div className='flex flex-col items-center'>
                <div className='bg-cyan-700 shadow-2xl border-4 border-cyan-200 rounded-full w-52 h-52 overflow-hidden'>
                    <img src="assets/images/Home.png" alt="Home" className='-mt-2 ml-3' />
                </div>
                <h2 className='mt-4 font-bold text-2xl'>I'm Aditya</h2>
            </div>
            <div className='flex flex-col items-center gap-3 mt-5 p-5 border-4 border-cyan-600 rounded-xl max-w-xl'>
                <h1 className='font-bold text-3xl uppercase'>Frontend Developer</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum sed tenetur voluptatem ipsum quam maxime, architecto voluptates soluta animi cum numquam sapiente, eos, ex dolorum nihil. Nihil, delectus eos!</p>
                <button
                    className='bg-cyan-600 px-8 py-3 rounded-xl text-white uppercase'
                    onClick={onHandler}>
                    Download Resume
                </button>
            </div>
        </section>
    )
}

export default Home