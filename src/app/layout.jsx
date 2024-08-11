import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserProvider from "./contexts/UserProvider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khadija Tut Tahera",
  description: "Khadija Tut Tahera's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-slate-900 to-sky-900`}
      >
        <UserProvider>
          <div className="flex flex-col max-w-[1500px] mx-auto lg:flex-row justify-between items-start py-0 pb-8 lg:py-8 text-white">
            <div className="lg:w-[20%] bg-sky-900 lg:bg-transparent px-4 py-1 flex items-center justify-between sticky top-0 lg:top-8 z-50 w-full">
              <Link
                href="/"
                className="p-2 rounded-tl-xl rounded-br-xl border-[3px] w-10 h-10 lg:hidden flex items-center justify-center"
              >
                <h1 className="font-medium text-2xl">K</h1>
              </Link>
              <Header />
            </div>
            <div className="flex flex-col px-4 gap-12 w-full lg:w-[77%] min-h-screen lg:ml-auto">
              {children}
            </div>
          </div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
