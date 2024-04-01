import React from "react";
// import { BiSolidSchool, IoSchool, LiaSchoolSolid } from "react-icons/si";
import { BiSchool, IoSchool, RiSchoolLine } from "react-icons/si";

import { delay, motion } from "framer-motion";
import { once } from "lodash";

const Card = ({ year, title, description, index }) => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.1,
      },
    }),
  };
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      key={index}
      custom={index}
      viewport={
        {once:true}
      }
      variants={fadeInAnimationVariants}
      className="block max-w-sm p-6 border-[1px] border-white rounded-xl text-white hover:text-black  hover:box-shadow-white hover:ring-1 ring-gray-500   overflow-hidden hover:transform hover:translate-y-[-5px] hover:translate-x-[5px] transition duration-300  shadow hover:bg-gray-100"
    >
      <div className="flex justify-between opacity-80 font-medium">
        <h1>{year}</h1>
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight ">{title}</h5>
      <p className="font-normal opacity-65">{description}</p>
    </motion.div>
  );
};

export default Card;
