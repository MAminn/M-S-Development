import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section className=" relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className=" rotate-180 absolute top-[-340px] left-0 -z-10 w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-transparent "></div> */}
      <HeroContent />
    </section>
  );
};

export default Hero;
