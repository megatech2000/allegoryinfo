"use client";

import { useState, useEffect } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDownload = () => {
    // Path to your CV file
    const cvUrl = "/images/BIBIN.pdf";
    // Trigger download
    const link = document.createElement("a");
    link.href = cvUrl;
    link.setAttribute("download", "YourCV.pdf");
    document.body.appendChild(link);
    link.click();
    // Cleanup
    document.body.removeChild(link);
  };

  return (
    <section className="pt-5">
      <div>
        <div>
          <p className="text-xl">About me</p>
        </div>
        <div className="py-16">
          <h2 className="text-6xl font-semibold text-[#BEBEBE]">
            Turning complex Designs
            <br /> into simple Codes
          </h2>
        </div>
        <div className="flex">
          <div className="w-full  pr-36">
            <div className="bg-gradient-to-b from-[#191919] via-[#191919] to-[#1f1f1f] py-10 flex flex-col items-center justify-center rounded-2xl border border-[#434242]">
              <p className="text-6xl text-[#FFC809]">40+</p>
              <p>web works</p>
            </div>
          </div>
          <div className="w-full  pr-36 ">
            <div className="bg-gradient-to-b from-[#191919] via-[#191919] to-[#1f1f1f] py-10 flex flex-col items-center justify-center rounded-2xl border border-[#434242]">
              <p className="text-6xl text-[#BEBEBE]">1+</p>
              <p>Experience</p>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <p>
            My expertise spans various modern technologies, including HTML5,
            CSS3, JavaScript, and popular frameworks like React and Vue.js. I
            thrive on solving complex problems and continuously learning to stay
            ahead in the ever-evolving world of web development. In my projects,
            you’ll find a blend of creativity and technical proficiency,
            showcasing my commitment to delivering high-quality digital
            experiences. Whether you're looking for a complete website overhaul
            or a sleek new feature for your existing application, I'm here to
            help bring your vision to life.
          </p>
        </div>
        <div className="pt-10 mb-28">
          {isMounted && (
            <button
              onClick={handleDownload}
              className="px-8 py-2 bg-[#FFC809] rounded-full flex items-center justify-between gap-4 font-semibold"
            >
              Download CV
              <FaArrowAltCircleDown />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;