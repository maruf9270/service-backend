import React from "react";
import bgIMage from "../../assets/BookLibrary.jpg";
import CountUp from "react-countup";
const States = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgIMage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 max-w-7xl mx-auto p-4 md:p-16">
        <div className="p-6 ">
          <span className="font-bold text-7xl">
            <CountUp end={5000} start={1} duration={5} enableScrollSpy />+
          </span>{" "}
          <br />
          <span className="text-right">Students</span>
        </div>
        <div className="p-6 ">
          <span className="font-bold text-7xl">
            <CountUp end={5000} start={1} duration={5} enableScrollSpy />+
          </span>{" "}
          <br />
          <span className="text-right">Students</span>
        </div>
        <div className="p-6 ">
          <span className="font-bold text-7xl">
            <CountUp end={5000} start={1} duration={5} enableScrollSpy />+
          </span>{" "}
          <br />
          <span className="text-right">Students</span>
        </div>
        <div className="p-6 ">
          <span className="font-bold text-7xl">
            <CountUp end={5000} start={1} duration={5} enableScrollSpy />+
          </span>{" "}
          <br />
          <span className="text-right">Students</span>
        </div>
      </div>
    </div>
  );
};

export default States;
