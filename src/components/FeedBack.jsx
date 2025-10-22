import React,{useRef} from 'react'
import { CustomerFeedback } from '../assets/assets'
import { motion, useInView } from 'framer-motion';


const FeedBack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref}>
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='px-7.5 pt-15 pb-22.5 gap-2.5 md:px-25 md:pt-25 md:pb-37.5'>
        <div className='flex flex-col text-center items-center gap-10 '>
          <p className='font-semibold text-3xl'>Clients</p>
          <div className='flex flex-col gap-10 md:grid md:grid-cols-3 justify-around text-start '>
            {
              CustomerFeedback.map((item, index) => (
                <div className='py-7.5 pl-7.5 pr-12.5 bg-[#FFFCF5] border-2 max-w-[315px] border-[#FFD285] ' key={index}>
                  <div className='flex flex-col items-start gap-20'>
                    <p className='font-semibold'>{item.msg}</p>
                    <div className='flex flex-row gap-5'>
                      <img src={item.img} alt="" />
                      <div className='flex flex-col gap-2.5'>
                        <div className='flex flex-row'>
                          {
                            item.rating.map((star, index) => (
                              <div key={index}>
                                <img src={star} alt="" />
                              </div>
                            ))
                          }
                        </div>
                        <div className='text-start'>
                          <p>{item.info}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FeedBack
