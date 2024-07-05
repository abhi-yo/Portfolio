import React from "react";
import { data } from "../data/data.js";
import { BsGithub } from "react-icons/bs";
// import TP from "../assets/projects";

const ProjectItem = ({ item }) => {
  const { name, github, live, image } = item;

  return (
    <div className="mb-7 mt-4 flex flex-col rounded-md bg-black p-5 md:rounded-xl">
      <div className="flex justify-between">
        <div className="text-lg font-bold">{name}</div>
        {github && (
          <a
            href={github}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <BsGithub />
          </a>
        )}
      </div>
      <div className="flex grow flex-col gap-3">
        <div>
          <a href={live}>
            <img src={image} className="rounded-sm md:rounded-md" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const projects = data;

  return (
    <div
      id="work"
      name="work"
      className="flex flex-col w-full md:h-screen text-gray-300 bg-primary"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#00A9A5]">
            Work
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((item, index) => (
            <ProjectItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
