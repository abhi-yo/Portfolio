import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { debounce } from "lodash";

const Home = () => {
  const scrollToWork = debounce(() => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 30); // Adjust the debounce time as needed

  const handleScrollToWork = (e) => {
    e.preventDefault();
    scrollToWork();
  };
  return (
    <div name="home" className="w-full h-screen bg-primary">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-secondary">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Akshat Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          a pre-final year CSE undergrad a passionate problem solver and
          software enthusiast. My primary tech stack is React, TailwindCSS for
          frontend and Node.js, Express and MongoDB for backend. I am currently
          looking for collaborating in web development projects.
        </p>
        <div className="flex items-center">
          <a
            href="#work"
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondaryhover:border-pink-600"
            onClick={handleScrollToWork}
          >
            View Work
            <span className="group-hover:rotate-90 duration-3000">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
