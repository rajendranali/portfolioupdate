import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black sticky top-0 z-50">
      <div className="container mx-auto flex justify-around items-center py-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-bold"
        >
          Rajendra Nali
        </motion.h1>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="hover:text-gray-400">About</Link>
          <Link to="/education" className="hover:text-gray-400">Education</Link>
          <Link to="/experience" className="hover:text-gray-400">Experience</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <motion.a
            href="https://github.com/rajendranali"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-gray-400"
          >
            <FaGithub className="text-xl" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rajendra-nali-760762170/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-gray-400"
          >
            <FaLinkedin className="text-xl" />
          </motion.a>
          <motion.a
            href="mailto:rajendranali.dakshana17@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-gray-400"
          >
            <MdEmail className="text-xl" />
          </motion.a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-gray-700 focus:outline-none">
            {isOpen ? <MdClose className="text-xl" /> : <MdMenu className="text-xl" />}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} absolute top-0 left-0 w-full bg-white z-10`}>
        <ul className="flex flex-col space-y-4 py-4">
          <li>
            <Link to="/" className="block px-4 py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/education" className="block px-4 py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/experience" className="block px-4 py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className="block px-4 py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <motion.a
              href="https://github.com/rajendranali"
              className="block px-4 py-2 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </motion.a>
          </li>
          <li>
            <motion.a
              href="https://www.linkedin.com/in/rajendra-nali-760762170/"
              className="block px-4 py-2 hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
            >
              LinkedIn
            </motion.a>
          </li>
          <li>
            <motion.a
              href="mailto:rajendranali.dakshana17@gmail.com"
              className="block px-4 py-2 hover:text-gray-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
            >
              Email
            </motion.a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
