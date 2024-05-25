import Link from "next/link";

const NavBar = () => {
  const links = [
    {
      title: "HOME",
      path: "#",
    },
    {
      title: "PORTFOLIO",
      path: "#",
    },
    {
      title: "ABOUT",
      path: "#",
    },
  ];

  return (
    <section className="flex items-center justify-between p-5 ">
      <div className="flex gap-10 pr-36">
        {links.map((item, i) => (
          <div
            key={i}
            className="text-[#7D7D7D] px-8 border border-[#333] hover:border-[#FFC809] hover:bg-[#191919] py-2 rounded-full"
          >
            <Link href={item.path}>{item.title}</Link>
          </div>
        ))}
      </div>
      <div>
        <button className="px-10 py-2 bg-[#fff] rounded-full font-semibold btn-hover">
          CONTACT
        </button>
      </div>
    </section>
  );
};

export default NavBar;
