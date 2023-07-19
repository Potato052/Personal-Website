"use client";
import { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="text-center bg-neutral-900 py-10">
      <div className="mx-auto max-w-[700px] md:px-3">
        <h2 className="mb-6 text-3xl font-bold text-white">Contact Me</h2>
        <div className="flex items-center justify-center max-w-[330px] m-auto">
          <a
            href="https://www.linkedin.com/in/nigel-tan-a1808a250/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mr-5 rounded-full bg-white p-3 cursor-pointer hover:scale-110 ease-in duration-300 ">
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href="https://github.com/Potato052"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mr-5 rounded-full bg-white p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
          </a>
          <a href="/resume.pdf" target="_blank">
            <div className="rounded-full bg-white p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </a>
        </div>
        <form
          className="text-white"
          action="https://getform.io/f/0e4fad13-aa9e-4caa-8e63-0b1b494c9954"
          method="POST"
        >
          <div className="relative mb-6">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="peer min-h-[auto] w-full border-b border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
            />

            <label
              className={
                name
                  ? "-translate-y-[0.9rem] scale-[0.8] pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] motion-reduce:transition-none"
                  : "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] motion-reduce:transition-none"
              }
            >
              Name
            </label>
          </div>
          <div className="relative mb-5">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="peer min-h-[auto] w-full border-b border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
            />
            <label
              id="emailLabel"
              htmlFor="email"
              className={
                email
                  ? "-translate-y-[0.9rem] scale-[0.8] pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] motion-reduce:transition-none"
                  : "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] motion-reduce:transition-none"
              }
            >
              Email
            </label>
          </div>
          <div className="relative mb-5">
            <textarea
              className="peer min-h-[auto] w-full border-b border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
              rows={5}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <label
              id="messageLabel"
              htmlFor="message"
              className={
                message
                  ? "-translate-y-[0.9rem] scale-[0.8] pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] motion-reduce:transition-none"
                  : "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] motion-reduce:transition-none"
              }
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="mb-6 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
