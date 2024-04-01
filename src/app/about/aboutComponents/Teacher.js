import React from "react";
import one from "./../../../../public/teach1.png";
import two from "./../../../../public/teach2.png";
import Image from "next/image";
import Reveal from "@/app/components/animations/Reveal";

const Teacher = () => {
  return (
    <div className="flex flex-col space-y-20">
      <div>
        <div className="flex justify-center items-center">
          <div className="text-white font-medium flex justify-center space-y-3 items-center flex-col">
            <h1 className="text-4xl">My Mentors</h1>
            <p className="text-xl font-thin text-center max-w-[500px]">
              My programming mentor is a guiding light in my coding journey,
              with an infectious passion for the craft. They excel at
              simplifying complex concepts, making each lesson engaging and
              inspiring.
            </p>
          </div>
        </div>
      </div>

      {/* cards  */}

      <Reveal>
        <main className="">
          <div className="flex md:flex-row flex-col items-center justify-center  md:space-x-6 md:space-y-0 space-y-4  py-5">
            <div className=" w-[270px] sm:w-[300px] h-[350px] py-5 border-[1px] border-white rounded-xl text-white hover:text-black  hover:box-shadow-white hover:ring-1 ring-gray-500   overflow-hidden hover:transform hover:translate-y-[-5px] hover:translate-x-[5px] transition duration-300  shadow hover:bg-gray-100">
              <div className="flex items-center justify-center">
                <Image
                  src={one}
                  alt="Placeholder"
                  className="size-36 rounded-full object-cover"
                />
              </div>
              <div className="p-4 ">
                <h3 className="text-xl  font-bold  text-center  mb-2">
                  Kashi Yaar
                </h3>
                <p className=" text-center opacity-80 ">
                  Backend developer proficient in C# and Java,with a wealth of
                  experience and expertise in crafting robust and efficient
                  software solutions.
                </p>
              </div>
            </div>

            {/* 2 */}

            <div className="w-[270px] sm:w-[300px] h-[350px]  py-5 border-[1px] border-white rounded-xl  hover:box-shadow-white hover:ring-1 ring-gray-500   overflow-hidden hover:transform hover:translate-y-[-5px] hover:translate-x-[5px] transition duration-300">
              <div className="flex items-center justify-center">
                <Image
                  src={two}
                  alt="Placeholder"
                  className="size-36 rounded-full object-cover"
                />
              </div>
              <div className="p-4 ">
                <h3 className="text-white font-semibold  text-center text-lg mb-2">
                  Sir Zain
                </h3>
                <p className="text-gray-300 text-center ">
                  MERN stack developer and a proficient data scientist, guiding
                  students with expertise in both frontend and backend
                  technologies
                </p>
              </div>
            </div>
          </div>
        </main>
      </Reveal>
    </div>
  );
};

export default Teacher;
