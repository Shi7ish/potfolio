import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Logos = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowWidth <= 768;

    const handleGmailClick = () => {
        const email = "shirish07thore@gmail.com";
        const subject = "Portfolio Inquiry";
        const body = "Hi Shirish,\n\nI just visited your portfolio and wanted to connect!";

        // Encode for safe URL usage
        const mailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            email
        )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open Gmail compose in a new tab
        window.open(mailURL, "_blank");
    };

    return (
        <div
            ref={ref}
        >
            {isMobile ?
                (<motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='px-16.5'>
                    <div className='flex flex-col py-15 gap-15 justify-center items-center border-y-2 border-[#000000]/20 md:flex-row '>
                        <div className='flex flex-row justify-center items-center gap-20 h-15'>
                            <img onClick={()=>window.open(
                                "https://www.linkedin.com/in/shirishthore/",
                                "_blank"
                            )} className='h-15' src="/linkedin.svg" alt="" />
                            <img onClick={handleGmailClick} src="/email.svg" alt="" />
                        </div>
                        <div className='flex flex-row justify-center items-center gap-5 h-10'>
                            <img onClick={()=>window.open(
                                "https://dribbble.com/shirish-thore",
                                "_blank"
                            )} src="/Dribbble.svg" alt="" />
                            <img onClick={()=>window.open(
                                "https://github.com/Shi7ish",
                                "_blank"
                            )} className='h-20' src="/github.svg" alt="" />
                        </div>
                        <div className='flex flex-row justify-center h-10'>
                            <img onClick={() => window.open(
                                "https://vercel.com/shirish-thores-projects",
                                "_blank"
                            )} src="/vercel.svg" alt="" />
                        </div>
                    </div>
                </motion.div>)
                :
                (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="px-16.5">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-15 gap-10 border-y-2 border-[#000000]/20">
                            <img onClick={() => window.open(
                                "https://github.com/Shi7ish",
                                "_blank"
                            )} src="/github.svg" alt="github" className="h-20 cursor-pointer" />
                            <img onClick={() => window.open(
                                "https://www.linkedin.com/in/shirishthore/",
                                "_blank"
                            )} src="/linkedin.svg" alt="linkedin" className="h-20 cursor-pointer" />
                            <img onClick={() => window.open(
                                "https://vercel.com/shirish-thores-projects",
                                "_blank"
                            )} src="/vercel.svg" alt="vercel" className="h-10 cursor-pointer" />
                            <img onClick={() => window.open(
                                "https://dribbble.com/shirish-thore",
                                "_blank"
                            )} src="/Dribbble.svg" alt="Dribbble" className="h-10 cursor-pointer" />
                            <img onClick={handleGmailClick} src="/email.svg" alt="mail" className="h-20 cursor-pointer" />
                        </div>
                    </motion.div>
                )
            }

        </div>
    )
}

export default Logos
