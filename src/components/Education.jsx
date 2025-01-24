import React from "react";
import { motion } from "framer-motion";

function Education() {
  return (
    <section className="bg-black p-6 rounded-lg shadow-md mt-6" id="education">
      <motion.h2 
        className="text-3xl font-bold text-center mb-4 text-green-500"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Education Journey
      </motion.h2>
      <div className="timeline">
        {[
          {
            degree: "B. Tech (AI & DS)",
            institution: "Sri Eshwar College of Engineering",
            details: "CGPA: 7.9 (2023–2027)",
          },
          {
            degree: "HSC",
            institution: "Sri Vijay Vidhyalaya Matric Higher Secondary School",
            details: "80.08% (2021–2023)",
          },
          {
            degree: "SSLC",
            institution: "Sri Vijay Vidhyalaya Matric Higher Secondary School",
            details: "82.06% (2020–2021)",
          },
        ].map((item, index) => (
          <motion.div 
            className="timeline-item mb-4 p-4 border-l-4 border-red-500 bg-gray-800 rounded-md text-white"
            key={index}
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <h3 className="font-bold text-lg text-green-400">{item.degree}</h3>
            <p className="text-green-300">{item.institution}</p>
            <p className="text-red-300">{item.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
