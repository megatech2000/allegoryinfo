const Education = () => {
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
                <p className="text-2xl">Education</p>
              </div>
              <div>
                <div className="py-10 flex items-center justify-between">
                  <h3 className="text-4xl text-[#BEBEBE] ">
                    <span className="text-[#FFC809] font-semibold">+2</span>
                    <br /> Computer Science
                  </h3>
                  <p className="text-xl">2016-18</p>
                </div>
                <hr className="border-[#2a2929]" />
                <div className="pt-10 flex items-center justify-between">
                  <h3 className="text-4xl text-[#BEBEBE]">
                    <span className="text-[#FFC809] font-semibold">
                      Diploma
                    </span>
                    <br /> Art and media
                  </h3>
                  <p className="text-xl">2018-22</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
