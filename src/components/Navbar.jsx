import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterWithLoop from './TypewriterWithLoop'; // import your typewriter component

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const messages = ["Portfolio", "Shirish Here !", "Take a look :)"];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  };

  return (
    <div className='relative'>
      <div className='flex justify-between items-center pb-5 pt-0 px-10'>
        {/* Logo / Typewriter */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          onClick={() => navigate('/')}
          className='group relative cursor-pointer'
        >
          <TypewriterWithLoop
            texts={messages}
            typeSpeed={100}
            eraseSpeed={50}
            pause={1500}
          />
        </motion.div>

        {/* Hamburger Menu (mobile) */}
        <div className='md:hidden'>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setSidebarOpen(true)}
            className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition'
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </motion.button>
        </div>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='w-100 flex justify-between text-[17px] cursor-pointer max-md:hidden'
        >
          <li
            onClick={() => navigate('/')}
            className={`${location.pathname === '/' ? 'bg-black text-white' : ''} py-2 px-3 transition-all hover:bg-black hover:text-white rounded-xl`}
          >
            Home
          </li>
          <li
            onClick={() => navigate('/about')}
            className={`${location.pathname === '/about' ? 'bg-black text-white' : ''} py-2 px-3 transition-all hover:bg-black hover:text-white rounded-xl`}
          >
            About
          </li>
          <li
            onClick={() => navigate('/work')}
            className={`${location.pathname === '/work' ? 'bg-black text-white' : ''} py-2 px-3 transition-all hover:bg-black hover:text-white rounded-xl`}
          >
            Work
          </li>
          <li
            onClick={() => navigate('/contact')}
            className={`${location.pathname === '/contact' ? 'bg-black text-white' : ''} py-2 px-3 transition-all hover:bg-black hover:text-white rounded-xl`}
          >
            Contact
          </li>
        </motion.ul>
      </div>

      {/* Sidebar (mobile) */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 bg-black bg-opacity-30 z-40'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.aside
              className='fixed top-0 right-0 w-full h-full bg-white shadow-xl z-50 flex flex-col'
              variants={sidebarVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              transition={{ type: 'tween', duration: 0.4 }}
            >
              {/* Header with back icon */}
              <div className='flex items-center justify-between p-5 border-b'>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSidebarOpen(false)}
                  className='p-2 rounded-full hover:bg-gray-200'
                >
                  <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </motion.button>
                <h2 className='text-lg font-semibold'>Menu</h2>
              </div>

              {/* Sidebar Links */}
              <div className='flex flex-col p-5 gap-4 text-gray-700'>
                <button
                  onClick={() => { navigate('/'); setSidebarOpen(false); }}
                  className='text-left hover:text-blue-500 transition'
                >
                  Home
                </button>
                <button
                  onClick={() => { navigate('/about'); setSidebarOpen(false); }}
                  className='text-left hover:text-blue-500 transition'
                >
                  About
                </button>
                <button
                  onClick={() => { navigate('/work'); setSidebarOpen(false); }}
                  className='text-left hover:text-blue-500 transition'
                >
                  Work
                </button>
                <button
                  onClick={() => { navigate('/contact'); setSidebarOpen(false); }}
                  className='text-left hover:text-blue-500 transition'
                >
                  Contact
                </button>
                
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
