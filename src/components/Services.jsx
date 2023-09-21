import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div name="services" className="flex w-full dark:bg-six  ">
      <div className="max-w-screen-lg mx-auto flex flex-col h-full py-20 ">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 ">
            <p className="dark:text-white mx-auto">What I do</p>
            <h2 className="dark:text-white text-5xl mx-auto">My Services</h2>
          </div>
          <Service />
        </div>
      </div>
    </div>
  );
};

export default Services;
