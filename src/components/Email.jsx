import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion';
import axios from 'axios'
import {toast} from 'react-toastify'

const Email = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    messageBody: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // NOTE: The URL must match your Express server's address and route.
      const response = await axios.post('http://localhost:5000/api/contact', formData);

      setStatus('Success! ' + response.data.message);
      // Clear the form fields on success
      setFormData({ customerName: '', customerEmail: '', messageBody: '' });
      toast.success(response.data.message)

    } catch (error) {
      // Log the error for debugging
      console.error('Submission failed:', error.response ? error.response.data : error.message);
      toast.error(error.response.data.message)
      // Display a user-friendly error message
      setStatus('Error! Failed to send message. Please try again later.');
    }
  };
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='px-7.5 pb-17.5 flex flex-col gap-2.5 md:px-25 md:py-25 md:pb-17.5'>
        <div className='pt-17.5 border-t-2 border-[#000000]/20'>
          <div className='flex flex-col gap-20 md:flex-row md:gap-47.5'>
            <div className='flex flex-col items-start gap-15'>
              <div className='flex flex-col gap-10'>
                <h2 className='font-semibold text-[32px] text-start'>Let’s work <br /> together</h2>
                <p>I am actively seeking new Full-Stack (MERN) development opportunities and challenging projects. Use the form to reach out, and I will respond within 24 hours. </p>
              </div>
              <div className='flex w-58 items-center justify-between'>
                <img src="/discord.svg" alt="" />
                <img src="/facebook.svg" alt="" />
                <img src="/dribbble copy.svg" alt="" />
                <img src="/nstagram.svg" alt="" />
                <img src="/behance copy.svg" alt="" />
              </div>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-10'>
              <div className='flex flex-col gap-5'>
                <input onChange={handleChange} value={formData.customerName} name='customerName' type="text" placeholder='Name' className='w-full py-[21px] px-7.5 bg-[#F3F3F3] placeholder:text-[#2D2D2D] items-start md:w-[530px]' />
                <input onChange={handleChange} value={formData.customerEmail} name='customerEmail' type="text" placeholder='Email' className='w-full py-[21px] px-7.5 bg-[#F3F3F3] placeholder:text-[#2D2D2D] items-start md:w-[530px]' />
                <textarea onChange={handleChange} value={formData.messageBody} name="messageBody" id="" placeholder='Type your message here' className='w-full py-[21px] px-7.5 bg-[#F3F3F3] placeholder:text-[#2D2D2D] h-58 items-start md:w-[530px] '></textarea>
              </div>
              <button className='px-20.5 py-6.25 bg-[#2D2D2D] text-[#FFFFFF] gap-2.5 w-58' type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Email
