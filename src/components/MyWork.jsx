import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { project } from '../assets/assets';

const MyWork = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    let count = 0
    return (
        <div>
            <div className='px-7.5 py-10 flex flex-col items-center gap-15 justify-center md:px-25 md:py-5'>
                <motion.h3
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='font-semibold text-3xl'>My work</motion.h3>
                <div ref={ref} className='flex flex-col gap-15 md:gap-25'>
                    {
                        project.map((item, index) => {
                            count = count + 1
                            if (count % 2 === 1) {
                                return (
                                    <motion.div key={index}
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className='flex flex-col md:flex-row md:gap-25 items-center text-start gap-[25px] '>
                                        <img onClick={() => window.open(
                                            item.link,
                                            "_blank"
                                        )} src={item.img} alt="" />
                                        <div className='flex flex-col gap-5'>
                                            <p className='font-semibold text-[20px]'>{item.title}</p>
                                            <p >{item.desc}</p>
                                        </div>
                                    </motion.div>
                                )
                            } else {
                                return (
                                    <motion.div key={index}
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className='flex flex-col md:flex-row-reverse md:gap-25 items-center text-start gap-[25px] '>
                                        <img onClick={() => window.open(
                                            item.link,
                                            "_blank"
                                        )} src={item.img} alt="" />
                                        <div className='flex flex-col gap-5'>
                                            <p className='font-semibold text-[20px]'>{item.title}</p>
                                            <p >{item.desc}</p>
                                        </div>
                                    </motion.div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MyWork
