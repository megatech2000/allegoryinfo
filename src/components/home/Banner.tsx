// "use client";
import dynamic from "next/dynamic";

const SideBar = dynamic(() => import("../home/SideBar"));
const NavBar = dynamic(() => import("../navbar/NavBar"));
const Heading = dynamic(() => import("../home/Heading"));
const Portfolio = dynamic(() => import("../home/Portfolio"));
const About = dynamic(() => import("../home/About"));
const Experiance = dynamic(() => import("../home/Experiance"));
const Education = dynamic(() => import("../home/Education"));
const Tools = dynamic(() => import("../home/Tools"));
// import { FaArrowDown } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import React, { useState, useEffect } from "react";

const Banner = () => {
  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     setIsVisible(scrollTop === 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section>
      <div>
        <div className="md:flex">
          <div className="hidden md:block  w-[30%] h-full fixed">
            <SideBar />
          </div>

          <div className="w-full md:h-screen">
            <div className="md:hidden">
              <NavBar />
            </div>
            <div className="flex md:fixed top-0 md:left-[30%] md:top-5 w-full md:w-0">
              <div className="hidden md:block">
                <NavBar />
              </div>
            </div>
            <div className="h-full md:mr-10  pb-7 flex px-5 items-end justify-center">
              <Heading />
            </div>
          </div>
          <div className="md:hidden w-full md:w-[30%] h-full">
            <SideBar />
          </div>
        </div>
      </div>
      {/* same item start here */}
      <div className="md:flex mt-20 md:mt-36 md:mr-10">
        <div className="w-[30%] h-full"></div>
        <div className="w-full md:w-[70%] h-full">
          <div className="px-5 md:px-0">
            <Portfolio />
          </div>
        </div>
      </div>
      {/* same item end here*/}
      <div className="md:flex mt-20 md:mt-36 md:mr-10">
        <div className=" w-[30%] h-full"></div>
        <div className="w-full md:w-[70%] h-full">
          <div className="px-5 md:px-0">
            <About />
          </div>
        </div>
      </div>
      <div className="md:flex  mt-20 md:mt-36 md:mr-10">
        <div className=" w-[30%] h-full"></div>
        <div className="w-full md:w-[70%] h-full">
          <div className="px-5 md:px-0">
            <Experiance />
          </div>
        </div>
      </div>
      <div className="md:flex mt-20 md:mt-36 md:mr-10">
        <div className=" w-[30%] h-full"></div>
        <div className="w-full md:w-[70%] h-full">
          <div className="px-5 md:px-0">
            <Education />
          </div>
        </div>
      </div>
      <div className="md:flex md:mr-10">
        <div className=" w-[30%] h-full"></div>
        <div className="w-full md:w-[70%] h-full">
          <div className="px-5 md:px-0">
            <Tools />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
