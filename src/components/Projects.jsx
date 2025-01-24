import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Projects() {
  useEffect(() => {
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <section className="bg-black p-8 rounded-lg shadow-lg mt-6" id="projects">
      <motion.h2 
        className="text-3xl font-semibold text-center mb-6 text-green-500"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div 
          className="project-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-red-300">Face Detection & Capture</h3>
          <p className="mt-2 text-green-400">Advanced surveillance system with face detection and motion recognition</p>
          <p className="mt-1 text-sm text-gray-400">Tech Stack: Python, OpenCV, GitHub</p>
        </motion.div>
        <motion.div 
          className="project-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-red-300">Virtual Voice Assistant</h3>
          <p className="mt-2 text-green-400">Voice-controlled assistant using Python</p>
          <p className="mt-1 text-sm text-gray-400">Tech Stack: Python, speech recognition, text-to-speech</p>
        </motion.div>
        <motion.div 
          className="project-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-red-300">Data Analysis</h3>
          <p className="mt-2 text-green-400">Statistical analysis and visualization of Wild Blueberry Yield</p>
          <p className="mt-1 text-sm text-gray-400">Tech Stack: Python, pandas, data visualization</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
