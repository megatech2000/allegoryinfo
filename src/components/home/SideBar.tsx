import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SideBar = () => {
  return (
    <section>
      <div className="px-10 pt-5">
        <div className="bg-[#505050] rounded-2xl p-5">
          <div className="flex items-center justify-center">
            <Image
              className="w-64"
              src="/images/logo.png"
              alt="logo image"
              width={2000}
              height={2000}
            />
          </div>
          <div className="pt-10 flex items-center justify-center">
            <Image
              className="w-full"
              src="/images/sidebar-img.png"
              alt="logo image"
              width={2000}
              height={2000}
            />
          </div>
          <div>
            <p className="pt-5">Crafting Visually Stunning and</p>
            <p className="text-white pt-2">User-Friendly Web Experiences</p>
          </div>
          <div className="pt-10">
            <p className="text-sm">
              My expertise spans various modern technologies, including HTML5,
              CSS3, JavaScript, and popular frameworks like React and Next.js
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 py-6">
            <div className="px-4 py-2 border border-[#656464] bg-[#191919]  rounded-full cursor-pointer hover:bg-[#505050] bg-hover">
              <FaInstagram className="text-white" />
            </div>
            <div className="px-4 py-2 border border-[#656464] bg-[#191919]  rounded-full cursor-pointer hover:bg-[#505050] bg-hover">
              <FaFacebookF className="text-white" />
            </div>
            <div className="px-4 py-2 border border-[#656464] bg-[#191919]  rounded-full cursor-pointer hover:bg-[#505050] bg-hover">
              <FaWhatsapp className="text-white" />
            </div>
            <div className="px-4 py-2 border border-[#656464] bg-[#191919]  rounded-full cursor-pointer hover:bg-[#505050] bg-hover">
              <FaLinkedinIn className="text-white" />
            </div>
            <div className="px-4 py-2 border border-[#656464] bg-[#191919]  rounded-full cursor-pointer hover:bg-gradient-to-r from-[#505050] via-[#6D6D6D] to-[#6D6D6D] bg-hover">
              <FaGithub className="text-white" />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="bg-[#fff] px-10 rounded-full py-2 flex items-center justify-center cursor-pointer hover:bg-[#cdcbcb]">
              <Image
                className="w-6"
                src="/images/mail.svg"
                alt=""
                width={600}
                height={600}
              />
            </div>
            <div className="cursor-pointer">
              <button className="px-9 font-bold py-2 bg-[#FFC809] rounded-full btn-hover">
                TALK CASUALY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
