import Image from "next/image";
import Link from "next/link";

const navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/logo.jpg" alt="/" width={60} height={50} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 hover:border-b">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 hover:border-b">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
