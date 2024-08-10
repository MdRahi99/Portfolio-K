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
      <body className={`${inter.className}`}>
        <UserProvider>
          <div className="flex justify-between items-start py-8 px-4 lg:px-12 text-white">
            <div className="flex flex-col gap-12 w-full lg:w-8/12 min-h-screen">
              <Link
                href="/"
                className="p-2 rounded-tl-xl rounded-br-xl border-[3px] w-11 h-11 flex items-center justify-center"
              >
                <h1 className="font-medium text-2xl">K</h1>
              </Link>
              {children}
            </div>
            <div className="lg:w-3/12 fixed right-2 lg:right-8 top-2 lg:top-8 z-50">
              <Header />
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
