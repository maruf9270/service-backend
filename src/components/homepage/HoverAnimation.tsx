import React from "react";
import b1 from "../../assets/ForSlider.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Rating from "../ui/Stars";

const HoverAnimation = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { staggerChildren: 10 } }}
      ></motion.div>
      <div className="mb-5 overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4 py-14 max-w-7xl mx-auto  w-[98%] md:w-full  ">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 },
          }}
        >
          <div className="h-400 overflow-hidden border-[5px] border-stone-500 rounded-lg">
            <div className="h-[400px] hover:-translate-y-full transition ease-in-out duration-500">
              <div className="h-[400px]  ">fejijie</div>
              <div
                className="h-[400px] "
                style={{
                  backgroundColor: "#54595f",
                  backgroundImage: `url(${b1.src})`,

                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "scroll",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "relative",
                  zIndex: "-2",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                    zIndex: "-1",
                    opacity: 0.5, // Adjust the opacity to make it darker or lighter
                  }}
                />
                <p className="z-10 text-white">withbg</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1 },
          }}
        >
          <div className="h-400 overflow-hidden border-[5px] border-stone-500 rounded-lg">
            <div className="h-[400px] hover:-translate-y-full transition ease-in-out duration-500">
              <div className="h-[400px]  ">fejijie</div>
              <div
                className="h-[400px] "
                style={{
                  backgroundColor: "#54595f",
                  backgroundImage: `url(${b1.src})`,

                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "scroll",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "relative",
                  zIndex: "-2",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                    zIndex: "-1",
                    opacity: 0.5, // Adjust the opacity to make it darker or lighter
                  }}
                />
                <p className="z-10 text-white">withbg</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HoverAnimation;
