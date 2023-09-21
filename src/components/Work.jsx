import React from 'react'
import Masonry from "react-masonry-css";
import {works} from "./Data"
const breakpointColumnsObj = {
    default: 4,
    3000: 3,
    2000: 3,
    1200: 3,
    1000: 2,
    500: 1,
  };
const Work = () => {
  return (
    <Masonry className="flex animate-slide-fwd " breakpointCols={breakpointColumnsObj}>
    {works.map(({image}) => (
        <div className=' hover:scale-105 duration-500'>
       <img
       src={image}
       alt="..."
       className='md:px-2 py-2 mx-auto px-9'
     />
     </div>
    ))}
  </Masonry>
  )
}

export default Work