import Reveal from "@/app/components/animations/Reveal";
import Image from "next/image";
import React from "react";
import ins1 from "./../../../../public/ins1.jpg";
import ins2 from "./../../../../public/ins2.jpg";
import ins3 from "./../../../../public/ins3.jpg";

const Inspiration = () => {
  return (
    <main>
      <div className="flex flex-col space-y-20">
        <div>
          <div className="flex justify-center items-center">
            <div className="text-white font-medium flex space-y-3 justify-center items-center flex-col">
              <h1 className="text-4xl">My Inspiration</h1>
              <p className="text-xl font-thin text-center max-w-[500px]">
                I find inspiration in individuals who embody resilience,
                compassion, and a commitment to positive change. Their stories
                motivate me to pursue excellence and contribute meaningfully to
                society.
              </p>
            </div>
          </div>
        </div>

        {/* cards  */}

        <Reveal>
          <main className="">
            <div className="flex lg:flex-row flex-col items-center justify-center  lg:space-x-6 lg:space-y-0 space-y-4  py-5">
              {/* 1 */}
              <div className=" w-[270px] sm:w-[300px]  py-5 border-[1px] border-white rounded-xl text-white hover:text-black  hover:box-shadow-white hover:ring-1 ring-gray-500   overflow-hidden hover:transform hover:translate-y-[-5px] hover:translate-x-[5px] transition duration-300  shadow hover:bg-gray-100">
                <div className="flex items-center justify-center">
                  <Image
                    src={ins1}
                    alt="Placeholder"
                    className="size-36 rounded-full object-cover"
                  />
                </div>
                <div className="p-4 ">
                  <h3 className="text-xl  font-bold  text-center  mb-2">
                    Israr Ahmed
                  </h3>
                  <p className=" text-center opacity-80 ">
                    Dr. Israr Ahmed, a renowned Islamic scholar and preacher,
                    inspires me with his profound knowledge and unwavering
                    commitment to spreading the teachings of Islam.
                  </p>
                  <h2 className="text-center opacity-80 font-bold mt-1">
                    Founded : Tanzeem-e-Islami, A revolutionary organization
                  </h2>
                </div>
              </div>

              {/* 2 */}

              <div className="w-[270px] sm:w-[300px]  py-5 border-[1px] border-white rounded-xl  hover:box-shadow-white hover:ring-1 ring-gray-500   overflow-hidden hover:transform hover:translate-y-[-5px] hover:translate-x-[5px] transition duration-300">
                <div className="flex items-center justify-center">
                  <Image
                    src={ins2}
                    alt="Placeholder"
                    className="size-36 rounded-full object-cover"
                  />
                </div>
                <div className="p-4 ">
                  <h3 className="text-white font-semibold  text-center text-lg mb-2">
                    Syed Abul Ala Maududi
                  </h3>
                  <p className="text-gray-300 text-center ">
                    Maulana Maududi's profound insights and dedication to
                    Islamic revivalism inspire me to strive for intellectual
                    excellence and moral integrity.
                  </p>
                  <h2 className="text-center opacity-80 font-bold mt-1">
                    Founded : Jamaat-e-Islami, A Islamic revivalist organization
                  </h2>
                </div>
              </div>

              {/* 3 */}

              <div className=" w-[270px] sm:w-[300px]  py-5 border-[1px] border-white rounded-xl text-white hover:text-black  hover:box-shadow-white hover:ring-1 ring-gray-500   overflow-hidden hover:transform hover:translate-y-[-5px] hover:translate-x-[5px] transition duration-300  shadow hover:bg-gray-100">
                <div className="flex items-center justify-center">
                  <Image
                    src={ins3}
                    alt="Placeholder"
                    className="size-36 rounded-full object-cover"
                  />
                </div>
                <div className="p-4 ">
                  <h3 className="text-xl  font-bold  text-center  mb-2">
                    Allama Iqbal
                  </h3>
                  <p className=" text-center opacity-80 ">
                    Allama Iqbal, a renowned Islamic revivalist poet, inspires
                    me with his profound insights into the Islamic faith, urging
                    a revival of its core values and teachings.
                  </p>
                  <h2 className="text-center opacity-80 font-bold mt-1">
                    Founded : Ideology of pakistan, An Idea of Islamic Caliphate
                  </h2>
                </div>
              </div>
            </div>
          </main>
        </Reveal>
      </div>
    </main>
  );
};

export default Inspiration;
