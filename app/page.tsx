import Contact from "@/components/main/Contact";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Parallax from "@/components/main/Parallax";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" h-full w-full flex flex-col ">
      <Hero />
      <Skills />
      <Encryption />
      <Parallax type="services" />
      <Projects />
      {/* <Contact /> */}
    </main>
  );
}
