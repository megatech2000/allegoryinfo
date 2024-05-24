import dynamic from "next/dynamic";

const SideBar = dynamic(() => import("../home/SideBar"));
const NavBar = dynamic(() => import("../navbar/NavBar"));
const Portfolio = dynamic(() => import("../home/Portfolio"));
const About = dynamic(() => import("../home/About"));
const Experiance = dynamic(() => import("../home/Experiance"));
const Education = dynamic(() => import("../home/Education"));
const Tools = dynamic(() => import("../home/Tools"));

const Banner = () => {
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
                <h2 className="text-[#FFC809] text-7xl py-5">I'm Bibinlal</h2>
                <h1 className="text-white text-7xl font-semibold">
                  Frontend Developer
                </h1>
              </div>
              <p className="text-sm">
                I'm Bibinlal, a passionate frontend developer dedicated to
                <br />
                transforming ideas into engaging and dynamic web applications
              </p>
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
