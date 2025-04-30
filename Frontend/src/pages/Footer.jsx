import React from 'react'
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='flex flex-col items-center bg-gray-900 p-4 border-cyan-200 border-t-2 w-full max-w-[1550px]'>
            <a
                className='mb-2 font-medium text-white hover:text-cyan-300 text-sm'
                target='_blank'
                rel='noopener noreferrer'
                href="https://mail.google.com/mail/?view=cm&fs=1&to=6306043783s@gmail.com">
                6306043783s@gmail.com
            </a>

            <div className='flex gap-3 mb-2'>
                <a target='_blank' href="https://www.instagram.com/aditya_singh7905/">
                    <BsInstagram size={22} color='white' className='bg-gradient-to-r from-red-400 via-yellow-500 to-purple-500 p-1 rounded-md w-8 h-8' />
                </a>
                <a target='_blank' href="https://web.telegram.org/k/#@Adityasingh6306">
                    <BsTelegram size={22} color='white' className='bg-cyan-600 p-1 rounded-full w-8 h-8' />
                </a>
                <a target='_blank' href="https://www.facebook.com/profile.php?id=61550890487714">
                    <BsFacebook size={22} color='white' className='bg-blue-600 p-1 rounded-full w-8 h-8' />
                </a>
            </div>

            <p className='text-white hover:text-cyan-200 text-xs cursor-pointer'>
                &copy; Aditya Singh
            </p>
        </div>
    )
}

export default Footer
