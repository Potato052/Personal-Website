import Image from "next/image";

const about = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div>
          <p>About</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repudiandae ipsam vitae, atque saepe dolor sapiente! Deleniti repudiandae numquam, cum veritatis suscipit error, non libero labore, saepe harum a accusamus.</p>
        </div>
        <div>
          <p>Skills</p>
          <div className="flex flex-row flex-wrap ">
            <div className="mr-4">
              <Image src="/icons/html.svg" alt="/" width={60} height={50} />
            </div>
            <div className="mr-4">
              <Image src="/icons/css.svg" alt="/" width={60} height={50} />
            </div>
            <div className="mr-4">
              <Image src="/icons/javascript.svg" alt="/" width={60} height={40} className="max-h-[55px] mt-[2px]"/>
            </div>
            <div className="mr-4">
              <Image src="/icons/typescript.svg" alt="/" width={60} height={50} />
            </div>
            <div className="mr-4">
              <Image src="/icons/react.svg" alt="/" width={60} height={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
