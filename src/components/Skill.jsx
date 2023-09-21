import React from 'react'
import { techs } from "./Data";
const Skill = () => {
  return (

 <div className=' p-10 '>
 <div className=" grid grid-cols-1 sm:grid-cols-3 gap-10 text-center items-center sm:px-0 align-center px-20" >
      {techs.map(({ id, title, child, style }) => (
        <div
          key={id}
          className={` flex flex-col justify-center items-center   hover:scale-105 duration-500 ${style}`}
        >
          <div className="flex  shadow-md dark:shadow-white/20 dark:backdrop-blur-sm dark:bg-white/50 rounded-lg w-16 h-16 ">
            <div className={`m-auto rounded-md w-14 h-14  bg-primary flex justify-center items-center `}>
              {child}
            </div>
          </div>
          <p className="mt-4 text-bold dark:text-white">{title}</p>
        </div>
      ))}
    </div>
    </div>

  )
}

export default Skill