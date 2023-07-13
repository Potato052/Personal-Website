const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div className="grid grid-cols-2">
          <div className="mx-auto">This is the 3D object</div>

          <div className="text-left">
            <h1 className="py-4 uppercase text-7xl sm:text-5xl md:text-6xl">
              Nigel Tan
            </h1>
            <ul className="dynamic-txts text-5xl">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
