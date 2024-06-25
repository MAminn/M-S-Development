import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section className=" relative flex flex-col h-full w-full" id="about-me">
      <div className="rotate-180 absolute top-[-330px] max-md:top-[-280px] left-0  w-full h-full object-cover  cursor-none -z-50">
        <video autoPlay muted loop className="w-full h-full  ">
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-transparent z-[5]"></div>
      <HeroContent />
    </section>
  );
};

export default Hero;
