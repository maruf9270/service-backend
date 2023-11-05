// import Image from "next/image";
// import React from "react";

// const CourseCard = (props) => {
//   console.log(props);
//   return (
//     <div className="h-400 overflow-hidden border-[1px] border-stone-400 rounded-lg w-[90%]">
//       <div className="h-[400px] hover:-translate-y-full transition ease-in-out duration-500">
//         <div className=" h-full p-5 ">
//           <div className="flex items-center justify-center ">
//             <Image
//               src={b1}
//               height={200}
//               width={0}
//               className="rounded-md"
//               alt="Course Image"
//             ></Image>
//           </div>
//           <div className="my-3 p-3">
//             <h2 className="text-xl font-bold font-serif">
//               THis is a title course
//             </h2>
//             <p className="text-gray-500 font-serif">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
//               itaque, odio error...
//             </p>
//             <div className="mt-2">
//               <Rating rating={4}></Rating>
//             </div>
//             <div className="text-2xl font-bold font-serif">$1400</div>
//           </div>
//         </div>
//         <div
//           className="h-[400px] "
//           style={{
//             backgroundColor: "#54595f",
//             backgroundImage: `url(${b1.src})`,

//             backgroundRepeat: "no-repeat",
//             backgroundAttachment: "scroll",
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//             position: "relative",
//             zIndex: "-2",
//           }}
//         >
//           <div
//             className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "black",
//               zIndex: "-1",
//               opacity: 0.5, // Adjust the opacity to make it darker or lighter
//             }}
//           />
//           <div className="z-10 text-white p-5">
//             <div className=" text-justify">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
//               esse, fuga odio, possimus provident vitae iusto odit dicta eos
//               delectus ipsa debitis. Nihil, repellendus ratione. Voluptates
//               placeat minima quaerat adipisci.
//             </div>
//             <div className="absolute bottom-6 flex justify-between w-[88%]">
//               <button className="btn btn-primary">See Details</button>
//               <button className="btn btn-primary">Enroll</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
