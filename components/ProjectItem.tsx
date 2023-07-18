import Image from "next/image";
import Link from "next/link";
import Techstack from "./techstack";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  techs: string[];
}

const ProjectItem = ({ title, description, image, link, techs }: Project) => {
  return (
    <a href={link} target="_blank" className="group relative cursor-pointer items-center justify-center rounded-lg overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 max-w-[596px] max-h-[396px]">
      <div className="h-full w-full object-cover transition-transform duration-500 group">
        <Image
          className="rounded-xl w-full h-full object-cover object-center"
          src={image}
          alt={title}
          width={500}
          height={300}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent group-hover:from-transparent group-hover:via-black/30 group-hover:to-black/70"></div>
      <div className="absolute bottom-0 left-0 flex translate-y-[100%] flex-col items-start px-9 text-left transition-all duration-500 group-hover:translate-y-0 mb-1">
        <h3 className="text-2xl text-white text-left font-bold">{title}</h3>
        <p className="mb-1 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
        <div className="flex flex-row flex-wrap">
          {techs?.map((tech) => (
            <Techstack key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
