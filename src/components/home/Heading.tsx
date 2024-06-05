const Heading = () => {
  return (
    <section className="  pt-24 md:pt-0 pb-10 md:pb-0 ">
      <div>
        <div className="flex items-center gap-4">
          <hr className="border border-[#6f6e6e] w-5" />
          <div>
            <p>Welcome to my portfolio!</p>
          </div>
        </div>
        <div>
          <div className="py-10">
            <h1 className="text-[#FFC809]">I'm Bibinlal</h1>
            <h1 className="text-[#ABABAB]">Frontend Developer</h1>
          </div>
          <p>
            I'm Bibinlal, a passionate frontend developer dedicated to
            <br className="hidden md:block" />
            transforming ideas into engaging and dynamic web applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heading;
