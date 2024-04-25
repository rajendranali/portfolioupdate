import React from 'react';
import sutradhar from './sutradhar.jpg';
import masai from './masai.jpg';

const Experience = () => {
  return (
    <div className="">
      <div className="max-w-4xl mx-auto py-8">
        <div className="space-y-12">
          {/* Experience 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <img src={sutradhar} alt="Sutradhar Logo" className="w-20 h-20 mr-4" />
              <div>
                <h2 className="text-xl font-bold">Sutradhar Project Consultancy Pvt. Ltd.</h2>
                <p className="text-gray-600">Full-time · 1 yr 5 mos</p>
                <p className="text-gray-600">Pune, Maharashtra, India · On-site</p>
                <p className="text-gray-600">React.js Developer (Team Lead)</p>
                <p className="text-gray-600">Aug 2023 - Present · 9 mos</p>
                <p className="text-gray-600 italic">React.js, Data Structures and +5 skills</p>
              </div>
            </div>
          </div>
          {/* Experience 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <img src={masai} alt="Masai Logo" className="w-20 h-20 mr-4" />
              <div>
                <h2 className="text-xl font-bold">Masai</h2>
                <p className="text-gray-600">Apprenticeship · 9 mos</p>
                <p className="text-gray-600">Bangalore · Remote</p>
                <p className="text-gray-600">Web Developer</p>
                <p className="text-gray-600">Feb 2022 - Oct 2022 · 9 mos</p>
                <p className="text-gray-600 italic">Proficient MERN stack developer specializing in MongoDB, Express.js, React.js, and Node.js.</p>
              </div>
            </div>
          </div>
          {/* Experience 3 */}
          {/* Add more experiences in a similar format */}
        </div>
      </div>
    </div>
  );
}

export default Experience;
