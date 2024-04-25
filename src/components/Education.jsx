import React from 'react';
import { motion } from 'framer-motion';
import nitc from "./nitc.jpg";
import masai from "./masai.jpg";
import dks from "./dks.jpg";
import jnv from "./jnv.jpg";

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="space-y-8">
        <motion.div 
          className="flex items-center border border-gray-200 rounded-md p-4 hover:shadow-md transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={nitc} alt="NIT Calicut Logo" className="w-20 h-20 mr-4" />
          <div>
            <h2 className="text-lg font-bold">National Institute of Technology Calicut</h2>
            <p className="text-xs text-gray-600">Bachelor of Technology - BTech, Mechanical Engineering</p>
            <p className="text-xs text-gray-600">Jun 2017 - May 2021</p>
            <p className="text-xs italic text-gray-600">Grade: First class</p>
            <p className="text-xs italic text-gray-600">Skills: Mechanical Engineering · <span className="italic">AutoCAD Mechanical</span></p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center border border-gray-200 rounded-md p-4 hover:shadow-md transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={masai} alt="Masai Logo" className="w-20 h-20 mr-4" />
          <div>
            <h2 className="text-lg font-bold">Masai</h2>
            <p className="text-xs text-gray-600">Full-Stack Web Developer, React developer, Javascript developer</p>
            <p className="text-xs text-gray-600">Feb 2022 - Jul 2022</p>
            <p className="text-xs italic text-gray-600">Skills: Algorithms · Babel.js · Redux · MongoDB · Cascading Style Sheets (CSS) · Routers · Chakra ui · Express.js · ECMAScript · React.js · Responsive Web Design · JavaScript eXtension (JSX) · Front-End Development · Material-UI · HTML5 · <span className="italic">Redux Thunk</span></p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center border border-gray-200 rounded-md p-4 hover:shadow-md transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={dks} alt="Dakshana Foundation Logo" className="w-20 h-20 mr-4" />
          <div>
            <h2 className="text-lg font-bold">Dakshana Foundation</h2>
            <p className="text-xs text-gray-600">Higher Secondary, CBSE</p>
            <p className="text-xs text-gray-600">2015 - 2017</p>
            <p className="text-xs italic text-gray-600">Grade: 89%</p>
            <p className="text-xs italic text-gray-600">Activities and societies: Athletes Team, Painting Club, Cricket Team</p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center border border-gray-200 rounded-md p-4 hover:shadow-md transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={jnv} alt="JNV Logo" className="w-20 h-20 mr-4" />
          <div>
            <h2 className="text-lg font-bold">Jawahar Navodaya Vidyalaya (JNV)</h2>
            <p className="text-xs text-gray-600">High School</p>
            <p className="text-xs italic text-gray-600">Grade: CGPA 9.8</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
