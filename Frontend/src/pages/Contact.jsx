import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        console.log('Form data:', formData);

        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setLoading(false);
        }, 2000);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="px-5 md:px-20 py-10 text-white"
        >
            <h2 className="mb-8 font-bold text-cyan-400 text-3xl text-center">Contact Me</h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 bg-gray-800 shadow-md mx-auto p-8 border border-cyan-500 rounded-2xl max-w-2xl"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 p-3 border border-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 p-3 border border-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 p-3 border border-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                ></textarea>

                <button
                    type="submit"
                    disabled={loading}
                    className={`flex justify-center items-center gap-2 px-6 py-2 rounded-md font-semibold text-white transition-all 
                        ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-600'}`}
                >
                    {loading && (
                        <svg
                            className="w-5 h-5 text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                        </svg>
                    )}
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </motion.div>
    )
}

export default Contact
