import React from "react";
import Heroimg from "../assets/images/hero-img.png";
// icon
import { FaLongArrowAltRight } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="bg-[#F7F1FD] w-full  mx-auto h-146 flex justify-between ">
      <div className="w-full max-w-300 mx-auto flex justify-between mt-34.5 gap-12">
        {" "}
        <div>
          <h2 className="text-[60px] leading-15 font-bold tracking-[-1.5px] w-146">
            Create, Read, <br />{" "}
            <span className="text-[#2528E1]">Inspire.</span>
          </h2>
          <p className="text-gray-400 max-w-lg text-[20px] leading-7 font-normal mt-6">
            Discover stories written by amazing people. Share your knowledge and
            inspire others with your unique perspective.
          </p>
          <div className="flex mt-8 gap-4">
            <button className="bg-[#2528E1] text-white py-3 px-8 rounded-2xl flex items-center gap-2">
              Explore Posts <FaLongArrowAltRight />
            </button>

            <button className="bg-white tetx-black py-3 px-8 rounded-2xl">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <img src={Heroimg} alt="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
