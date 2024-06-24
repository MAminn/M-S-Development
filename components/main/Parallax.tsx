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

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden w-full lg:h-[800px] max-lg:h-[600px]"
      ref={ref}
    >
      <motion.h1
        style={{ y: yText }}
        className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold lg:text-[72px] max-lg:text-[50px]"
      >
        {type === "services" ? "What We Did?" : "Our Portfolio"}
      </motion.h1>

      <motion.div
        className="absolute w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url("mountains.png")` }}
      ></motion.div>

      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="absolute w-full h-full bg-cover bg-center"
      ></motion.div>
    </div>
  );
};

export default Parallax;
