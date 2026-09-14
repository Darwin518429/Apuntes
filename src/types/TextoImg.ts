import { ReactNode } from 'react'
//Tarjeta horizontal texto(NO <p></p> con imagen
export interface TarjetaInfo { // Esto te sirve para  especiuficar que proeidades debe de tener 
  titulo: string;
  subtitulo?: string; // El '?' significa que es opcional, por si solo quieres título
  texto: string;      // Este es obligatorio
  img?: string;
  priority?:boolean;
  children?: ReactNode;
  //Width?:number;
  //Height?: number;
  txtImg?:string
}

//COntenedor de fila Horizontal 
export interface ContenedorH { // Esto te sirve para  especiuficar que proeidades debe de tener 
 children?: ReactNode;
}

//Tarjeta con link vertical 
export interface TarjetaLinkv { // Esto te sirve para  especiuficar que proeidades debe de tener 
    titulo: string;
    subtitulo?: string; // El '?' significa que es opcional, por si solo quieres título
    texto: string;      // Este es obligatorio
    img?: string;
    priority?: boolean;
    children?: ReactNode;
    link?: string;
}

//Tarjeta horizontal texto con  <p></p> con imagen
export interface TarjetaInfop { // Esto te sirve para  especiuficar que proeidades debe de tener 
  titulo: string;
  subtitulo?: string; // El '?' significa que es opcional, por si solo quieres título

parrafo: React.ReactElement<'p'>  //Especificar el tipo de <p>
  img?: string;
  priority?:boolean;
  children?: ReactNode;
}
//Tarjeta que solo tien txt 
export interface TarjetaTxt{ 
txt: React.ReactElement<'p'>,
}
