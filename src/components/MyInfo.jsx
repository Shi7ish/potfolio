import React from 'react'
import { motion } from 'framer-motion';

const MyInfo = () => {
  return (
    <motion.div 
    initial={{ y: 80,opacity: 0 }}  
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className='px-7.5 py-30 bg-[#F9E6F0] md:px-80 md:py-30 md:flex md:flex-col md:items-center'>
      <div className='flex flex-col items-start gap-19.5 md:flex-row md:items-center md:w-[780px]'>
        <div className='w-[195px] flex flex-col gap-5 md:w-full'>
            <img className='h-[195px] w-[195px] border-4 border-black' src="/ProfilePic.svg" alt="" />
            <div className='w-[195px] flex flex-col leading-6.75'>
                <p className='font-bold text-[17px]'>Shirish Thore</p>
                <p className='text-[17px]'>Full-Stack Developer (MERN Stack)</p>
            </div>
        </div>
        <div className='flex flex-col leading-6.75'>
            <p className='font-bold text-[17px]'>Bio:</p>
            <p>I'm a Full-Stack Developer specializing in the MERN Stack (MongoDB, Express, React, Node.js). I excel at building, deploying, and maintaining dynamic, scalable web applications from secure e-commerce platforms to real-time chat messengers. My focus is on writing clean, efficient code and delivering seamless user experiences. I’m driven by the challenge of turning complex requirements into simple, functional solutions.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default MyInfo
