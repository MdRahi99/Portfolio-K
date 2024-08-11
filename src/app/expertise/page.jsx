import { Poppins } from "next/font/google";
import Skills from "../components/Skills/Skills";

const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});

const Expertise = ({ skills }) => {
  return (
    <div>
      <Skills skills={skills} poppins={poppins} />
    </div>
  );
};

export default Expertise;
