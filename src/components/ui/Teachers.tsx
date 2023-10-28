import Image from "next/image";
import React from "react";

const Teachers = () => {
  return (
    <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 my-16">
      <div className="flex flex-col pt-11 px-2 ">
        <div className=" h-40 mb-2">
          <div className="rounded-full">
            <img
              src={
                "https://i.ibb.co/K0cwSnC/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.png"
              }
              width={200}
              className="rounded-full"
            ></img>
          </div>
        </div>
        <div className="bg-black h-40"></div>
      </div>
      <div className="flex flex-col px-2 ">
        <div className="bg-red-400 h-40 mb-2"></div>
        <div className="bg-black h-40"></div>
      </div>
      <div className="flex flex-col px-2 pt-16 ">
        <div className="bg-red-400 h-40 mb-2"></div>
        <div className="bg-black h-40"></div>
      </div>
      <div className="flex flex-col pt-24 px-2 ">
        <div className="bg-red-400 h-40 mb-2"></div>
        <div className="bg-black h-40"></div>
      </div>
    </div>
  );
};

export default Teachers;
