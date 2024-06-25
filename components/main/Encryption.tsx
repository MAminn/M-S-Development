"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center lg:h-[800px] max-lg:min-h-screen mb-14 w-full h-full">
      <div className="absolute w-auto h-auto mb-10 top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] z-50 absolute  w-auto h-full min-h-screen">
        <div className="flex flex-col items-center group cursor-pointer w-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={1}
            height={1}
            unoptimized
            className="w-[50px] h-[40px] max-lg:h-[30px] max-lg:w-[30px] translate-y-5 transition-all duration-200 group-hover:translate-y-8"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={1}
            height={1}
            unoptimized
            className=" w-[70px] h-[70px] max-lg:h-[40px] max-lg:w-[40px] z-10 "
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[5px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-0 px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
