import Image from "next/image";

const Main = () => {
  return (
    <div className="h-screen w-full text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center">
        <div className="">
          <Image
            src="/mf-avatar.svg"
            alt="/"
            className="ml-[14%] flex items-center justify-center rounded-full md:ml-[28%]"
            width={217}
            height={237}
          />
          <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-4 text-5xl font-bold text-transparent sm:text-6xl">
            Nigel Tan
          </h1>
          <h2 className="text-3xl font-bold text-gray-700 sm:hidden">
            Full Stack Developer
          </h2>
          <ul className="dynamic-txts hidden text-5xl font-bold text-gray-700 sm:block">
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
          <div className="absolute left-[1%] top-[90%] px-3 sm:left-[33%] sm:px-0 md:left-[36%]">
            <p className="text-wrap text-xl font-bold">
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
