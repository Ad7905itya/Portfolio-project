import React, { useState } from 'react';
import { Errors } from '../Data/Errors';
import { handleSubmit } from '../contexts/HandleSubmit';
import Input from './Input';
import { createPortal } from 'react-dom';
import ModalPopup from './ModalPopup';

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [IsOpen, setIsOpen] = useState(false);
    const [Error, setError] = useState(Errors);
    const [IsVerify, setIsVerify] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [SendData, setSendData] = useState({})
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError({ ...Error, [e.target.name]: { ...Error[e.target.name], error: false } });
    };

    return (
        <>
            <form
                className="flex flex-col gap-5 bg-gray-800 shadow-md mx-auto p-8 border border-cyan-500 rounded-2xl max-w-2xl"
            >
                <Input
                    TypeName={"input"}
                    Name="name"
                    id="name"
                    PlaceName="Your Name"
                    value={formData.name}
                    Error={Error.name.error && Error.name.message}
                    handleChange={handleChange}
                />

                <Input
                    TypeName={"input"}
                    Name="email"
                    id="email"
                    PlaceName="Your Email"
                    value={formData.email}
                    Error={Error.email.error && Error.email.message}
                    handleChange={handleChange}
                />

                <Input
                    TypeName={"textarea"}
                    Name="message"
                    id="message"
                    PlaceName="Your Message"
                    value={formData.message}
                    Error={Error.message.error && Error.message.message}
                    handleChange={handleChange}
                />

                <button
                    type="submit"
                    disabled={loading}
                    onClick={(e) => handleSubmit(
                        e,
                        {
                            formData,
                            setFormData,
                            setSendData,
                            setError,
                            Error,
                            SendData,
                            setLoading,
                            setIsOpen,
                            setIsVerify
                        }
                    )}
                    className={`flex justify-center items-center gap-2 px-6 py-2 rounded-md font-semibold text-white transition-all  cursor-pointer
                    ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-600'}`}
                >
                    {loading && (
                        <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                    )}
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            {IsOpen && !IsVerify && createPortal(
                <ModalPopup
                    setIsOpen={setIsOpen}
                    isVerify={IsVerify}
                    setIsVerify={setIsVerify}
                    isLoading={loading}
                    formData={SendData}
                    setIsLoading={setLoading}
                    verify={true}
                    setEmailVerified={setEmailVerified}
                />,
                document.getElementById('portal')
            )}

            {emailVerified && createPortal(
                <ModalPopup
                    setIsOpen={setIsOpen}
                    isVerify={true}
                    verify={false}
                    setIsVerify={setIsVerify}
                    isLoading={loading}
                    setIsLoading={setLoading}
                    emailVerified={emailVerified}
                    formData={SendData}
                    setEmailVerified={setEmailVerified}
                />,
                document.getElementById('portal')
            )}
        </>
    );
};

export default Form;
