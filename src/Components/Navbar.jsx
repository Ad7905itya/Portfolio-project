import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { BsMenuButtonWide } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Modal from './Modal'

const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false);

    return (
        <header className='h-24 max-w-[1550px] py-3 px-8 m-auto w-full border-b-2 border-cyan-500 flex items-center justify-between'>
            <h1 className='text-4xl font-bold text-cyan-700'>Aditya</h1>
            <div className='hidden md:flex gap-12 items-center text-xl mx-5'>
                <div className='flex gap-6'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/skills'>Skills</Link>
                    <Link to='/projects'>Projects</Link>
                </div>
                <div className='text-white bg-cyan-700 py-2 px-8 rounded-xl '>
                    <Link to='/Contact'>Contact me</Link>
                </div>
            </div>
            <div className='md:hidden cursor-pointer' onClick={()=> setIsOpen(true)}>
                <BsMenuButtonWide size={18} />
            </div>
            {createPortal(<Modal isOpen={IsOpen} setIsOpen={setIsOpen} />, document.getElementById('portal'))}
        </header>
    )
}

export default Navbar