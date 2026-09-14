import type { Viewport } from "next"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./ui/globals.css";
import {FormatOpcion} from "@/types"
import Desplegable from "./components/menuItem/despegableFinal";
import Link from "next/link";
// import "./ui/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// Equivale el header 
export const metadata: Metadata = {
  title: "MIS APUNTES",
  description: "Apuntes ",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}
//OPCIONES
const MAS: FormatOpcion[] = [
  { txt: 'Opción 1', url: './opcion-1' },
  { txt: 'Opción 2', url: './opcion-2' },
  {
    txt: 'SubOpcion',        //submenu
    url: '#',
    subopciones: [
      { txt: 'Sub 1', url: './sub-1' },
      { txt: 'Sub 2', url: './sub-2' },
    ],
  },
]
const PROGRAMACION: FormatOpcion[] = [
  { txt: 'Programacion', url: '/es/Programacion' },
  { txt: 'Introduccion', url: './opcion-2' },
  {
    txt: 'JavaScript',        //submenu
    url: '#',
    subopciones: [
      { txt: 'SUB1', url: './sub-1' },
      { txt: 'SUB2', url: './sub-2' },
      { txt: 'SUB3', url: './sub-1' },
      { txt: 'SUB4', url: './sub-2' },
      { txt: 'SUB5', url: './sub-1' },
      { txt: 'SUB6', url: './sub-2' },
      { txt: 'SUB7', url: './sub-2', subopciones:[ { txt: 'Vailes', url: './sub-2' }] },
    
    ],
  },
];


const BD: FormatOpcion[] = [
  { txt: 'Introduccion', url: '/es/bd' },
  { txt: 'Elegir un gestor bd', url: '/es/bd/gestoresBD' },
  {
    txt: 'OPCIONA',        //submenu
    url: '#',
    subopciones: [
      { txt: 'OPCIONB', url: './sub-1' },
      { txt: 'OPCIONC', url: './sub-2' },
    ],
  },
];


const MARCAS: FormatOpcion[] = [
  { txt: 'mARCAS', url: './soon' },
  { txt: 'Introduccion', url: './opcion-2' },
  {
    txt: 'JavaScript',        //submenu
    url: '#',
    subopciones: [
      { txt: 'Markdown', url: './sub-1' },
      { txt: 'Html', url: './sub-2' },
    ],
  },
];

// TSX es commo un jsx extension pa meter html 
//layout es coo una plantilla generixa que tendran t odas las paginas 
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header>
          <Link href="/"><h1>Darwin apuntes (Inicio)</h1></Link>
          <br />
          <nav>
            <Desplegable txt="Base de datos" opciones={BD}></Desplegable>
            <Desplegable txt="Programacion" opciones={PROGRAMACION} />
            <Desplegable txt="Marcas" opciones={MARCAS} />
            <Desplegable txt="Mas" opciones={MAS}></Desplegable>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
