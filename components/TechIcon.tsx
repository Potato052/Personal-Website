import Image from "next/image";

interface TechIconProps {
  name: string;
  file: string;
  css?: string;
}

const TechIcon = ({ name, file, css }: TechIconProps) => {
  return (
    <div className="group relative md:mr-6 p-1 mr-1">
      <Image
        src={`/icons/${file}`}
        alt={name}
        width={60}
        height={40}
        className={css}
      />
      <span className="group-hover:opacity-100 bg-slate-200 transition-opacity shadow-xl px-1 text-sm text-black rounded-md absolute left-1/2 -translate-x-1/2 opacity-0 mx-auto font-semibold z-[100]">
        {name}
      </span>
    </div>
  );
};

export default TechIcon;
