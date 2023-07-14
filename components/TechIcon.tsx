import Image from "next/image";

interface TechIconProps {
    name: string;
    file: string;
    css?: string;
}

const TechIcon = ({ name, file, css}: TechIconProps) => {
    return (
        <div className="mr-6 group relative">
        <Image
          src={`/icons/${file}`}
          alt={name}
          width={60}
          height={40}
          className={css}
        />
        <span className="group-hover:opacity-100 transition-opacity shadow-xl px-1 text-sm text-black rounded-md absolute left-1/2 -translate-x-1/2 opacity-0 mx-auto font-semibold">
          {name}
        </span>
      </div>
    );
}

export default TechIcon;