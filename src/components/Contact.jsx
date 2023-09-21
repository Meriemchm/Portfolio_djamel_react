import React from 'react'
import { formItem } from "./Data";

const Contact = () => {
    const inputItem = formItem.filter((item) => item.categorie === "input");
    const areaItem = formItem.filter((item) => item.categorie === "textarea");
  return (
    <div name="contact" className="flex h-full w-full dark:bg-six  ">
    <div className="max-w-screen-lg mx-auto w-full flex flex-col h-full py-20 ">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 ">
          <p className="dark:text-white mx-auto">Want to collaborate</p>
          <h2 className="dark:text-white text-5xl mx-auto">Contact Me !</h2>
        </div>

        <div className=" p-2 mx-5  rounded-lg  ">
          <div className="p-2 flex justify-center items-center md:border border-gray-300  rounded-lg">
            <form
              action=""
              method="POST"
              className="flex flex-col w-full md:w-1/2 justify-center mt-5 gap-4"
            >
              {inputItem.map((item, id) => {
                return (
                  <input
                    key={id}
                    type={item.type}
                    name={item.name}
                    autoComplete="off"
                    placeholder={item.placeholder}
                    className="border-gray-300  p-2 bg-transparent border-2 dark:border-white rounded-md dark:text-white dark:placeholder-white focus:outline-none"
                  />
                );
              })}
              {areaItem.map((item, id) => {
                return (
                  <textarea
                    key={id}
                    name={item.name}
                    placeholder={item.placeholder}
                    rows="10"
                    autoComplete="off"
                    className="prose resize-none p-2 bg-transparent border-2 dark:border-white border-gray-300 rounded-md dark:text-white dark:placeholder-white focus:outline-none"
                  ></textarea>
                );
              })}

              <button className="text-white bg-gradient-to-r from-[#5B2FB6] to-[#BC84FF] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Contact me
              </button>
            </form>
          </div>
          </div>

      
      </div>
    </div>
  </div>
  )
}

export default Contact