interface Props {
  tech: string;
}

const Techstack = ({ tech }: Props) => {
  return (
    <button className="-translate-x-1 mr-2">
      <p className="rounded-full bg-neutral-900 mb-2 px-2.5 py-1 text-sm capitalize text-white shadow shadow-black/60">
        {tech}
      </p>
    </button>
  );
};

export default Techstack;
