import React from "react";
import Skill from "./skill";

const Skills = () => {
  return (
    <div name="skills" className="flex  w-full dark:bg-six  ">
      <div className="max-w-screen-lg mx-auto flex flex-col h-full py-20 ">
        <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 ">
          <p className="dark:text-white mx-auto">What i'm good on</p>
          <h2 className="dark:text-white text-5xl mx-auto">My Skills</h2>
        </div>
        <Skill/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
