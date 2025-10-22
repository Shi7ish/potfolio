import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

const AboutBody = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <div ref={ref} className='px-7.5 py-30 md:px-80 md:py-30 md:flex md:flex-col md:items-center'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex flex-col gap-15 md:w-[880px]'>
                <div className='font-medium text-2xl leading-9'>
                    <h2>My core philosophy is simple: Code should be clean, and applications should be useful. I prioritize efficient architecture and a smooth user experience in every line of MERN stack development.</h2>
                </div>
                <div className='flex flex-col'>
                    <p className='w-full py-1.25 bg-[#009379] text-[#F6DCE9] font-semibold text-[16px] leading-6.5'>I build solutions, not just applications. My MERN code is clean, efficient, and scalable.</p>

                    <p className='w-full py-1.25 font-normal text-[16px] leading-6.5'>I am currently available for full-time roles and dedicated contract positions. I specialize in building MERN Stack applications (e-commerce, news aggregators, custom APIs) and am eager to join a team that values innovation and technical excellence. Let's discuss your long-term goals.</p>

                    <p className='w-full py-1.25 bg-[#009379] text-[#F6DCE9] font-semibold text-[16px] leading-6.5'>Complex requirements don't scare me. I turn challenging ideas into elegant, production-ready software.</p>

                    <p className='w-full py-1.25 font-normal text-[16px] leading-6.5'>Available for freelance and contract projects with flexible scheduling. My services include full-stack development, custom API design, database modeling, and front-end modernization using React. If your project involves MERN, let's talk about turning your concept into a production-ready application.</p>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutBody
