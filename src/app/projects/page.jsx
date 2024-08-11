import React from "react";
import Projects from "../components/Projects/Projects";
import { Poppins } from "next/font/google";
import { getProjects } from "../hooks/getProjects";

const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

const page = async() => {
  const projects = await getProjects();
  return (
    <div>
      <Projects projects={projects} poppins={poppins} />
    </div>
  );
};

export default page;
