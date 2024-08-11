"use client";
import { Preahvihear, Poppins } from "next/font/google";
import Image from "next/image";
import logo from "../../../public/banner_logo.png";
import Link from "next/link";
import profileLogo from "../../../public/logo.jpg";

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

const handleDownload = () => {
  const cvUrl = "/path/to/your_cv.pdf";
  const downloadLink = document.createElement("a");
  downloadLink.href = cvUrl;
  downloadLink.download = "your_cv.pdf";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

const Banner = () => {
  return (
    <div className="flex flex-col bg-slate-800 rounded-lg items-center gap-8 p-8 mt-8 lg:mt-0">
      <div className="flex items-center justify-between w-full mb-4">
        <Link
          href="/"
          className="p-2 rounded-tl-xl rounded-br-xl border-[3px] w-11 h-11 flex items-center justify-center"
        >
          <h1 className="font-medium text-2xl">K</h1>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1O_siamb8s7LSZwxliPel93kM3xWI3MbM/view?fbclid=IwY2xjawEkcJpleHRuA2FlbQIxMAABHaeRTUEpwKQioy74RrSd61waWlQCltYs60uCNuG16zN3PLnZGLxFS2RmoA_aem_LAZxVMQCPPd08ifHui57yw"
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
              Khadija Tut Tahera
            </h1>
            <div className="flex items-center gap-2">
              <h3 className={`${poppins.className} text-lg opacity-90`}>
                UI/UX Designer
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
              className={`${poppins.className} w-full lg:w-2/3 text-[#D3D6DA] text-justify`}
            >
              Hey! I am Khadija Tut Tahera. Professional UI/UX designer. Expert
              in User Research, Visual design, Wireframing, Prototyping,
              High-Fidelity Design and collaboration with developers.
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
              href="https://drive.google.com/file/d/1O_siamb8s7LSZwxliPel93kM3xWI3MbM/view?fbclid=IwY2xjawEkcJpleHRuA2FlbQIxMAABHaeRTUEpwKQioy74RrSd61waWlQCltYs60uCNuG16zN3PLnZGLxFS2RmoA_aem_LAZxVMQCPPd08ifHui57yw"
              target="_blank"
              className={`lg:hidden flex px-4 text-sm py-2 w-full justify-center border-2 rounded-lg hover:bg-sky-600 hover:border-sky-600 border-white text-white ${poppins.className}`}
            >
              Resume
            </Link>
          </div>
        </div>

        <div className="lg:flex col-span-1 justify-end hidden">
          <Image
            src={profileLogo}
            alt="logo"
            width={260}
            height={260}
            className="rounded-lg border"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
