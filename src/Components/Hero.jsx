import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.16"
        className="ml-10 mt-14 md:mt-16 md:ml-10  lg:mt-20 lg:ml-24"
      >
        <div className="w-[80%]">
          <h1
            className="font-semibold text-[5.8vw] leading-snug "
          >
            I'm Karan, a frontend developer specialized in creating crisp and
            catchy
          </h1>
          <ReactTyped
            className="font-bold  text-[5.8vw] leading-snug"
            strings={["User Experience", "Interactive Experience"]}
            typeSpeed={100}
            backSpeed={80}
            loop
          ></ReactTyped>
        </div>
      </div>
    </>
  );
};

export default Hero;
