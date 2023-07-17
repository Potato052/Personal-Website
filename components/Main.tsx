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
            Hi I'm <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">Nigel</span>
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
          <div className="absolute top-[85vh] sm:top-[100vh] sm:left-[31vw] max-w-2xl">
            <p className="font-bold text-xl text-wrap">
              The only way to do great work is to love what you do. If you haven't
              found it yet, keep looking. Don't settle. As with all matters of the
              heart, you'll know when you find it.
            </p>
            <p className="font-bold">Steve Jobs</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
