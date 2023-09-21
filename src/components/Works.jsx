import React from "react";
import Work from "./Work";

const Works = () => {
  return (
    <div name="work" className="flex w-full dark:bg-six  ">
      <div className=" max-w-screen-lg mx-auto flex flex-col  py-20 ">
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-5 ">
            <p className="dark:text-white mx-auto">Some of my works</p>
            <h2 className="dark:text-white text-5xl mx-auto">My Works</h2>
          </div>

          <Work />
        </div>
      </div>
    </div>
  );
};

export default Works;
