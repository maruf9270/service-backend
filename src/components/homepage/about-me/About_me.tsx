"use client";
import Image from "next/image";
import React from "react";
import { animate, motion } from "framer-motion";
import HeroMan from "../../../assets/hero-about.png";

const About_me = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -200 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="grid grid-cols-6 md:grid-cols-12">
      <div className="col-span-6 mb-12 md:mb-5">
        <motion.div variants={container} initial="hidden" whileInView="show">
          <motion.div variants={item}>
            <div>— About Me</div>
          </motion.div>
          <motion.div variants={item}>
            <div
              style={{
                fontSize: "5rem",
                fontFamily: "cursive",
              }}
            >
              Hello Nice To meet you
            </div>
          </motion.div>
          <motion.div variants={item}>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur optio deleniti non accusantium molestias
                consequatur iste blanditiis ad natus itaque!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                molestiae debitis distinctio, consequuntur culpa dolorem animi
                ea ducimus alias tenetur, fugiat ex suscipit corporis amet,
                aperiam rem a ipsum pariatur?
              </p>
              <p
                style={{
                  fontFamily: "'Lovers Quarrel', cursive",
                }}
              >
                Maruf Ahmed
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="col-span-5 md:justify-self-end justify-self-center mt-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { staggerChildren: 1 } }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              transition: { duration: 1 },
              scale: 1,
            }}
          >
            <Image
              src={HeroMan}
              className="w-full"
              height={400}
              width={400}
              style={{
                borderRadius: "50% 0% 50% 50%",
                boxShadow: "49px -41px 0px 0px #ECECEC",
                backgroundColor: "#e3e3e3",
                zIndex: 2,
              }}
              alt="Heroman ime"
            ></Image>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            <div
              style={{
                margin: "-90px 0px 0px 120px",
                padding: "27px 27px 27px 27px",
                backgroundColor: "#121313",
                borderRadius: "82px 82px 82px 0px",
                boxShadow: "-14px 14px 0px 0px #323232",
                zIndex: 10,
                display: "inline-block",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontFamily: "monospace",
                  fontSize: "30px",
                  textAlign: "center",
                }}
              >
                16 <br />
              </span>
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "1rem",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Years of <br />
                Exprience
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About_me;
