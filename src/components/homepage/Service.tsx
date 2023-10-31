"use client";
import { useGetServicesQuery } from "@/redux/api/service/serviceSlice";
import React from "react";
import Card from "../ui/Card";
import { motion } from "framer-motion";

const Service = () => {
  let delay = 0;
  const { data, isLoading, isError }: any = useGetServicesQuery(undefined);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {" "}
      <div className="flex items-center justify-center flex-col my-5">
        <motion.div
          initial={{ y: -50 }}
          whileInView={{ y: 0, transition: { duration: 1 } }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-center justify-center py-4 px-6 border-[3px] border-black rounded-full inline-block">
            Featured Courses
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            transition: { duration: 1.5 },
            opacity: 1,
          }}
        >
          <p className="text-center w-full md:w-[50%] mx-auto p-4 text-6xl">
            Services I Can Provide For My Clients
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
        >
          <p className="text-center text-sm ">
            I can help you in this particular areas.
          </p>
        </motion.div>
      </div>
      <div className="mb-5 overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-7 py-14 max-w-7xl mx-auto  w-[98%] md:w-full  ">
        {data?.data?.data.map((service: any) => {
          delay += 0.2;
          return (
            <motion.div
              key={Number(service._id) + 1}
              initial={{ opacity: 0, y: 200 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: delay },
              }}
            >
              <Card key={service._id} data={service}></Card>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Service;
