import Image from "next/image";
import { toolsData } from "./data";

const Tools = () => {
  return (
    <section className="pt-20">
      <div>
        <div>
          <p className="text-6xl font-semibold">My Fav Tools</p>
        </div>
        <div className=" grid grid-cols-4 pr-64 gap-20  mt-20">
          {toolsData[0].content.map((item, i) => (
            <div key={i}>
              <div>
                <Image
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full    p-5 rounded-xl border border-[#2a2929]"
                  src={item}
                  alt="tools image"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
