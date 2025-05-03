import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Input from '../Components/Input';
import ModalPopup from '../Components/ModalPopup';
import { createPortal } from 'react-dom';

const Contact = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [Error, setError] = useState({
        name: {
            error: false,
            message: '',
            message1: 'Name is required',
            message2: 'Name must be at least 3 characters long',
            message3: 'Name must not contain numbers',
            minLength: 3
        },
        email: {
            error: false,
            message: '',
            message1: 'Email is required',
            message2: 'Email must be a valid email address',
            minLength: 0
        },
        message: {
            error: false,
            message: '',
            message1: 'Message is required',
            message2: 'Message must be at least 10 characters long',
            minLength: 10
        }
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError({ ...Error, [e.target.name]: { ...Error[e.target.name], error: false } });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = { ...Error };
        let isError = false;

        // Name Validation
        if (!formData.name.trim()) {
            newErrors.name.error = true;
            newErrors.name.message = newErrors.name.message1;
            isError = true;
        } else if (formData.name.length < newErrors.name.minLength) {
            newErrors.name.error = true;
            newErrors.name.message = newErrors.name.message2;
            isError = true;
        } else if (/\d/.test(formData.name)) {
            newErrors.name.error = true;
            newErrors.name.message = newErrors.name.message3;
            isError = true;
        } else {
            newErrors.name.error = false;
            newErrors.name.message = '';
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email.error = true;
            newErrors.email.message = newErrors.email.message1;
            isError = true;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email.error = true;
            newErrors.email.message = newErrors.email.message2;
            isError = true;
        } else {
            newErrors.email.error = false;
            newErrors.email.message = '';
        }

        // Message Validation
        if (!formData.message.trim()) {
            newErrors.message.error = true;
            newErrors.message.message = newErrors.message.message1;
            isError = true;
        } else if (formData.message.length < newErrors.message.minLength) {
            newErrors.message.error = true;
            newErrors.message.message = newErrors.message.message2;
            isError = true;
        } else {
            newErrors.message.error = false;
            newErrors.message.message = '';
        }

        setError(newErrors);

        if (isError) {
            setLoading(false);
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setIsOpen(true);
            setFormData({ name: '', email: '', message: '' });
            setLoading(false);
        }, 1500);
    };





    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="px-5 md:px-20 py-10 h-screen text-white"
        >
            <h2 className="mb-8 font-bold text-cyan-400 text-3xl text-center">Contact Me</h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 bg-gray-800 shadow-md mx-auto p-8 border border-cyan-500 rounded-2xl max-w-2xl"
            >
                <Input
                    TypeName={"input"}
                    req={true}
                    Name="name"
                    id="name"
                    PlaceName="Your Name"
                    value={formData.name}
                    Error={Error.name.error && Error.name.message}
                    handleChange={handleChange} />

                <Input
                    TypeName={"input"}
                    Name="email"
                    id="email"
                    PlaceName="Your Email"
                    value={formData.email}
                    Error={Error.email.error && Error.email.message}
                    handleChange={handleChange} />

                <Input
                    TypeName={"textarea"}
                    Name="message"
                    id="message"
                    PlaceName="Your Message"
                    value={formData.message}
                    Error={Error.message.error && Error.message.message}
                    handleChange={handleChange} />

                <button
                    type="submit"
                    disabled={loading}
                    className={`flex justify-center items-center gap-2 px-6 py-2 rounded-md font-semibold text-white transition-all  cursor-pointer
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

            {IsOpen && createPortal (
                <ModalPopup setIsOpen={setIsOpen} />,
                document.getElementById('portal')
            )}
        </motion.div>
    )
}

export default Contact
