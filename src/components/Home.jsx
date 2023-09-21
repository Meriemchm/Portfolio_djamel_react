import React from "react";
import { links } from "./Data";
const Home = () => {
  return (
    <div
      name="home"
      className=" relative flex md:h-screen w-full bg-gradient-to-t from-primary to-second py-4  "
    >
      <div className="custom-shape-divider-bottom-1695298939 dark:fill-six fill-white ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.40,56.44c60-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.90,250.80-.39C823.80,31,906.67,72,985.66,92.83c70.05,10,1000,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-center items-center h-full px-8 my-16 gap-6 md:gap-0 md:flex-row md:my-0">
        <div className="flex flex-col md:justify-center h-full">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6D47] to-[#FFB544]">
              Graphic
            </span>{" "}
            Designer
          </h2>
          <p className="text-white/60 py-4 max-w-md">
            I'm Djamel, a graphic designer who specializes in creating vibrant
            and eye-catching designs. My work is all about making visuals that
            leave a{" "}
            <span className="text-bold text-white">strong impression</span>.
          </p>
          <div className="flex">
            <ul className="flex flex-row ">
              {links.map(({ id, mobile, href, download }) => {
                return (
                  <li key={id} className="mr-5 hover:scale-105 duration-200">
                    <a
                      href={href ? href : "/"}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between items-center w-full text-white"
                    >
                      {mobile}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div class="flex flex-wrap justify-center z-99999 relative my-10 mb-0">
          <div class="w-4/5">
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
              alt="..."
              class="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
