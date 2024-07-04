import Contact from "@/components/main/Contact";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Parallax from "@/components/main/Parallax";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className=' h-full w-full flex flex-col '>
    

      <Hero />
      <Skills />
      <Encryption />
      <Parallax type='services' />
      <Projects />
      {/* <Contact /> */}
 
    </main>
  );
}
