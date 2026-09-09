import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./ui/globals.css";
// import "./ui/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pagina principal ",
  description: "Apuntes ",
};
// TSX es commo un jsx extension pa meter html 
//layout es coo una plantilla generixa que tendran t odas las paginas 
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header>
        <a href="./">  <h1>Darwin apuntes </h1> </a>
          <nav>
          <a href="/Programacion">Programacion  </a>
          <a href="/bd">Base de datos</a>
          <a href="/marcas"> Marcas </a>
          <a href="#">Mas  </a>
          </nav>
        </header>
        {children}
        </body>
    </html>
  );
}
