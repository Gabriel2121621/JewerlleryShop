// app/layout.tsx
import { ThemeModeScript } from "flowbite-react";
import { Geist, Geist_Mono } from "next/font/google";
import Profile from "./components/profile";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout() {
  return (
    <html>
      <body>
        <ThemeModeScript />
        {/* Navbar */}
        <header >
          <nav className="bg-purple-950 ">
          <div className="flex justify-between items-center p-4">
            <div className="max-w-screen-xl flex flex-row items-center justify-between ">
              <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse ">
                <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Serendipia</span>
              </a>
            </div>

            <div className="">
                <ul className="font-medium flex flex-col items-center gap-[4vw] lg:flex-row text-lg">
                  <li>
                    <a href="/newin" className="hover:scale-125 hover:contrast-125 transition-transform text-white " aria-current="page">New In</a>
                  </li>
                  <li>
                    <a href="/catalog" className="transform hover:scale-125 transition  text-white " aria-current="page">Catalog</a>
                  </li>
                  <li>
                    <a href="/outlet" className="transform hover:scale-125 transition text-white " aria-current="page">Outlet</a>
                  </li>
                </ul>
            </div>

            <Profile className="hover:scale-125 hover:contrast-125 transition-transform"/>
</div>
          </nav>
        </header>
      </body>
    </html>
  );
}
