import React from 'react'
import {services} from './Data'
const Service = () => {
  return (
    <div className=' p-10 '>
 <div className=" grid grid-cols-1 sm:grid-cols-3 gap-10 text-center items-center sm:px-0 align-center px-30 md:px-20" >
      {services.map(({ id, title, image, style,description }) => (
        <div
          key={id}
          className={` shadow-lg dark:shadow-black backdrop-blur-sm dark:bg-six/20 rounded-lg py-5 px-8 flex flex-col justify-center items-center  hover:scale-105 duration-500 ${style}`}
        >

            <img src={image} alt="" />
         
          <p className="mt-4 text-bold text-2xl dark:text-white">{title}</p>
          <p className='mt-2  dark:text-white'>{description}</p>
        </div>
      ))}
    </div>
    </div>

  )
}
export  default Service;