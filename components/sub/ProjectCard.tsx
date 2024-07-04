import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <Link href={url} className="relative overflow-hidden rounded-lg border border-[#2A0E61] cursor-pointer z-40 shadow-md transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg ">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-cover"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
