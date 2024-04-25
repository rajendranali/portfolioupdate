import React from 'react';
import { FaCode, FaTools, FaCube, FaListUl, FaDatabase } from 'react-icons/fa';

const Skill = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* MERN Stack */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center flex-col">
          <FaCode className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            MERN Stack
          </h3>
          <ul className="text-sm text-gray-600 leading-normal">
            <li>JavaScript/TypeScript</li>
            <li>HTML/CSS</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
        {/* Other Skills */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center flex-col">
          <FaTools className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Other Skills
          </h3>
          <ul className="text-sm text-gray-600 leading-normal">
            <li>C/C++</li>
            <li>Python</li>
            <li>Data Structures and Algorithms</li>
            <li>Git/GitHub</li>
            <li>GitLab</li>
            <li>Webpack</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
        {/* Frameworks */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center flex-col">
          <FaCube className="text-4xl text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Frameworks
          </h3>
          <ul className="text-sm text-gray-600 leading-normal">
            <li>Material-UI</li>
            <li>FastAPI</li>
            <li>Django</li>
            <li>Antd</li>
            <li>Chakra-UI</li>
            {/* Add more frameworks as needed */}
          </ul>
        </div>
        {/* Libraries */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center flex-col">
          <FaListUl className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Libraries
          </h3>
          <ul className="text-sm text-gray-600 leading-normal">
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>React Router</li>
            <li>pandas</li>
            <li>NumPy</li>
            <li>Matplotlib</li>
            {/* Add more libraries as needed */}
          </ul>
        </div>
        {/* Database */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center flex-col">
          <FaDatabase className="text-4xl text-pink-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Database
          </h3>
          <ul className="text-sm text-gray-600 leading-normal">
            <li>SQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            {/* Add more databases as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skill;

