// "use client";
"use client";

import { projectData } from "@/components/home/data";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const NavBar = dynamic(() => import("../../components/navbar/NavBar"));
const Heading = dynamic(() => import("../../components/home/Heading"));
const About = dynamic(() => import("../../components/home/About"));

const ITEMS_PER_PAGE = 12;

const protfolioPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardSectionRef = useRef<HTMLDivElement>(null);

  const loadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goBack = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = projectData.slice(startIndex, endIndex);

  //   scroll section

  const scrollToCardSection = () => {
    cardSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-5 md:px-36">
      <div>
        <div className="mt-5  flex items-center  justify-between">
          <div className="hidden md:block ">
            <a href="/">
              <Image
                className="w-36"
                src="/images/logo.png"
                alt=""
                width={1000}
                height={1000}
              />
            </a>
          </div>
          <NavBar />
        </div>
      </div>
      <div className="pt-36">
        <div>
          <div>
            <Heading />
          </div>
          <div className="mt-10">
            <button
              onClick={scrollToCardSection}
              className="px-10 py-2 bg-[#fff] rounded-full font-semibold btn-hover hover:bg-[#FFC809] hover:text-white"
            >
              Visible in one Click
            </button>
          </div>
        </div>
      </div>
      <div className="  mt-24">
        <div className="w-full h-[1px]  my-20 bg-gradient-to-l from-[#0000]  to-[#fff]"></div>
      </div>
      {/* about start */}
      <div>
        <div>
          <About />
        </div>
      </div>
      {/* about end */}
      <div className="px-5  mt-36">
        <div className="w-full h-[1px]  my-20 bg-gradient-to-l from-[#0000]  to-[#fff]"></div>
      </div>

      {/* card start here */}

      <div ref={cardSectionRef} className="mt-36 mb-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {currentItems.map((item, i) => (
            <div key={i} className="slide-in btn-hover cursor-pointer ">
              <a href="">
                <Image
                  src={item.img}
                  alt=""
                  width={1000}
                  height={1000}
                  layout="responsive"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5 space-x-4">
          {currentPage > 0 && (
            <button
              onClick={goBack}
              className="px-10 py-2 bg-white rounded-full hover:bg-[#FFC809] hover:text-white"
            >
              <MdOutlineKeyboardArrowRight className="rotate-180 text-2xl" />
            </button>
          )}
          {endIndex < projectData.length && (
            <button
              onClick={loadMore}
              className="px-10 py-2 bg-[#fff] rounded-full hover:bg-[#FFC809] hover:text-white btn-hover font-sans"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default protfolioPage;
