"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            WebChain Dev
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 max-lg:hidden">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className=" cursor-pointer"
            />
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-200 focus:outline-none right-0 transition-all duration-75 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <FaBars className=" text-[20px]" />
          ) : (
            <IoMdClose className=" text-[25px]" />
          )}
        </button>
        {/* Mobile Menu

        <div
          className={`${
            isOpen
              ? "absolute top-16 left-0 right-0  md:hidden  backdrop-blur-lg z-50"
              : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-3  py-3 px-4 rounded-md shadow-lg text-center">
            <a
              href="#about-me"
              className="block py-2 text-gray-200 hover:text-gray-100 transition duration-300 ease-in-out"
            >
              About me
            </a>
            <a
              href="#skills"
              className="block py-2 text-gray-200 hover:text-gray-100 transition duration-300 ease-in-out"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block py-2 text-gray-200 hover:text-gray-100 transition duration-300 ease-in-out"
            >
              Projects
            </a>
          </div>
        </div> */}
        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 mt-2 md:hidden z-50 ">
            <div className="flex flex-col space-y-3  py-3 px-4 rounded-md shadow-lg ">
              <a
                href="#about-me"
                className="block py-2 text-gray-200 hover:text-gray-100 transition duration-300 ease-in-out"
              >
                About me
              </a>
              <a
                href="#skills"
                className="block py-2 text-gray-200 hover:text-gray-100 transition duration-300 ease-in-out"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block py-2 text-gray-200 hover:text-gray-100 transition duration-300 ease-in-out"
              >
                Projects
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
