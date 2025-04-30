import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ImageSection from '../Components/ImageSection'
import DownloadResume from '../Components/DownloadResume'

const Home = () => {
    const [Animate, setAnimate] = useState(false)
    const ResumeUrl = './Resume.pdf';

    const onHandler = () => {
        const link = document.createElement('a');
        link.href = ResumeUrl;
        link.download = 'Resume.pdf';
        link.click();
        document.body.removeChild(link);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setAnimate(true)
            } else {
                setAnimate(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }} className='flex flex-col justify-center items-center gap-10 m-auto p-10 w-full max-w-[1550px] min-h-screen'>

            <ImageSection Animate={Animate} />
           <DownloadResume ResumeUrl={ResumeUrl} onHandler={onHandler} />

        </motion.div>
    )
}

export default Home