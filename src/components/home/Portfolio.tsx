"use client";

import Image from "next/image";
import { projectData } from "./data";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="pt-5 relative">
      <div className="flex flex-col h-full">
        <div>
          <p>Portfolio</p>
        </div>
        <div className="py-16">
          <h2 className=" text-[#BEBEBE]">
            Check out My Featured
            <br /> Projects
          </h2>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".button-next-silde",
            prevEl: ".button-prev-silde",
          }}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {projectData.map((item, i) => (
            <SwiperSlide>
              <div key={i}>
                <div>
                  <Image
                    className="w-full"
                    src={item.img}
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="flex items-center justify-between">
            <div className="flex gap-4 mt-5">
              <div className="button-prev-silde">
                <div className="text-white  text-4xl cursor-pointer rotate-180">
                  <IoIosArrowDroprightCircle />
                </div>
              </div>
              <div className="button-next-silde">
                <div className="text-white  text-4xl cursor-pointer">
                  <IoIosArrowDroprightCircle />
                </div>
              </div>
            </div>
            <div className="pr-10 mt-5">
              <a href="/portfolio">
                <button className="px-6 py-2 bg-[#fff] rounded-full from-neutral-50 hover:bg-[#FFC809] hover:text-white btn-hover uppercase text-sm">
                  View All
                </button>
              </a>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
