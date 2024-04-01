import React from "react";
import img1 from "../../../public/pro3.png";
import img2 from "../../../public/pro2.png";
import Image from "next/image";

const Projects = () => {
  const Project = ({title,description ,img}) => {
    return( <>
    <div className="group w-full px-3 py-3  lg:w-9/12 h-full bg-[#1f2020] rounded-[20px] ">
              <div className="  shadow-white group-hover:box-shadow-white rounded-[20px] flex flex-col space-y-12 bg-[#1f2020]  md:p-10 p-4 border-[1px] border-gray-800 group-hover:border-white shadow-2 hover:shadow-lg group-hover:bg-gradient-to-l from-transparent to-gray-500 md:px-7 xl:px-10">
                <div className="flex flex-col space-y-7">
                  <h4 className="text-white text-4xl font-light">
                    {title}
                  </h4>
                  <p className="text-gray-400">
                    {description}
                  </p>
                </div>
                <div className=" mb-8 flex h-full w-auto items-center justify-center rounded-2xl">
                  <div className=" w-90 h-full bg-gray-200 rounded-xl overflow-hidden shadow-lg  group-hover:-translate-y-7">
                    <Image
                      src={img}
                      alt="Card Image"
                      className="md:w-full  md:h-full  "
                    />
                  </div>
                </div>
              </div>
            </div>

    
    </>);
  };

  return (
    <>
      {/* ====== Services Section Start */}
      <section id="projects" className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] ">
        <div className=" mx-auto">
          <div className="lg:px-40 px-1 flex items-start">
            <div className=" flex flex-wrap">
              <div className="w-full justify-start text-start  flex">
                <div className="text-white mx-2 sm:mx-auto  mb-12 max-w-[510px] text-left lg:mb-20">
                  <div className=" flex flex-row items-center my-6 space-x-3">
                    <div>
                      <div className="w-3 h-3  rounded  bg-white  shadow-white box-shadow-white "></div>
                    </div>
                    <div className="flex justify-center">
                      <p className=" text-sm md:text-xl opacity-80 text-[#b4b4a0] ">
                        My Projects
                      </p>
                    </div>
                  </div>

                  <p className=" text-base ">
                    Some of my miracle , See What I am capable off
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-1 flex flex-col space-y-40 items-center ">
             <Project  title={"E-commerce Store"} img={img1} description={"I've built an advanced e-commerce store with a focus on user experience, featuring easy product browsing, secure payments, &amp; responsive design."} />
            <Project  title={"Refreshing Design"} img={img2} description={"We enjoy working with discerning clients — individuals who value quality, service, integrity, and aesthetics."}/>
          </div>
        </div>
      </section>
      {/* ====== Services Section End */}
    </>
  );
};

export default Projects;
