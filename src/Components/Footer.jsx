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
                <BsInstagram size={30} color='white' />
                <BsTelegram size={30} color='white' />
                <BsFacebook size={30} color='white' />
            </div>
        </div>
    )
}

export default Footer