"use client";
import { delay, motion } from "framer-motion";

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
    },
  }),
};
const webTechnologies = [
  
  "HTML",
  "CSS",
  "JavaScript",
  "Javaquery",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Tailwind CSS",
  "Bootstrap",
  "Next.js",
  "Framer motion",
];


const Skills = () => {
  return (
    <>
      <div id="skills" className="bg-transparent py-40 rounded-lg shadow-md">
        <div className=" px-1 flex items-start">
          <div className="text-white mx-2 sm:mx-auto mb-12 max-w-[510px] text-left lg:mb-20 justify-start">
            <div className="flex flex-row items-center justify-center my-6 space-x-3">
              <div className="w-3 h-3 rounded bg-white shadow-white box-shadow-white"></div>
              <p className="text-sm md:text-xl opacity-80 text-[#b4b4a0]">
                My Skills
              </p>
            </div>
            <p className="text-base text-center">
              Here are some of the web technologies I work with:
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <div className="flex flex-wrap space-x-3 space-y-3 md:max-w-[500px] justify-center items-center">
            {webTechnologies.map((technology, index) => (
              <motion.button
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                key={index}
                custom={index}
                viewport={{
                  once: true
                }}
                className="bg-[#1f2020]  hover:bg-gray-600 hover:-translate-y-2 text-white opacity-85 font-semibold py-2 px-4 rounded-full  inline-block ring-2 ring-gray-700 hover:ring-offset-1 "
              >
                {technology}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


export default Skills;
