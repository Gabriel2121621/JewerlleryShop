// app/layout.tsx
import { ThemeModeScript } from "flowbite-react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout() {
  return (
    <html>
      <body>
        <ThemeModeScript />
        {/* Navbar */}
        <header className="bg-purple-950 ">
          <nav className="flex justify-between items-center w-[92%]">
            <div className="max-w-screen-xl flex flex-row items-center justify-between p-4 ">
              <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Serendipia</span>
              </a>
            </div>
            <div className="">
                <ul className="font-medium flex items-center gap-[4vw]">
                  <li>
                    <a href="/newin" className="transform hover:scale-125 transition text-white " aria-current="page">New In</a>
                  </li>
                  <li>
                    <a href="/about" className="hover:scale-110 transition-transform text-white " aria-current="page">Catalog</a>
                  </li>
                  <li>
                    <a href="/about" className="hover:scale-110 transition-transform text-white " aria-current="page">Outlet</a>
                  </li>
                </ul>
              </div>
              
          </nav>
        </header>
      </body>
    </html>
  );
}
