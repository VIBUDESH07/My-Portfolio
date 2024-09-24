import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6">
      {/* Title Animation */}
      <motion.h1 
        className="text-5xl font-bold mb-8 text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h1>

      <div className="w-full max-w-3xl space-y-6">
        
     
        <motion.div 
          className="bg-gray-200 p-6 rounded-2xl shadow-lg border-l-4 border-black flex items-center gap-4 hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* School Logo */}
          <img src="/path-to-your-school-logo.png" alt="SKV Logo" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-2xl font-semibold text-black">SKV Matric HR Sec School</h2>
            <p className="text-black mt-2">
              <strong>SSLC (10th):</strong> Completed with 84.8%  
            </p>
            <p className="text-black">
              <strong>HSC (12th):</strong> Completed with 90%  
            </p>
          </div>
        </motion.div>

        {/* Kongu Engineering College */}
        <motion.div 
          className="bg-gray-200 p-6 rounded-2xl shadow-lg border-l-4 border-black flex items-center gap-4 hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* College Logo */}
          <img src="/path-to-your-college-logo.png" alt="KEC Logo" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-2xl font-semibold text-black">Kongu Engineering College</h2>
            <p className="text-black mt-2">
              <strong>Degree:</strong> Bachelor of Engineering in Computer Science (BE CSE)
            </p>
            <p className="text-black">
              <strong>CGPA:</strong> 9.31 (Till 4th Semester)
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Education;
