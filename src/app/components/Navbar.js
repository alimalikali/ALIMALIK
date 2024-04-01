'use client'
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion";


const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 ">
      <div className="flex justify-center py-4">
        <motion.div drag dragConstraints={{left:0 ,right:0,bottom:0 ,top:0}} className="rounded-full  flex justify-center   w-auto py-2 px-1 border-gray-500 border-[1px] bg-[#111212]">
            <Link href="/" className="mx-[2px] px-5 py-3 bg-[#1f2020] text-white font-semibold rounded-full w-1/3 border-gray-600 border-[1px]">Home</Link>
            <Link href="#projects" className="mx-[2px] px-5 py-3 bg-[#1f2020] text-white font-semibold rounded-full w-1/3 border-gray-600 border-[1px]">Projects</Link>
            <Link href="#skills" className="mx-[2px] px-5 py-3 bg-[#1f2020] text-white font-semibold rounded-full w-1/3 border-gray-600 border-[1px]">Skills</Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
