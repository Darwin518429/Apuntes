import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./ui/globals.css";
import {Formato} from  "@/app/components/menuItem/despegableFinal"
import Desplegable from "./components/menuItem/despegableFinal";
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

//OPCIONES
const MAS: Formato[] = [
  { txt: 'Opción 1', url: './opcion-1' },
  { txt: 'Opción 2', url: './opcion-2' },
  {
    txt: 'Herramientas',        //submenu
    url: '#',
    subopciones: [
      { txt: 'Sub 1', url: './sub-1' },
      { txt: 'Sub 2', url: './sub-2' },
    ],
  },
]
const PROGRAMACION: Formato[] =[
  { txt: 'Programacion', url: '/es/Programacion' },
  { txt: 'Introduccion', url: './opcion-2' },
  {
    txt: 'JavaScript',        //submenu
    url: '#',
    subopciones: [
      { txt: 'Strings', url: './sub-1' },
      { txt: 'Variables', url: './sub-2' },
        { txt: 'Sings', url: './sub-1' },
      { txt: 'Varbles', url: './sub-2' },
        { txt: 'Sngs', url: './sub-1' },
      { txt: 'Vailes', url: './sub-2' },
      { txt: 'Vles', url: './sub-2' },

    ],
  },  
];


const BD: Formato[] =[
  { txt: 'BD', url: '/es/bd' },
  { txt: 'Introduccion', url: '/opcion-2' },
  {
    txt: 'OTRO',        //submenu
    url: '#',
    subopciones: [
      { txt: 'Strings', url: './sub-1' },
      { txt: 'Variables', url: './sub-2' },
    ],
  },  
];


const MARCAS: Formato[] =[
  { txt: 'Programacion', url: './Programac' },
  { txt: 'Introduccion', url: './opcion-2' },
  {
    txt: 'JavaScript',        //submenu
    url: '#',
    subopciones: [
      { txt: 'Strings', url: './sub-1' },
      { txt: 'Variables', url: './sub-2' },
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
        <a href="/" > <h1>Darwin apuntes (Inicio)</h1> </a>
        <br/>
          <nav>
       <Desplegable txt="Base de datos" opciones={BD}></Desplegable>
        <Desplegable txt="Programacion" opciones={PROGRAMACION}/>
        <Desplegable txt="Marcas" opciones={MARCAS}/>
        <Desplegable txt="Mas" opciones={MAS}></Desplegable>
          </nav>
        </header>
        {children}
        </body>
    </html>
  );
}
