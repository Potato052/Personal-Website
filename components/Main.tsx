import Image from "next/image";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div className="">
          <Image
            src="/mf-avatar.svg"
            alt="/"
            className="flex justify-center items-center ml-[14%] md:ml-[28%]"
            width={217}
            height={237}
          />
          <h1 className="py-4 text-5xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
            Nigel Tan
          </h1>
          <h2 className="sm:hidden text-3xl font-bold text-gray-700">
            Full Stack Developer
          </h2>
          <ul className="hidden sm:block dynamic-txts text-5xl font-bold text-gray-700">
            <li>
              <span>Software Engineer</span>
            </li>
            <li>
              <span>Full Stack Developer</span>
            </li>
            <li>
              <span>Problem Solver</span>
            </li>
          </ul>
          <div className="absolute top-[90%] left-[1%] sm::left-[33%] px-3 sm:px-0">
            <p className="font-bold text-xl text-wrap">
              The only way to do great work is to love what you do.
            </p>
            <p className="font-bold">Steve Jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
