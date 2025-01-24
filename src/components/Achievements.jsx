import React from "react";
import { motion } from "framer-motion";

function Achievements() {
  return (
    <motion.section 
      className="section bg-gradient-to-r from-black to-green-600 p-10 rounded-lg shadow-lg" 
      id="achievements"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title text-4xl font-bold text-center text-red-200 mb-8">Programming Achievements</h2>
      <div className="achievements-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div 
          className="achievement-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-green-400">LeetCode</h3>
          <p className="text-red-300">Rank #13,14,917</p>
          <p className="text-red-300">Problems Solved: 427</p>
          <p className="text-red-300">Contest Rating: 1,737</p>
        </motion.div>
        {/* Additional achievement cards can be added here */}
      </div>
    </motion.section>
  );
}

export default Achievements;
