import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { BsMenuButtonWide } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import Modal from './Modal';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path
      ? 'text-cyan-600 font-semibold'
      : 'text-gray-700 hover:text-cyan-600 transition';

  return (
    <header className='flex justify-between items-center mx-auto px-6 py-4 border-cyan-500 border-b-2 w-full max-w-[1550px] h-24'>
      <h1 className='font-bold text-cyan-700 text-4xl'>Aditya</h1>

      {/* Desktop Nav */}
      <nav className='hidden md:flex items-center gap-10 text-lg'>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={getLinkClass(link.to)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to='/contact'
          className='bg-cyan-700 hover:bg-cyan-800 ml-6 px-6 py-2 rounded-xl text-white transition'
        >
          Contact Me
        </Link>
      </nav>

      {/* Mobile Nav Toggle */}
      <div className='md:hidden cursor-pointer' onClick={() => setIsOpen(true)}>
        <BsMenuButtonWide size={22} className='text-cyan-700' />
      </div>

      {/* Modal Nav for Mobile */}
      {createPortal(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />,
        document.getElementById('portal')
      )}
    </header>
  );
};

export default Navbar;
