import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Form from '../Components/Form';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="px-5 md:px-20 py-10 h-screen text-white"
        >
            <h2 className="mb-8 font-bold text-cyan-400 text-3xl text-center">Contact Me</h2>
            <Form />  
        </motion.div>
    )
}

export default Contact
