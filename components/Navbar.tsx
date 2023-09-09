"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="fixed z-[100] h-20 w-full bg-white">
      <div className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
        <Image src="/logo.jpg" alt="/" width={60} height={50} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 hover:border-b">About</li>
            </Link>
            <Link href="/#project">
              <li className="ml-10 hover:border-b">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 hover:border-b">Contact</li>
            </Link>
          </ul>
          <div onClick={() => setNav(!nav)} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div
          className={
            nav
              ? " fixed left-0 top-0 h-full w-full bg-white p-10 duration-500 ease-in"
              : "fixed left-[-100%] top-0 p-10 duration-500 ease-in"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src="/logo.jpg" width="87" height="35" alt="/" />
              </Link>
              <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer rounded-full p-3"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-4 text-center">
            <ul className="mt-[25%] uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 font-bold">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 font-bold">
                  About
                </li>
              </Link>
              <Link href="/#project">
                <li onClick={() => setNav(false)} className="py-4 font-bold">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 font-bold">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
