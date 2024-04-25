import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="text-black px-4 md:px-20 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4">
        <div className="flex items-center">
          <h1 className="text-lg font-bold italic tracking-wide">Rajendra Nali</h1>
          <ul className="md:ml-8 flex space-x-4 hidden md:flex">
            <li>
              <Link to="/" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link to="/experience" className="hover:text-gray-400">Experience</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-400">Projects</Link>
            </li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <Link to="/github" className="hover:text-gray-400">
                <FaGithub/>
              </Link>
            </li>
            <li>
              <Link to="/linkedin" className="hover:text-gray-400"><FaLinkedin /></Link>
            </li>
            <li>
              <Link to="/email" className="hover:text-gray-400"><MdEmail /></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
