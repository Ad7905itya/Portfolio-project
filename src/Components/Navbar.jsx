import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { BsMenuButtonWide } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { useLocation } from 'react-router-dom';



const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const [Active, setActive] = useState({
            first: true,
            second: false,
            third: false,
            fourth: false
        });

    const OnClick = (key) => {
        setActive({
            first: key === 'first',
            second: key === 'second',
            third: key === 'third',
            fourth: key === 'fourth'
        });
    };

    const location = useLocation();
    useEffect(() => {
        const path = location.pathname;
        setActive({
            first: path === '/',
            second: path === '/about',
            third: path === '/skills',
            fourth: path === '/projects'
        });
    }, [location.pathname]);

    return (
        <header className='flex justify-between items-center m-auto px-8 py-3 border-cyan-500 border-b-2 w-full max-w-[1550px] h-24'>
            <h1 className='font-bold text-cyan-700 text-4xl'>Aditya</h1>
            <div className='hidden md:flex items-center gap-12 mx-5 text-xl'>
                <div className='flex gap-6'>
                    <Link onClick={() => OnClick('first')} className={Active.first ? 'text-cyan-600' : 'hover:text-cyan-600'} to='/'>Home</Link>
                    <Link onClick={() => OnClick('second')} className={Active.second ? 'text-cyan-600' : 'hover:text-cyan-600'} to='/about'>About</Link>
                    <Link onClick={() => OnClick('third')} className={Active.third ? 'text-cyan-600' : 'hover:text-cyan-600'} to='/skills'>Skills</Link>
                    <Link onClick={() => OnClick('fourth')} className={Active.fourth ? 'text-cyan-600' : 'hover:text-cyan-600'} to='/projects'>Projects</Link>
                </div>
                <div className='bg-cyan-700 px-8 py-2 rounded-xl text-white'>
                    <Link to='/Contact'>Contact me</Link>
                </div>
            </div>
            <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(true)}>
                <BsMenuButtonWide size={18} />
            </div>
            {createPortal(<Modal isOpen={IsOpen} setIsOpen={setIsOpen} />, document.getElementById('portal'))}
        </header>
    )
}

export default Navbar