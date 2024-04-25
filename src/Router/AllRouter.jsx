import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../Experience/Experience";

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<><About/></>} />
        <Route path="/education" element={<><Education/></>} />
        <Route path="/experience" element={<><Experience/></>} />
      </Routes>
    </div>
  );
};

export default AllRouter;
