import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  image: string;
  link: string;
}

const ProjectItem = ({ title, image, link }: Project) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-[#141c3a] transition ease-in-out duration-300">
      <Image
        className="rounded-xl group-hover:opacity-0"
        src={image}
        alt="/"
        width={500}
        height={300}
      />
      <div className="hidden group-hover:block absolute">
        <h3 className="text-2xl text-white text-center font-bold">
          {title}
        </h3>
        <Link href={link}>
          <p className="text-center py-1 rounded-lg mt-2 bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

