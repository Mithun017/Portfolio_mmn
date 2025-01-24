import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#004d40', padding: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <ul style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
        <motion.li 
          style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }}
          data-section="home"
          whileHover={{ scale: 1.1 }}
        >
          Home
        </motion.li>
        <motion.li 
          style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }}
          data-section="education"
          whileHover={{ scale: 1.1 }}
        >
          Education
        </motion.li>
        <motion.li 
          style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }}
          data-section="projects"
          whileHover={{ scale: 1.1 }}
        >
          Projects
        </motion.li>
        <motion.li 
          style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }}
          data-section="achievements"
          whileHover={{ scale: 1.1 }}
        >
          Achievements
        </motion.li>
      </ul>
    </nav>
  );
}

export default Navbar;
