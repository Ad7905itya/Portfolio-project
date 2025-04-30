import React from 'react'
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-cyan-700 m-auto p-10 border-cyan-200 border-t-4 max-w-[1550px] h-52'>
            <h1 className='mb-4'><a
                className='font-bold text-white text-2xl'
                target='_blank'
                rel='noopener noreferrer'
                href="https://mail.google.com/mail/?view=cm&fs=1&to=6306043783s@gmail.com">6306043783s@gmail.com</a></h1>
            <div className='flex gap-4'>
                <a target='_blank' href="https://www.instagram.com/aditya_singh7905/">
                    <BsInstagram size={30} color='white' className='bg-linear-85 from-red-400 via-yellow-500 to-purple-400 p-2 rounded-md w-12 h-12'  />
                </a>
                <a target='_blank' href="https://web.telegram.org/k/#@Adityasingh6306">
                    <BsTelegram size={30} color='white' className='bg-cyan-600 p-2 rounded-full w-12 h-12'  />
                </a>
                <a target='_blank' href="https://www.facebook.com/profile.php?id=61550890487714">
                    <BsFacebook size={30} color='white' className='bg-blue-600 p-2 rounded-full w-12 h-12' />
                </a>
            </div>
            <p className='mt-4 text-white hover:text-cyan-200 cursor-pointer'>Copyright &copy; Aditya Singh</p>
        </div>
    )
}

export default Footer