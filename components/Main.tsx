import Image from "next/image";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div className="">
          <img
            src="/mf-avatar.svg"
            alt="/"
            className="flex justify-center items-center ml-[150px]"
          />
          <h1 className="py-4 text-gray-700 text-6xl font-bold">
            Hi I'm <span className="text-blue-500">Nigel</span>
          </h1>
          <ul className="dynamic-txts text-5xl font-bold text-gray-700">
            <li>
              <span>A Software Engineer</span>
            </li>
            <li>
              <span>A Full Stack Developer</span>
            </li>
            <li>
              <span>A Problem Solver</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
