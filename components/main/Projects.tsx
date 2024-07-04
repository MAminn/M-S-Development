import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className='flex flex-col items-center justify-center py-20'
      id='projects'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        Projects
      </h1>
      <div className='h-full w-full grid lg:grid-cols-3 gap-10 px-10'>
        <ProjectCard
          url='https://brainwave-nine-delta.vercel.app'
          src='/Brainwave.png'
          title='Modern AI UX/UI with Next js'
          description='Well designed to provide a seamless and engaging user experience, Key features of the website include intuitive navigation, responsive design, and dynamic content rendering, ensuring a fast and smooth user experience across all devices'
        />
        <ProjectCard
          url='https://glx-travel.vercel.app'
          src='/glx-travel.png'
          title='Space travel Agency'
          description='Crafted with React and Tailwind, this travel agency website offers a seamless and engaging user experience. Key features include intuitive navigation, responsive design, and dynamic content rendering, ensuring fast, smooth access across all devices.'
        />
        <ProjectCard
          url='https://gym-proj-sooty.vercel.app'
          src='/Fit-Physique.png'
          title='Gym Website using Next js'
          description='Built with React and Tailwind, this gym website is designed to provide a seamless and engaging user experience. Key features include intuitive navigation, responsive design, and dynamic content rendering, ensuring fast, smooth access across all devices.'
        />
        <ProjectCard
          url='https://threads-c-eight.vercel.app'
          src='/Threads.png'
          title='Threads clone using next js'
          description='This Threads clone is a social media web application built using Next.js and Tailwind CSS, designed to replicate the core functionalities and user experience of the popular Threads platform.'
        />
        <ProjectCard
          url='https://data-finance-psi-one.vercel.app'
          src='/Data.png'
          title='Data analytics using React js'
          description='Discover actionable insights with our cutting-edge data analytics platform. Harness the power of data with intuitive visualizations and robust predictive analytics. Empower your decisions with real-time data-driven solutions.'
        />
        <ProjectCard
          url='https://nike-two.vercel.app'
          src='/Nike.png'
          title='Nike using next js'
          description='Experience the essence of Nike online with our sleek, responsive website. Navigate effortlessly through a curated selection of iconic footwear, premium apparel, and innovative sports gear. Explore dynamic features and seamless functionality designed to enhance your shopping experience.'
        />
        <ProjectCard
          url='https://what-to-eat-nu.vercel.app'
          src='/What-to-eat.png'
          title='What to eat website using React'
          description='Welcome to our healthy food website, where wellness meets convenience. Dive into a virtual marketplace of fresh, organic ingredients and chef-curated meal plans. Our intuitive interface makes finding nutritious options a breeze, while robust features ensure seamless browsing and easy checkout.'
        />
        <ProjectCard
          url='https://bonvoyage-xi.vercel.app'
          src='/BonVoyage.png'
          title='Travel agency website using React js'
          description='This Threads clone is a social media web application built using Next.js and Tailwind CSS, designed to replicate the core functionalities and user experience of the popular Threads platform.'
        />
        <ProjectCard
          url='https://autofusion.vercel.app'
          src='/AutoFusion.png'
          title='Car corporate profile clone using React js'
          description='Explore our corporate profile website, crafted with React and Tailwind CSS for a streamlined experience. Delve into our legacy of automotive excellence, showcasing innovation and sustainability at every turn. Navigate seamlessly through our latest models, company milestones, and industry leadership.'
        />
        <ProjectCard
          url='https://anime-neon-five.vercel.app/'
          src='/Anime-Vault.png'
          title='Anime movies scroll website using Next js'
          description='Dive into a vibrant world of anime with our website created using Next.js and Tailwind CSS. Immerse yourself in a collection of captivating series and films, curated for enthusiasts and newcomers alike. Explore seamless navigation and dynamic visuals that bring your favorite characters to life.'
        />
        <ProjectCard
          url='https://price-tracking-two.vercel.app/'
          src='/Price-Track.png'
          title='Price Tracking from amazon using Next js'
          description='tay ahead of the market with our price tracking website, built with Next.js and Tailwind CSS. Effortlessly monitor price changes and trends across various products with our intuitive and responsive interface. Enjoy real-time updates, personalized alerts, and comprehensive analytics.'
        />
      </div>
    </div>
  );
};

export default Projects;
