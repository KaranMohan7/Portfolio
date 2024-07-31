import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Marquee from "./Components/Marquee";
import { Route, Routes, useLocation } from "react-router";
import Shortinfo from "./Components/Shortinfo";
import Projects from "./Components/Projects";
import LocomotiveScroll from "locomotive-scroll";
import About from "./Pages/About";
import { motion } from "framer-motion";

const App = () => {
  const location = useLocation();
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, ease: [0.65, 0, 0.35, 1]}} className="w-full min-h-screen bg-[#F1F1F1]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {location.pathname !== "/about" && (
        <>
          <Marquee />
          <Shortinfo />
          <Projects />
        </>
      )}
    </motion.div>
  );
};

export default App;
