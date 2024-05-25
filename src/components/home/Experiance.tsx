import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div
      style={{ maxHeight: "70vh", overflowY: "auto" }}
      className="bg-scroll mt-36"
    >
      <section>
        <div>
          <div className="border border-[#595858] bg-[#000000] rounded-2xl p-10">
            <div>
              <div>
                <p className="text-2xl">Experience</p>
              </div>
              <div>
                <div className="py-10 flex items-center justify-between">
                  <h3
                    className="text-4xl text-[#BEBEBE]"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <span className="text-[#FFC809] font-semibold">
                      Turbo start
                    </span>
                    <br /> Computer Science
                  </h3>
                  <p
                    className="text-xl"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    6 Months
                  </p>
                </div>
                <hr className="border-[#2a2929]" />
                <div className="pt-10 flex items-center justify-between">
                  <h3
                    className="text-4xl text-[#BEBEBE]"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <span className="text-[#FFC809] font-semibold">
                      Axis Studio
                    </span>
                    <br /> Art and Media
                  </h3>
                  <p
                    className="text-xl"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    4 Months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
