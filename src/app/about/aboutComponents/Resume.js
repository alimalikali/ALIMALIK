import React from "react";
import Card from "./Card";
import Reveal from "@/app/components/animations/Reveal";



const Resume = () => {
  return (
    <main >
     
      {/* main education */}
      <div className="flex flex-col space-y-32">
        <Reveal >
        <div>
          <div className="flex flex-col justify-center items-center text-center text-white space-y-3 ">
            <h1 className="text-4xl">Education & Certifications</h1>
            <p className="text-xl ">See my education history.</p>
          </div>
        </div>
        </Reveal>
        <div>
          {/* 2 main  */}
          <div>
            <div className="flex md:flex-row flex-col justify-center items-center space-x-0 md:space-x-3  space-y-3 md:space-y-0">
              <Card index={1} title={"Laurel Grammar School"}  description={"Laid the foundation for learning at Laurel Grammar School."}  year={2020} />
              <Card index={2} title={"Shalimar College"}  description={"Honed my academic skills at Shalimar College."}  year={2022} />
              <Card index={3} title={"Dayyal Singh College"}  description={" Currently expanding my knowledge in BSCS at Dayyal Singh College."}  year={"2022-Present-2026"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
