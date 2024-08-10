import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

const Contact = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="">
          <h1
            className={`text-2xl text-left ${poppins.className}`}
          >
            Contact
          </h1>
          <div className="h-[2px] rounded-lg bg-sky-600 mt-2 w-16"></div>
          <p className="text-sm opacity-80 mt-3 lg:w-[60%]">
            Feel free to get in touch with me. I am always open to discussing
            New Projects & Creative ideas
          </p>
        </div>

        <form className="flex flex-col gap-8 w-full lg:w-2/3">
          <div className="flex items-center justify-between gap-8">
            <input
              type="text"
              placeholder="Name"
              className={`input input-bordered focus:outline-none text-white w-full rounded-lg ${poppins.className}`}
            />
            <input
              type="email"
              placeholder="Email"
              className={`input input-bordered focus:outline-none text-white w-full rounded-lg ${poppins.className}`}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className={`input input-bordered focus:outline-none text-white w-full rounded-lg ${poppins.className}`}
          />
          <textarea
            className={`textarea textarea-bordered focus:outline-none text-white w-full rounded-lg ${poppins.className}`}
            placeholder="Message"
          ></textarea>
          <input
            type="submit"
            className={`px-4 py-2 bg-sky-600 focus:outline-none text-white hover:bg-sky-500 w-24 rounded-lg ${poppins.className}`}
          />
        </form>
      </div>
    </>
  );
};

export default Contact;
