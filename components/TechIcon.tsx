import Image from "next/image";

interface TechIconProps {
  name: string;
  file: string;
  css?: string;
}

const TechIcon = ({ name, file, css }: TechIconProps) => {
  return (
    <div className="group relative mr-1 p-1 md:mr-6">
      <Image
        src={`/icons/${file}`}
        alt={name}
        width={60}
        height={40}
        className={css}
      />
      <span className="absolute left-1/2 z-[100] mx-auto -translate-x-1/2 rounded-md bg-slate-200 px-1 text-sm font-semibold text-black opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
        {name}
      </span>
      <div className=""></div>
    </div>
  );
};

export default TechIcon;
