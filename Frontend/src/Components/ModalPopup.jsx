import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';


const ModalPopup = ({ setIsOpen }) => {
    return (
        <div className='top-0 left-0 z-50 fixed flex justify-center items-center bg-black/70 bg-opacity-50 w-full h-full'>
            <div className='bg-zinc-200 shadow-lg p-6 rounded-lg w-11/12 md:w-1/3'>
                <FaCheckCircle size={40} className='mx-auto text-teal-600' />
                <h2 className='mb-4 font-bold text-teal-600 text-xl text-center'>
                    Message Sent
                </h2>
                <p className='text-gray-700 text-md text-center'>Thank you for your message! I will get back to you soon.</p>
                <button onClick={() => setIsOpen(false)} className='bg-cyan-500 hover:bg-cyan-700 mt-4 px-2 py-2 rounded w-full text-white transition duration-200 cursor-pointer'>Close</button>
            </div>
        </div>
    )
}

export default ModalPopup