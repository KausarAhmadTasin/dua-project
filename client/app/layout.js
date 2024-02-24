import { Inter } from "next/font/google";
import "./globals.css";
import NavAside from "@/components/NavAside";
import NavTop from "@/components/NavTop";
import Settings from "@/components/Settings";
import Duabarc from "@/components/duabar/Duabar";
// import Allduas from "@/components/allduas/Allduas";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dua App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200 ">
        <div className="flex">
          <NavAside />
          <div className="mt-3">
            <NavTop />
            {/* <Allduas /> */}
            <div className="flex justify-between">
              {" "}
              <Duabarc />
              {children}
              <Settings />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}