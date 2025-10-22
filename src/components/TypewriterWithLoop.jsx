import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterWithLoop = ({ texts, typeSpeed = 100, pause = 1500, eraseSpeed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index % texts.length];
    let interval;

    if (isDeleting) {
      // Deleting characters
      interval = setInterval(() => {
        setDisplayedText((prev) => {
          const updated = currentText.substring(0, prev.length - 1);
          if (updated === "") {
            clearInterval(interval);
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }
          return updated;
        });
      }, eraseSpeed);
    } else {
      // Typing characters
      interval = setInterval(() => {
        setDisplayedText((prev) => {
          const updated = currentText.substring(0, prev.length + 1);
          if (updated === currentText) {
            clearInterval(interval);
            setTimeout(() => setIsDeleting(true), pause);
          }
          return updated;
        });
      }, typeSpeed);
    }

    return () => clearInterval(interval);
  }, [index, isDeleting, texts, typeSpeed, eraseSpeed, pause]);

  return (
    <div className="flex justify-center items-center text-[20px] font-bold cursor-pointer">
      <motion.span>{displayedText}</motion.span>
      <motion.span
        className="ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </div>
  );
};

export default TypewriterWithLoop;
