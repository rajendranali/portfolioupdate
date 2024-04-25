import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="text-black">
      <div className="container mx-auto flex justify-around items-center py-4">
        <div className="flex items-center">
          <h1 className="text-lg font-bold">Rajendra Nali</h1>
          <ul className="hidden md:flex space-x-4 ml-8">
            <li>
              <Link to="/" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/education" className="hover:text-gray-400">
               Educations
              </Link>
            </li>
            <li>
              <Link to="/experience" className="hover:text-gray-400">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-400">
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/rajendranali"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub className="text-gray-700" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rajendra-nali-760762170/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin className="text-gray-700" />
              </a>
            </li>
            <li>
              <a
                href="mailto:rajendranali.dakshana17@gmail.com"
                className="hover:text-gray-400"
              >
                <MdEmail className="text-gray-700" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
