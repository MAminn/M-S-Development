"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
  type: "services" | "portfolio"; // Define the possible types for 'type'
}

const Parallax: React.FC<ParallaxProps> = ({ type }) => {
  const ref = useRef<HTMLDivElement>(null); // Use useRef with appropriate type

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className={`w-full h-[1000px] relative flex items-center justify-center overflow-hidden `}
      ref={ref}
    >
      <motion.h1
        style={{ y: yText }}
        className="text-[100px] sm:text-[72px] text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold"
      >
        {type === "services" ? "What We Did?" : "What We Did?"}
      </motion.h1>
      <motion.div
        className="absolute w-full h-full  bg-cover bg-bottom"
        style={{ backgroundImage: `url("mountains.png")` }}
      ></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="absolute w-full h-full bg-cover bg-bottom"
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="absolute w-full h-full bg-cover bg-bottom"
      ></motion.div>
    </div>
  );
};

export default Parallax;
