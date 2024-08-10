"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";

const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

const Expertise = () => {
  const [expertiseData, setExpertiseData] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const url = "/api/expertise-route";
      const res = await fetch(url);
      const skillsData = await res.json();
      setExpertiseData(skillsData.skills);
    };

    fetchSkills();
  }, []);

  return (
    <>
      <div className="">
        <h1
          className={`text-2xl ${poppins.className}`}
        >
          Expertise
        </h1>
        <div className="h-[2px] rounded-lg bg-sky-600 mt-2 w-16"></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-8 mt-8">
          {expertiseData.map((data) => {
            return (
                <div key={data?._id} className="flex items-center gap-3 rounded-lg bg-white opacity-90 text-black px-4 py-2 h-14">
                  <Image
                    className="rounded-lg h-10 w-10"
                    src={data.image}
                    alt="Icon"
                    width={900}
                    height={900}
                  />
                  <h1 className="font-semibold">{data?.title}</h1>
                </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Expertise;