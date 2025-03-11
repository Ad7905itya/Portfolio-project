import React from 'react'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Modal = ({ isOpen, setIsOpen }) => {
    return (
        <div onClick={()=> setIsOpen(false)} className={`w-full h-full ${isOpen ? 'flex' : 'hidden'} bg-[rgba(0,0,0,0.6)] fixed top-0`}>
            <div onClick={(e)=> e.stopPropagation()} className='w-[50%] h-screen bg-slate-100 fixed top-0 right-0'>
                <div className='flex flex-col gap-12 items-center relative justify-center mt-20 text-xl mx-5'>
                    <GrClose size={18} className='absolute -top-[20%] right-0' onClick={() => setIsOpen(false)} />
                    <div className='flex flex-col gap-6'>
                        <Link onClick={()=> setIsOpen(false)} to='/'>Home</Link>
                        <Link onClick={()=> setIsOpen(false)} to='/about'>About</Link>
                        <Link onClick={()=> setIsOpen(false)} to='/skills'>Skills</Link>
                        <Link onClick={()=> setIsOpen(false)} to='/projects'>Projects</Link>
                    </div>
                    <div className='text-white bg-cyan-700 py-2 px-8 rounded-xl '>
                        <Link onClick={()=> setIsOpen(false)} to='/Contact'>Contact me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal