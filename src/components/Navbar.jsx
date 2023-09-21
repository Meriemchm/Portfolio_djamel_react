import React, { useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Navlink } from "./Data";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100; // seuil de défilement à partir duquel la couleur de fond est modifiée

    if (scrollY > threshold) {
      setBgColor('bg-gradient-to-t ');

    } else {
      setBgColor('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div onScroll={handleScroll} className={`flex justify-between items-center w-full h-20 text-white px-4 md:px-20 ${bgColor}   from-primary/90 to-second py-4 fixed z-10`}    >
      <div>
        <h1 className=" font-extrabold text-4xl ml-2 md:text-5xl ">
          ZD
        </h1>
      </div>

      <ul className="hidden md:flex ">
        {Navlink.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-8 cursor-pointer font-light text-lg text-white hover:scale-105 duration-200 capitalize"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className='hidden md:flex'>

      <DarkMode />
      </div>

      <div
        onClick={() => setShow(!show)}
        className="flex justify-center items-center gap-5 cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        <DarkMode/>
        {show ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {show && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-primary to-second text-white">
          {Navlink.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 py-4 cursor-pointer text-4xl text-white hover:scale-105 duration-200 capitalize"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setShow(!show)}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
   
    </div>
  );
};

export default Navbar;