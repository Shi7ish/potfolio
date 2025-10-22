import React, { useRef } from 'react'
import { project } from './../assets/assets';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <div ref={ref}>
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='px-7.5 py-10 flex flex-col items-center gap-15 justify-center md:px-25 md:py-5'>
                <h3 className='font-semibold text-3xl'>Latest work</h3>
                <div className='flex flex-col gap-15 md:grid md:grid-cols-3 md:gap-25'>
                    {
                        project.map((item, index) => (
                            <div key={index} className='flex flex-col items-center text-center gap-[25px] '>
                                <img src={item.img} alt="" />
                                <div>
                                    <p className='font-semibold text-[20px]'>{item.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default Projects
