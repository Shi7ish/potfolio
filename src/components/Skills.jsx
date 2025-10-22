import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center px-16 py-36 bg-white"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-center text-center gap-10">
        {/* -------- Frontend -------- */}
        <div className="flex flex-col items-center gap-6 max-w-sm">
          <img src="/Image placeholder.svg" alt="Frontend" />
          <h3 className="font-semibold text-[27px]">Frontend Development</h3>
          <p className="text-gray-700 leading-relaxed">
            This area covers the creation of dynamic, fast, and responsive user
            interfaces. I use React.js to build modular components, manage
            complex application state with tools like Redux, and ensure a
            seamless, modern user experience (UX).
          </p>
        </div>

        {/* -------- Backend -------- */}
        <div className="flex flex-col items-center gap-6 max-w-sm">
          <img src="/Image placeholder1.svg" alt="Backend" />
          <h3 className="font-semibold text-[27px]">
            Backend & API Development
          </h3>
          <p className="text-gray-700 leading-relaxed">
            My focus here is on building scalable, high-performance server-side
            logic using Node.js and Express.js. I design and implement robust
            RESTful APIs that efficiently handle authentication, data
            processing, and communication between the frontend and the database.
          </p>
        </div>

        {/* -------- Database & Deployment -------- */}
        <div className="flex flex-col items-center gap-6 max-w-sm">
          <img src="/Image placeholder2.svg" alt="Database" />
          <h3 className="font-semibold text-[27px]">
            Database & Deployment
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I manage flexible, non-relational data with MongoDB, including
            efficient schema design and querying. I ensure code integrity using
            Git and have experience deploying and hosting full-stack
            applications on cloud platforms like AWS and Vercel to deliver them
            to a live audience.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
