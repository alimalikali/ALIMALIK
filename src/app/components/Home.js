"use client";
import Image from "next/image";
import React from "react";
import hero from "../../../public/ali1.jpg"; // Import the image file
import Typewriter from "typewriter-effect";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";


const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.5]);
  return (
    <div className="md:px-16 px-2 py-10 md:py-20 overflow-hidden ">
      
    <motion.div className="fixed top-0 left-0 right-0 h-3 bg-gray-500 transform origin-left" style={{ scaleX }} />
      <div className=" text-white py-10 md:py-20  px-4 sm:px-20 lg:px-0  md:flex items-center">
        <div className="md:w-1/2 text-center md:text-left md:pr-12 ">
          <div className="flex flex-col items-start">
            <div className=" flex flex-row items-center my-6 space-x-3">
              <div>
                <div className="w-3 h-3  rounded  bg-white  shadow-white box-shadow-white "></div>
              </div>
              <div className="flex justify-center">
                <p className=" text-sm md:text-base opacity-80 text-[#b4b4a0] ">
                  MERN Developer
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold">
              Hey, I'm ALI Malik.
            </h2>
            <h1 className="text-xl sm:text-4xl text-[#b4b4a0] font-bold">
              <Typewriter
                options={{
                  strings: [
                    "React Js Developer",
                    "Node Js Developer",
                    "MERN Stack Developer",
                    "Researcher",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <Link href="/about" className="mt-6 px-4 py-1 text-2xl font-mono bg-white  shadow-white box-shadow-white  text-gray-800 rounded  hover:shadow-white hover:transform hover:translate-y-[-5px] hover:translate-x-[5px] transition duration-300">
              Who I Am
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <motion.div  style={{ scale }} className="flex flex-col items-center">
            <Link href="/about">
            <Image
              src={hero}
              width={300}
              height={300}
              alt="Image"
              className="mx-auto md:mx-0 rounded-xl shadow-white box-shadow-white"
            />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
