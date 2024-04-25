import React from 'react';
import nitc from "./nitc.jpg"
import masai from "./masai.jpg"
import dks from "./dks.jpg"
import jnv from "./jnv.jpg"
const Education = () => {
  return (
    <div className="max-w-4xl mx-auto  py-8">
      <div className="bg-white shadow-md rounded-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <img src={`${nitc}`} alt="NIT Calicut Logo" className="w-14 h-14 mr-4" />
          <div>
            <h2 className="text-xl font-bold">National Institute of Technology Calicut</h2>
            <p className="text-gray-600">Bachelor of Technology - BTech, Mechanical Engineering</p>
            <p className="text-gray-600">Jun 2017 - May 2021</p>
            <p className="text-gray-600">Grade: First class</p>
          </div>
        </div>
        <p className="text-gray-700">Skills: Mechanical Engineering · AutoCAD Mechanical</p>
      </div>

      <div className="bg-white shadow-md rounded-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <img src={`${masai}`} alt="Masai Logo" className="w-14 h-14 mr-4" />
          <div>
            <h2 className="text-xl font-bold">Masai</h2>
            <p className="text-gray-600">Full-Stack Web Developer, React developer, Javascript developer</p>
            <p className="text-gray-600">Feb 2022 - Jul 2022</p>
          </div>
        </div>
        <p className="text-gray-700">Skills: Algorithms · Babel.js · Redux · MongoDB · Cascading Style Sheets (CSS) · Routers · Chakra ui · Express.js · ECMAScript · React.js · Responsive Web Design · JavaScript eXtension (JSX) · Front-End Development · Material-UI · HTML5 · Redux Thunk</p>
      </div>

      <div className="bg-white shadow-md rounded-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <img src={`${dks}`} alt="Dakshana Foundation Logo" className="w-14 h-14 mr-4" />
          <div>
            <h2 className="text-xl font-bold">Dakshana Foundation</h2>
            <p className="text-gray-600">Higher Secondary, CBSE</p>
            <p className="text-gray-600">2015 - 2017</p>
            <p className="text-gray-600">Grade: 89%</p>
            <p className="text-gray-600">Activities and societies: Athletes Team, Painting Club, Cricket Team</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <img src={`${jnv}`} alt="JNV Logo" className="w-14 h-14 mr-4" />
          <div>
            <h2 className="text-xl font-bold text-gray-700">Jawahar Navodaya Vidyalaya (JNV)</h2>
            <p className="text-gray-600">High School</p>
            <p className="text-gray-600">Grade: CGPA 9.8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
