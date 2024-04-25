import React from "react";
import profile from "./profile.jpeg"
const ImagesProfile = () => {
    return (
        <div className="w-96 h-96  overflow-hidden border-4 border-white shadow-lg">
          <img
            src={`${profile}`}
            alt="Avatar"
            className="object-cover"
          />
        </div>
      );
};

export default ImagesProfile;
