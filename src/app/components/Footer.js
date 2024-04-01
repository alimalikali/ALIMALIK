"use client";
import Link from "next/link";
import React from "react";
import Header from "./Header";
import Typewriter from "typewriter-effect";

const Footer = () => {
  return (
    <>
      <footer>
        <Header />
        <div className="py-10 border-b-[1px] border-gray-500">
          <div className="flex flex-col space-y-16 md:space-y-0 md:flex-row justify-between  items-center text-gray-300 opacity-85">
            {/* 1 */}
            <div>
              <div className="flex  sm:items-start text-center items-center flex-col space-y-5">
                <h1 className="text-2xl font-thin">
                  Let's talk more about your next project
                </h1>
                <h2 className="sm:text-3xl font-normal">
                  alimalikali1928@gmail.com
                </h2>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-center ">
              <div>
                <ul className="flex space-x-4 sm:space-x-6 ">
                  <Link href="https://www.linkedin.com/in/ali-malik-038075225/" className="hover:-translate-y-2">
                    LinkedIn
                  </Link>
                  <Link href="https://twitter.com/AliMalikZulfqar" className="hover:-translate-y-2">
                    Twitter
                  </Link>
                  <Link href="https://www.patreon.com/home" className="hover:-translate-y-2">
                    Patreon
                  </Link>
                  <Link href="https://www.instagram.com/" className="hover:-translate-y-2">
                    Instagram
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-300 opacity-85">
          <div className="flex flex-col sm:flex-row sm:justify-between  items-center py-4 ">
            <div className="flex flex-nowrap space-x-2">
              <h1 className="flex flex-nowrap">&copy; Build with
              
              </h1>
              <Typewriter
                options={{
                  strings: ["Next Js ", "Tailwind css", "Framer motion"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div>Don't steal ー be inspired instead!</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
