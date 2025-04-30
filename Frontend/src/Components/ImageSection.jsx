import React from 'react'

const ImageSection = ({ Animate }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className={`relative bg-cyan-700 shadow-2xl border-4 border-cyan-200 rounded-full ${!Animate ? 'animate-softBounce transition-all' : ''} w-52 h-52 overflow-hidden`}>
                <img src="assets/images/Home.png" alt="Home" className='-mt-2 ml-3' draggable={false} />
            </div>

            <div className={`bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,transparent_80%)] mt-2 rounded-full w-40 h-6 ${!Animate ? 'animate-shadowPulse transition-all' : ''}`} />

            <h2 className='mt-6 font-bold text-3xl tracking-wider'>I'm <span className='font-extrabold text-cyan-600'>Aditya Singh</span></h2>
        </div>
    )
}

export default ImageSection