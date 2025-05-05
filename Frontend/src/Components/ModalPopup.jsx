import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Input from './Input';
import { handleVerify } from '../contexts/HandleVerify';

const ModalPopup = ({
  setIsOpen,
  verify,
  isVerify,
  setIsVerify,
  formData,
  isLoading,
  setEmailVerified,
}) => {
  const [otp, setOtp] = useState('');
  const [isError, setIsError] = useState('');
  const [resendMessage, setResendMessage] = useState('');

  const resendOtp = async () => {
    setIsError('');
    setResendMessage('');
    try {
      const response = await fetch("http://localhost:5000/send-OTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setIsError(data.message || "Error resending OTP");
      } else {
        setResendMessage("OTP resent successfully.");
      }
    } catch (err) {
      setIsError("Something went wrong while resending OTP.");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsVerify(false);
    setEmailVerified(false);
    setOtp('');
    setIsError('');
    setResendMessage('');
  };

  return (
    <div className='top-0 left-0 z-50 fixed flex justify-center items-center bg-black/70 w-full h-full'>
      <div className='flex flex-col bg-zinc-200 shadow-lg p-6 rounded-lg w-11/12 md:w-1/3'>
        {isVerify && (
          <FaCheckCircle size={40} className='mx-auto text-teal-600' />
        )}

        <h2 className='mb-4 font-bold text-teal-600 text-xl text-center'>
          {isVerify ? 'Email Verified' : verify ? 'Message Sent' : 'Verification Failed'}
        </h2>

        {!isVerify ? (
          <>
            <Input
              TypeName="input"
              Name="otp"
              id="otp"
              PlaceName="Enter OTP"
              handleChange={(e) => {
                setOtp(e.target.value.replace(/[^\d]/g, ''));
                setResendMessage('');
                setIsError('');
              }}
              value={otp}
              Error={!!isError}
              style={{
                width: '70%',
                height: '40px',
                margin: '0 auto 10px',
                padding: '0 10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '16px',
              }}
            />

            <p className='mb-2 text-gray-700 text-md text-center'>
              An OTP has been sent to your email.{' '}
              <button
                onClick={resendOtp}
                disabled={isLoading}
                className='text-cyan-600 underline cursor-pointer'>
                Resend OTP
              </button>
            </p>

            {resendMessage && (
              <p className='text-green-600 text-sm text-center'>{resendMessage}</p>
            )}

            {isError && (
              <p className='text-red-600 text-sm text-center'>{isError}</p>
            )}

            <button
              onClick={(e) =>
                handleVerify(e, { otp, formData, setIsError, setIsVerify, setEmailVerified })
              }
              disabled={isLoading}
              className='bg-cyan-500 hover:bg-cyan-700 disabled:opacity-60 mt-4 px-4 py-2 rounded w-full text-white transition duration-200 cursor-pointer'
            >
              {isLoading ? 'Verifying...' : 'Verify'}
            </button>
          </>
        ) : (
          <>
            <p className='text-gray-700 text-md text-center'>
              Thank you for verifying your email! <br />
              Your message has been sent successfully.
            </p>
            <button
              onClick={handleClose}
              className='bg-cyan-500 hover:bg-cyan-700 mt-4 px-4 py-2 rounded w-full text-white transition duration-200 cursor-pointer'
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalPopup;
