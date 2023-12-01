import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <br />
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Akshat, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              A dedicated Full Stack Developer, I design user-friendly
              interfaces and robust applications. Driven by curiosity and a
              collaborative mindset, I actively seek opportunities to contribute
              my skills to impactful projects. I thrive in dynamic environments
              and continually strive to learn and innovate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
