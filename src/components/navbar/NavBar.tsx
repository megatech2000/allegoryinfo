import Image from "next/image";
import Link from "next/link";
import { HiOutlineBars2 } from "react-icons/hi2";

const NavBar = () => {
  const links = [
    {
      title: "HOME",
      path: "/",
    },
    {
      title: "ABOUT",
      path: "#",
    },
    {
      title: "PORTFOLIO",
      path: "/portfolio",
    },
  ];

  return (
    <section className="flex items-center justify-between  p-3 md:p-0">
      <div>
        <a href="/">
          <Image
            className="w-40 md:hidden"
            src="/images/logo.png"
            alt=""
            width={600}
            height={600}
          />
        </a>
      </div>
      <div className="flex items-center gap-10">
        {links.map((item, i) => (
          <div
            key={i}
            className="text-[#7D7D7D] px-8 border border-[#333] hover:border-[#FFC809] hover:bg-[#191919] py-2 rounded-full cursor-pointer  hidden md:block"
          >
            <Link href={item.path}>{item.title}</Link>
          </div>
        ))}
      </div>
      <div className="md:hidden text-white text-4xl">
        <HiOutlineBars2 />
      </div>

      <div className="hidden md:block text-right ml-96">
        <button className="px-10 py-2 bg-[#fff] rounded-full font-semibold btn-hover">
          CONTACT
        </button>
      </div>
    </section>
  );
};

export default NavBar;
