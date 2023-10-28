import React from "react";
import "./homepage.css";

const Hero = () => {
  return (
    <div className="relative" style={{ position: "relative" }}>
      <div
        className="custom-shape-divider-bottom-1697273216"
        style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          right: 0,
          zIndex: 0,
        }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill z-10"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
