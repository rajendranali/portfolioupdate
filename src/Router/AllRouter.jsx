import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../components/About";
const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<><About/></>} />
      </Routes>
    </div>
  );
};

export default AllRouter;
