import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
const Projects = () => {
  const projects = [
    {
      title: "Data Nest",
      date: "",
      associate:
        "Associated with Sutradhar Project Consultancy Pvt. Ltd.",
      skills: [
        "React.js",
        "JavaScript",
        "Routers",
        "CSS",
        "contextApi",
        "Responsive Web Design",
      ],
      liveLink: "https://datanest.sutradhar.tech/",
      githubLink: null,
      description:"Generating Basic report, ADF Reports Custom reports for Bank Transaction."
    },
    {
      title: "Project Managements",
      date: "",
      associate:
        "Associated with Sutradhar Project Consultancy Pvt. Ltd.",
      skills: [
        "React.js",
        "Routers",
        "HTML5",
        "JavaScript",
        "CSS",
        "contextApi",
        "Responsive Web Design",
      ],
      liveLink: "https://admin.sutradhar.tech/",
      githubLink: null,
      description:" Project Managements tool for managing multitenant parameters."
    },
    {
      title: "Bcore",
      date: "",
      associate:
        "Associated with Sutradhar Project Consultancy Pvt. Ltd.",
      skills: [
        "JavaScript",
        "Problem Solving",
        "contextApi",
        "Debugging Code",
        "React.js",
      ],
      liveLink: "https://sutrabcore.sutradhar.tech/newdev/",
      githubLink: null,
      description:"Streamlined supply chain operations via a React.js application, enhancing efficiency."
    },
    // {
    //   title: 'Sutra Bcore',
    //   date: 'Aug 2022 - Present',
    //   associate: 'Streamlined supply chain operations via a React.js application, enhancing efficiency.',
    //   skills: ['React.js', 'JavaScript', 'Problem Solving', 'contextApi', 'Debugging Code'],
    //   liveLink: 'https://example.com/live',
    //   githubLink: 'https://github.com/example/project'
    // },
    {
      title: "WMS (Warehouse Management System)",
      date: "Aug 2022 - Present",
      associate: "Associated with Sutradhar Project Consultancy Pvt. Ltd.",
      skills: [
        "JavaScript",
        "Problem Solving",
        "contextApi",
        "CSS",
        "HTML5",
        "React.js",
      ],
      liveLink: "https://sutrabcore.sutradhar.tech/newdev/",
      githubLink: null,
      description:"Warehouse Management System for store keeping effiently"
    },
    {
      title: "Timecamp.com",
      date: "",
      associate:
        "Associated with Masai School.",
      skills: ["Front-End Development", "Redux", "Redux Thunk"],
      liveLink: "https://sensitive-thunder-3176.vercel.app/",
      githubLink:
        "https://github.com/rajendranali/sensitive-thunder-3176/tree/master/sensitive-thunder-3176",
        description:"TimeCamp is a web-based application launched in 2009 by Kamil Rudnicki, a programmer and founder of Time Solutions, to track the activity of computer users and it is dedicated either to freelancers or teams."
    },
    {
      title: "Freshly.com",
      date: "",
      associate:
        "Associated with Masai School.",
      skills: ["Front-End Development", "Redux", "React.js"],
      description:"",
      liveLink: "https://freshly-dusky.vercel.app/",
      githubLink:
        "https://github.com/rajendranali/fleet-cap-5913/tree/main/freshly",
        description:" Freshly is New-York base prepared meals providing company just like Zomato and Swiggy. Customers can order the Food as per their requirements and specify diets plan."
    },
    // {
    //   title: 'UBORIC',
    //   date: 'Apr 2022 - May 2022',
    //   associate: 'Associated with Masai School. UBORIC CLONE An E-Commerce website where users can purchase all varieties of products and users can become a seller.',
    //   skills: ['React.js', 'CSS',"Redux","React.js"],
    //   liveLink: 'https://example.com/live',
    //   githubLink: 'https://github.com/example/project'
    // },
    {
      title: "NYKAA CLONE",
      date: "",
      associate:
        "Associated with Masai School.",
      skills: ["HTML", "CSS", "Javascript"],
      liveLink: "https://super-pudding-5e48ab.netlify.app/index.html",
      githubLink: "https://github.com/rajendranali/Nykaa-clone",
      description:" Nykaa is an E-commerce website about Women's Fashion and Style."
    },
    // {
    //   title: 'STYLECRAZE CLONE',
    //   date: 'Mar 2022 - Mar 2022',
    //   description: 'Associated with Masai School. STYLECRAZE CLONE An informative website about women\'s Style and fashion.',
    //   skills: ['HTML', 'CSS', 'Javascript'],
    //   liveLink: 'https://example.com/live',
    //   githubLink: 'https://github.com/example/project'
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 lg:px-0 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-br from-purple-400 to-indigo-600 text-transparent bg-clip-text">
        Projects
      </h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </motion.div>
  );
};

export default Projects;
