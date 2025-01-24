import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Hero() {
  useEffect(() => {
    
  }, []);

  return (
    <motion.section 
      className="hero bg-gradient-to-r from-black to-green-600 text-red-200 p-10 rounded-lg shadow-lg flex flex-col items-center justify-center h-screen"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-5xl font-bold mb-4 text-green-400"
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        MITHUN M
      </motion.h1>
      <motion.p 
        className="text-xl mb-6 text-red-300"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        AI & DS ENGINEER
      </motion.p>
      <div className="contact-links flex space-x-4">
        <motion.a 
          className="text-lg text-green-300 hover:underline" 
          href="tel:+919361123237"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1 }}
        >
          +91 93611 23237
        </motion.a>
        <motion.a 
          className="text-lg text-green-300 hover:underline" 
          href="mailto:mithun.m2023ai-ds@sece.ac.in"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1.2 }}
        >
          Email
        </motion.a>
        <motion.a 
          className="text-lg text-green-300 hover:underline" 
          href="https://github.com/yourusername" 
          target="_blank"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1.4 }}
        >
          GitHub
        </motion.a>
        <motion.a 
          className="text-lg text-green-300 hover:underline" 
          href="https://linkedin.com/in/yourusername" 
          target="_blank"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1.6 }}
        >
          LinkedIn
        </motion.a>
      </div>
    </motion.section>
  );
}

export default Hero;
