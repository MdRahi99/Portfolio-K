import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserProvider from "./contexts/UserProvider";

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
          <div className="flex flex-col lg:flex-row justify-between items-start py-8 px-4 lg:px-12 text-white">
            <div className="lg:w-[20%] fixed right-2 top-2 lg:left-8 lg:top-8 z-50">
              <Header />
            </div>
            <div className="flex flex-col gap-12 w-full lg:w-[75%] min-h-screen lg:ml-auto">
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
