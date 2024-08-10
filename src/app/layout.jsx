import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserProvider from "./contexts/UserProvider";
import { Poppins } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Khadija Tut Tahera",
  description: "Khadija Tut Tahera's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <UserProvider>
          <div className="flex flex-col lg:flex-row justify-between items-start py-8 px-4 lg:px-12 text-white">
            <div className="lg:w-[20%] fixed right-2 top-2 lg:left-8 lg:top-8 z-50">
              <Header />
            </div>
            <div className="flex flex-col gap-12 w-full lg:w-[75%] min-h-screen lg:ml-auto">
              <div className="flex items-center justify-between">
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
              {children}
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
