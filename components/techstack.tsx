interface Props {
  tech: string;
}

const Techstack = ({ tech }: Props) => {
  return (
    <button className="mr-2 -translate-x-1">
      <p className="mb-2 rounded-full bg-neutral-900 px-2.5 py-1 text-sm capitalize text-white shadow shadow-black/60">
        {tech}
      </p>
    </button>
  );
};

export default Techstack;
