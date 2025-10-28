import { motion } from 'framer-motion'
import React from 'react'

const ContactMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='px-7.5 py-10 flex flex-col gap-5 md:gap-10 md:px-25'>
      <h3 className='text-center font-semibold text-3xl'>Contact Me</h3>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='md:flex md:flex-row md:px-25 md:justify-center md:gap-20 flex flex-col gap-5'>
        <div className='px-5 py-3'>
          <img className='md:w-100 md:h-110' src="/Contact.svg" alt="" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='md:flex md:flex-col md:gap-20 flex flex-col gap-5 md:pt-10'>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold'>Contact Details :</h2>
            <div>
              <p>Mail : shirish07thore@gmail.com</p>
              <p>Mobile : 9322841919</p>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold'>My CV/Resume :</h2>
            <div className='flex flex-col gap-2'>
              <p>Click below to download my CV/Resume</p>
              <a href="Updated Resume.pdf" download="Updated Resume.pdf">
                <button className='cursor-pointer px-6 w-fit py-2 hover:bg-black hover:text-white text-cente transition-all ease-in-out border-2 border-black'>Click Me</button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ContactMe
