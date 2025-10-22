import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ArrowLeft } from "lucide-react"; // icons from lucide-react

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the sidebar
  const sidebarVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <div className="relative h-screen w-full bg-gray-100 flex items-center justify-center">
      {/* Menu icon (visible when sidebar is closed) */}
      {!isOpen && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed top-5 right-5 p-3 bg-white rounded-full shadow-md"
        >
          <Menu size={28} />
        </motion.button>
      )}

      {/* AnimatePresence to handle mount/unmount animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-50 flex flex-col"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 0.4 }}
          >
            {/* Header with back icon */}
            <div className="flex items-center justify-between p-5 border-b">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <ArrowLeft size={24} />
              </motion.button>
              <h2 className="text-lg font-semibold">Menu</h2>
            </div>

            {/* Sidebar content */}
            <div className="flex flex-col p-5 gap-4 text-gray-700">
              <a href="#" className="hover:text-blue-500 transition">Home</a>
              <a href="#" className="hover:text-blue-500 transition">About</a>
              <a href="#" className="hover:text-blue-500 transition">Services</a>
              <a href="#" className="hover:text-blue-500 transition">Contact</a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarMenu;
