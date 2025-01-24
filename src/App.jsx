import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar"; // Importing the Navbar component

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="container mx-auto p-4">
      

      <motion.section 
        className="hero hidden bg-gradient-to-r from-black to-green-600 text-red-200 p-10 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold">MITHUN M</h1>
        <p className="text-xl">AI & DS ENGINEER</p>
        <div className="contact-links mt-4">
          <a className="text-lg text-red-300 hover:underline" href="tel:+919361123237">+91 93611 23237</a>
          <a className="text-lg text-red-300 hover:underline" href="mailto:mithun.m2023ai-ds@sece.ac.in">mithun.m2023ai-ds@sece.ac.in</a>
          <a className="text-lg text-red-300 hover:underline" href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="text-lg text-red-300 hover:underline" href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </motion.section>

      <motion.section 
        className="education hidden bg-black text-green-400 p-6 rounded-lg shadow-md mt-6"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold">Education Journey</h2>
        <div className="timeline mt-4">
          <div className="timeline-item mb-4">
            <h3 className="font-bold">B. Tech (AI & DS)</h3>
            <p>Sri Eshwar College of Engineering</p>
            <p>CGPA: 7.9 (2023–2027)</p>
          </div>
          <div className="timeline-item mb-4">
            <h3 className="font-bold">HSC</h3>
            <p>Sri Vijay Vidhyalaya Matric Higher Secondary School</p>
            <p>80.08% (2021–2023)</p>
          </div>
          <div className="timeline-item mb-4">
            <h3 className="font-bold">SSLC</h3>
            <p>Sri Vijay Vidhyalaya Matric Higher Secondary School</p>
            <p>82.06% (2020–2021)</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="projects hidden bg-black text-green-400 p-6 rounded-lg shadow-md mt-6"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="projects-grid">
          <div className="project-card bg-green-600 p-4 rounded-lg shadow-md">
            <h3 className="text-red-200">Face Detection & Capture</h3>
            <p className="text-red-300">Advanced surveillance system with face detection and motion recognition.</p>
          </div>
          <div className="project-card bg-green-600 p-4 rounded-lg shadow-md">
            <h3 className="text-red-200">Virtual Voice Assistant</h3>
            <p className="text-red-300">Voice-controlled assistant using Python.</p>
          </div>
          <div className="project-card bg-green-600 p-4 rounded-lg shadow-md">
            <h3 className="text-red-200">Data Analysis</h3>
            <p className="text-red-300">Statistical analysis and visualization of Wild Blueberry Yield.</p>
          </div>
        </div>
      </motion.section>

      <motion.section className="achievements hidden bg-black text-green-400 p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-2xl font-semibold">Programming Achievements</h2>
        <div className="achievement-card">
          <h3 className="text-red-200">LeetCode</h3>
          <p className="text-red-300">Rank #13,14,917</p>
          <p className="text-red-300">Problems Solved: 427</p>
          <p className="text-red-300">Contest Rating: 1,737</p>
        </div>
      </motion.section>

      <Navbar /> {/* Adding the Navbar again as a footer */}
    </div>
  );
};

export default App;
