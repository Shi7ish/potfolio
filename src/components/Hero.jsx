import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='px-7.5 pt-12.5 pb-15 md:h-[624px] md:py-25 md:px-40 relative md:flex md:justify-center'>
      <div className='flex flex-col gap-15 items-center md:flex-row md:gap-7 md:items-center md:h-auto relative w-full md:justify-around'>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='flex flex-col items-center h-63.25 gap-5 md:items-start md:justify-center text-center md:text-left md:h-full md:gap-10 relative'>
          <div className='w-78.75 h-38 flex flex-col justify-center align-center gap-6 md:gap-10 md:h-auto'>
            <p className='font-medium '>MERN Stack Development | Machine Learing</p>
            <p className='text-[48px] md:text-[80px] font-semibold leading-none'>Hey! It's me Shirish </p>
          </div>
          <div>
            <p className='text-[17px]'>My name is Shirish Thore, MERN Stack Developer & ML Enthusiast</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <video
            src='/video.mp4'
            autoPlay
            muted
            loop
            playsInline
            className=' h-[424px] rounded-2xl' />
        </motion.div>

      </div>
    </div>
  )
}

export default Hero
