import React from "react";
import about from "../public/about.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import circle from "../public/circle-text.svg";
import humanPc from "../public/human-with-pc.png";

const About = () => {
  return (
    <div className="px-48 my-16 grid grid-cols-2 items-center justify-center">
      <div className="relative images">
        <img src={humanPc} alt="" className="work-emoji" />
        <img
          src={about}
          alt=""
          className="rounded-3xl w-[45%] .img-side__main-img"
        />
        <span className="span">
          <img src={circle} alt="" className="  w-[30%] " />
        </span>
      </div>

      <div className="flex flex-col gap-4 texts">
        <p className="uppercase text-blue-500 font-poppins font-bold text-lg">
          about me
        </p>
        <p className="flex items-end text-[#2d2e32] text-3xl font-poppins font-bold">
          Frontend Engineer <br /> based in Ibadan, Nigeria{" "}
          <span>
            <FaMapMarkerAlt size={24} className="text-[#0564b3cc] ml-3" />
          </span>
        </p>
        <p className="text-[#555] font-mulish  font-medium">
          Hey, my name is Alatise(Alat), and I'm a Frontend Engineer. My passion
          is to create and develop a clean UI/UX for my users.
        </p>
        <p className="text-[#555] font-mulish  font-medium">
          My main stack currently is React/Next.js in combination with Tailwind
          CSS and JavaScript(with proficiency in TypeScript).
        </p>
      </div>
    </div>
  );
};

export default About;
