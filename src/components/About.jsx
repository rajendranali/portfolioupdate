import React from "react";
import { motion } from "framer-motion";
import ImagesProfile from "./ImagesProfile";
import Education from "./Education";
import Experience from "../Experience/Experience";
import { Link } from "react-router-dom";
import Skill from "../Experience/Skill";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const About = () => {
  const resumeLink = "https://drive.google.com/file/d/1oHVBX5DUg8-qCc_wm955Mq0_V_rOBnTI/view?usp=drive_link";

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 py-12"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="lg:w-1/2 lg:mr-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center lg:text-left">
            Hi there!{" "}
            <span className="block text-blue-600 ">
              I'm Rajendra
            </span>
            <span className="block text-transparent bg-gradient-to-r from-red-500  to-blue-700 bg-clip-text">Software Developer</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-700 mb-4 italic tracking-wide">
            Passionate software developer with a love for creating innovative
            solutions. Crafting elegant code and designing intuitive user
            interfaces are my specialties.
          </p>

          <Link 
            to={resumeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105 mb-4"
          >
            View Resume
          </Link>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <ImagesProfile />
        </div>
      </div>
      <Skill/>
      <div className="max-w-4xl mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-8">
        <div className="lg:w-1/2 lg:mr-12">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-gray-600 text-lg" />
            <p className="text-gray-600">Mobile: <span className="font-semibold">9074448165</span></p>
          </div>

          <div className="flex items-center space-x-4 mt-2">
            <FaEnvelope className="text-gray-600 text-lg" />
            <p className="text-gray-600">Email: <span className="font-semibold">rajendranali.dakshana17@gmail.com</span></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
