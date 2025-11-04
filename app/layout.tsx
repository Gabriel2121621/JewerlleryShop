import { Geist, Geist_Mono } from "next/font/google";
import Profile from "./components/profile";
import ClientLoader from "./components/ClientLoader";
import "./globals.css";

// 1. DEFINIR METADATOS
export const metadata = {
  title: "Serendipia - Jewerllery Shop",
  description: "Tu tienda de joyería online de alta calidad.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. RECIBIR LA PROP 'children'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased dark:bg-gray-900">
        <ClientLoader />
        {/* Navbar (Header) */}
        <header className="w-full bg-purple-950">
          <nav className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <span className="text-2xl font-semibold whitespace-nowrap text-white">
                  Serendipia
                </span>
              </a>
            </div>

            {/* Navigation Links */}
            <div>
              <ul className="flex flex-col items-center gap-[4vw] text-lg font-medium lg:flex-row">
                <li>
                  <a
                    href="/newin"
                    className="text-white transition-transform hover:scale-125 hover:contrast-125"
                    aria-current="page"
                  >
                    New In
                  </a>
                </li>
                <li>
                  <a
                    href="/categories"
                    className="transform text-white transition hover:scale-125"
                    aria-current="page"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="/outlet"
                    className="transform text-white transition hover:scale-125"
                    aria-current="page"
                  >
                    Outlet
                  </a>
                </li>
              </ul>
            </div>

            {/* Profile Icon */}
            <Profile className="transition-transform hover:scale-125 hover:contrast-125" />
          </nav>
        </header>
        {/* CONTENEDOR PRINCIPAL
          Aplicamos las MISMAS clases de contenedor aquí.
          'w-full' asegura que ocupe todo el ancho disponible (para centrarse).
          'max-w-screen-xl' limita el ancho para que coincida con el header.
          'mx-auto' lo centra.
          'p-4' (o p-8) añade espacio para que el contenido no toque los bordes.
        */}
        <main className="mx-auto w-full">{children}</main>
        <footer className="bg-purple-200 pt-12 text-purple-900">
          <div className="container mx-auto mb-8 text-center">
            <div className="text-lg font-bold">Serendipia Jewellery Shop</div>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div>
              <h4 className="mb-3 font-bold">HELP</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Payment Methods
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Frequently Asked
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-bold">SOCIAL</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-bold">MENU</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Home Page
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Catalog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Outlet
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 bg-purple-900 p-4 text-center text-xs text-purple-300">
            Serendipia Jewellery Shop | All Rights Reserved
          </div>
        </footer>
      </body>
    </html>
  );
}
