import Link from "next/link";
import React from "react";
import bg from "../../assets/BookLibrary.jpg";
import { Steps } from "antd";
import { motion } from "framer-motion";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";

const HowToEnroll = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto  my-9">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          >
            <p className="border-[2px] px-6 py-4 md:py-6 rounded-full border-black inline-block text-lg font-bold my-3">
              How to enroll ?
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.2 },
            }}
          >
            <p className="my-9 font-mono text-4xl md:text-6xl ">
              Simple Steps to Enroll
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.2 },
            }}
          >
            <p className="text-stone-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              dolores quam reiciendis maxime fugit non!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 1, y: 200 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
          >
            <div className="border-[5px] border-black rounded-xl md:-mb-20 px-7 py-10 md:py-28 flex items-center flex-col bg-white ">
              <h1 className="text-center text-4xl">Do you Have any account</h1>
              <p className="my-10 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                illo!
              </p>
              <button className="btn btn-primary">SignUp</button>
              <div className="flex ">
                <p>Already Have an account ? </p>
                <Link href={"/"} className="btn btn-ghost btn-sm">
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        <div className=" flex items-center justify-end ">
          <Steps
            style={{ height: "150px" }}
            direction="vertical"
            items={[
              {
                title: "Login",
                status: "finish",
                icon: <UserOutlined />,
              },
              {
                title: "Verification",
                status: "finish",
                icon: <SolutionOutlined />,
              },
              {
                title: "Pay",
                status: "finish",
                icon: <LoadingOutlined />,
              },
              {
                title: "Done",
                status: "finish",
                icon: <SmileOutlined />,
              },
            ]}
          />
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col py-20 min-h-[80vh] "
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          color: "white",
        }}
      >
        <h4 className="text-2xl text-center">GET INSTANT ACCESS TO THE FREE</h4>
        <h2 className="text-4xl my-5">Self Development Course</h2>
        <p className="text-center my-5 w-[50%]">
          Learn about how them you went down prying the wedding ring off his
          cold, dead finger. I don`t know what you did, Fry, but once again, you
          screwed up!
        </p>
        <button className="btn btn-primary">Srart for free </button>
      </div>
    </>
  );
};

export default HowToEnroll;
