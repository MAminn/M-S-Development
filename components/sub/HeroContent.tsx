"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center max-md:text-center justify-center px-20 mt-40 w-full "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center max-md:items-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] max-lg:text-[#333] ">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl max-md:text-5xl max-md:text-center font-bold text-white max-w-[600px] w-auto h-auto "
        >
          <span>
            Providing
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] max-md:text-sm max-md:text-center"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          href="#projects"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white px-2  rounded-lg max-w-[250px] z-40 cursor-pointer"
        >
          See the Latest Works
        </motion.a>
        {/* ADD CONTACT  */}
        <Link href="#contact" className=" ">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box max-md:flex max-md:justify-center max-md:items-center py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] z-40 cursor-pointer"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className=" text-[15px] text-white ">Contact Me!</h1>
          </motion.div>
        </Link>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
