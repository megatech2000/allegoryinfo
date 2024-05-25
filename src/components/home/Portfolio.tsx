"use client";
import { useState } from "react";
import Image from "next/image";
import { projectData } from "./data";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="h-screen overflow-hidden pt-5 relative">
      <div className="bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f] to-transparent h-[5vh] w-full absolute top-[37%] z-[1000]"></div>
      <div className="bg-gradient-to-b from-transparent via-[#0f0f0f] to-[#0f0f0f] h-[5vh] w-full absolute bottom-[-28px] z-[1000]"></div>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl">Portfolio</p>
        </motion.div>
        <div className="py-16">
          <motion.h2
            className="text-6xl font-semibold text-[#BEBEBE]"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Check out My Featured
            <br /> Projects
          </motion.h2>
        </div>
        <div className="overflow-y-auto bg-scroll ">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 pr-5 ">
            {projectData.map((item, index) => (
              <motion.div
                className="w-full h-full relative"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div
                  className="bg-cover bg-center rounded-2xl  h-72"
                  style={{ backgroundImage: `url(${item.img})` }}
                />

                {hoveredIndex === index && (
                  <div className="absolute bottom-0 left-0 right-0  p-3">
                    <button className="px-10 py-2 bg-[#fff] text-[#000] rounded-full font-semibold hover:bg-[#FFC809]  btn-hover">
                      View Project
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
            {/* card end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
