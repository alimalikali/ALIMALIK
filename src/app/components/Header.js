"use client";
import React from "react";
import Image from "next/image"; // Import Image from next/image
import logo from "../../../public/final.png"; // Import the image file
// import { motion, useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

const Ping = () => {
  return (
    <>
      <span className="relative shadow-custom flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-400"></span>
      </span>
    </>
  );
};

const Header = () => {
  return (
    <nav className=" p-4 border-b-[1px] border-gray-500 my-3 ">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 justify-between">
        <div className="flex items-center space-x-6">
         <Link href="/"> <Image  src={logo} alt="Logo" width={50} height={50} /></Link>
          <Link href="/" className="text-white text-lg font-mono sm:inline-block hidden">
            Ali Malik
          </Link>
        </div>
        <div className="flex items-center  ">
          <div className="flex items-center space-x-4">
            <motion.div
              transition={{ delay: 0 }}
              initial={{ type: "tween", position: "relative", y: -200 }}
              animate={{ y: 0 }}
              className="text-white text-lg font-semibold "
            >
              <Ping />
            </motion.div>
            <Link href="/" className="text-white text-lg font-semibold ">
              Available For Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
