"use client";
import { Preahvihear, Poppins } from "next/font/google";
import Image from "next/image";
import logo from "../../../public/banner_logo.png";
import Link from "next/link";

const preahvihear = Preahvihear({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Banner = ({resume, profile}) => {

  const {name, designation, image, description} = profile;
  
  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-900 to-sky-900 rounded-lg items-center gap-8 p-8">
      <div className="flex items-center justify-between w-full mb-4">
        <Link
          href="/"
          className="p-2 rounded-tl-xl rounded-br-xl border-[3px] w-11 h-11 hidden lg:flex items-center justify-center"
        >
          <h1 className="font-medium text-2xl">K</h1>
        </Link>
        <Link
          href={resume?.url}
          target="_blank"
          className={`hidden lg:flex px-4 text-sm py-2 justify-center border-2 rounded-lg hover:bg-sky-600 hover:border-sky-600 border-white text-white ${poppins.className}`}
        >
          Download Resume
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="flex flex-col gap-4">
            <h1 className={`${preahvihear.className} text-3xl`}>
              {name}
            </h1>
            <div className="flex items-center gap-2">
              <h3 className={`${poppins.className} text-lg opacity-90`}>
                {designation}
              </h3>
              <Image
                className=""
                src={logo}
                alt="Banner Logo"
                height="48"
                width="24"
              />
            </div>
            <p
              className={`${poppins.className} w-full lg:w-4/5 text-[#D3D6DA] text-justify`}
            >
             {description}
            </p>
          </div>
          <div className="w-full flex items-center gap-4 lg:gap-6 mt-10">
            <Link
              href="/contact"
              className={`flex p-2 rounded-lg w-full lg:w-1/3 justify-center bg-sky-600 hover:bg-sky-700 text-white ${poppins.className}`}
            >
              Hire Me
            </Link>

            <Link
              href={resume?.url}
              target="_blank"
              className={`lg:hidden flex px-4 text-sm py-2 w-full justify-center border-2 rounded-lg hover:bg-sky-600 hover:border-sky-600 border-white text-white ${poppins.className}`}
            >
              Resume
            </Link>
          </div>
        </div>

        <div className="lg:flex col-span-1 justify-end hidden">
          <Image
            src={image}
            alt="logo"
            width={300}
            height={300}
            className="rounded-lg border"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
