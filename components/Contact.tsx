const Contact = () => {
  return (
    <section id="contact" className="text-center bg-neutral-900 py-10">
      <div className="mx-auto max-w-[700px] md:px-3">
        <h2 className="mb-12 text-3xl font-bold text-white">
          Let&apos;s work together
        </h2>
        <form
          className="text-white"
          action="https://www.google.com/"
          method="GET"
        >
          <div className="relative mb-6">
            <input
              type="text"
              name="name"
              required
              className="peer min-h-[auto] w-full border-b border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
            />
            <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary  motion-reduce:transition-none">
              Name
            </label>
          </div>
          <div className="relative mb-5">
            <input
              type="text"
              name="email"
              required
              className="peer min-h-[auto] w-full border-b border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none"
            />
            <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none">
              Email
            </label>
          </div>
          <div className="flex flex-col mb-5">
            <label className="py-2 items-start flex ml-3 truncate pt-[0.37rem] leading-[1.6]">
              Message
            </label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300 bg-transparent"
              rows={5}
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
