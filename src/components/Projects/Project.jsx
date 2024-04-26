import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Project = ({ title, date, description,associate, skills, liveLink, githubLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-2">
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">{title}</span>
      </h2>
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="text-gray-600 mb-4">{associate}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap mb-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">{skill}</div>
        ))}
      </div>
      <div className="flex space-x-4">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            <FiExternalLink className="mr-2" />
            Live
          </a>
        )}
        {githubLink ? (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
            <FiGithub className="mr-2" />
            GitHub
          </a>
        ) : (
          <button disabled className="flex items-center bg-gray-400 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
            <FiGithub className="mr-2" />
            GitHub
          </button>
        )}
      </div>
    </div>
  );
}

export default Project;
