import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import waving from "../public/waving.png";
import html from "../public/html.png";
import css from "../public/css.png";
import javaScript from "../public/javascript.svg";
import typeScript from "../public/typescript.png";
import python from "../public/python.png";
import react from "../public/react.webp";
import nextJs from "../public/nextjs.png";
import tailwind from "../public/tailwind.png";
import sass from "../public/sass.png";
import bootstrap from "../public/bootstrap.png";

const Hero = () => {
  return (
    <div className="px-48 bg-[#f9f9f9] pb-8">
      <div className="flex gap-10 py-10 mt-0.5  items-center  relative justify-center">
        <article className="flex flex-col gap-8 relative">
          <p className="text-[#2d2e32] text-6xl font-poppins font-bold flex items-end">
            Frontend React and NextJs Developer{" "}
            <span className="">
              {/* <img src={waving} alt="waving" className="w-12 h-12" /> */}
            </span>
          </p>

          <p className="font-poppins text-[#555] font-mulish text-xl font-medium leading-[1.6]">
            Hi, I'm Omolayo Alatise. A passionate Frontend <br /> (React and
            NextJs) Developer based in Ibadan, Nigeria
          </p>
          <div className="flex gap-4">
            <FaLinkedin size={30} className="text-gray-600" />
            <FaGithub size={30} className="text-gray-600" />
          </div>
        </article>
        <div>
          <div className="hero-img"></div>
        </div>
      </div>
      <div className="flex items-center mt-10">
        <p className="text-[#555] font-mulish font-bold text-lg border-gray-400 border-r-2 pr-6 mr-12">
          Tech Stack
        </p>
        <div className="flex gap-9">
          <div className="flex gap-3 transition ease-in-out duration-500 delay-150 hover:-translate-y-3 cursor-pointer">
            <img src={html} alt="" className="w-12 h-12 rounded-xl" />
            <img src={css} alt="" className="w-12 h-12 rounded-xl" />
          </div>
          <div className="flex gap-3 transition ease-in-out duration-500 delay-150 hover:-translate-y-3 cursor-pointer">
            <img src={javaScript} alt="" className="w-12 h-12 rounded-xl" />
            <img src={typeScript} alt="" className="w-12 h-12 rounded-xl" />
            <img src={python} alt="" className="w-12 h-12 rounded-xl" />
          </div>
          <div className="flex gap-3 transition ease-in-out duration-500 delay-150 hover:-translate-y-3 cursor-pointer">
            <img src={react} alt="" className="w-12 h-12 rounded-xl" />
            <img src={nextJs} alt="" className="w-12 h-12 rounded-xl" />
          </div>
          <div className="flex gap-3 transition ease-in duration-500 delay-150 hover:-translate-y-3 cursor-pointer">
            <img src={tailwind} alt="" className="w-12 h-12 rounded-xl" />
            <img src={sass} alt="" className="w-12 h-12 rounded-xl" />
            <img src={bootstrap} alt="" className="w-12 h-12 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
