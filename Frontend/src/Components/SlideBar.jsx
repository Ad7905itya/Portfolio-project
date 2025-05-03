import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const SlideBar = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  const closeModal = () => setIsOpen(false);

  return (
    <div className='z-50 fixed inset-0 flex justify-end bg-black/75 bg-opacity-75'>
      <div className='bg-white shadow-lg px-6 py-8 w-3/4 sm:w-1/2 h-full animate-slideIn'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='font-bold text-cyan-700 text-2xl'>Navigation</h2>
          <IoMdClose
            size={26}
            className='text-gray-600 hover:text-red-500 cursor-pointer'
            onClick={closeModal}
          />
        </div>

        <nav className='flex flex-col gap-6 text-lg'>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeModal}
              className='text-gray-800 hover:text-cyan-600 transition'
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SlideBar;
