"use client";
import dynamic from "next/dynamic";

const SideBar = dynamic(() => import("../home/SideBar"));
const NavBar = dynamic(() => import("../navbar/NavBar"));
const Portfolio = dynamic(() => import("../home/Portfolio"));
const About = dynamic(() => import("../home/About"));
const Experiance = dynamic(() => import("../home/Experiance"));
const Education = dynamic(() => import("../home/Education"));
const Tools = dynamic(() => import("../home/Tools"));
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="flex h-screen ">
        <div className="w-[30%]  fixed top-0">
          <SideBar />
        </div>
        <div className="w-[30%] h-full"></div>
        <div className=" w-[70%] h-full px-10">
          <div>
            <NavBar />
          </div>
          <div className="h-full flex flex-col items-start justify-end pb-32 px-5">
            <div className="flex gap-5 items-center pb-5">
              <hr className="w-3" />
              <p>Welcome to my portfolio!</p>
            </div>
            <div>
              <div className="mb-36">
                <motion.h2
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#FFC809] text-7xl py-5 "
                >
                  I'm Bibinlal
                </motion.h2>
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-white text-7xl font-semibold animate-gradient-text"
                >
                  Frontend Developer
                </motion.h1>
              </div>
              <div className="flex items-center justify-between ">
                <p className="text-sm">
                  I'm Bibinlal, a passionate frontend developer dedicated to
                  <br />
                  transforming ideas into engaging and dynamic web applications
                </p>
                <div
                  className={`p-5 rounded-full border border-[#FFC809] mr-[-200px] btn-hover cursor-pointer transition-opacity duration-500 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  role="button"
                  aria-label="Scroll down"
                >
                  <FaArrowDown className="text-xl text-[#FFC809]" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Portfolio />
          </div>
          <div className=" mt-28">
            <About />
          </div>
          <hr className="border-[#383737]" />
          <div className=" mt-20">
            <Experiance />
          </div>
          <div className="mt-20">
            <Education />
          </div>
          <div className="mt-20 h-[100vh]">
            <Tools />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
