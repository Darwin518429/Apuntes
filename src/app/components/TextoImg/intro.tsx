import { ReactNode } from 'react'
import styles from "@/app/ui/componente.module.css"
import Image from "next/image"
import {TarjetaInfo} from "@/types"
/*interface TarjetaInfoProps { // Esto te sirve para  especiuficar que proeidades debe de tener 
  titulo: string;
  subtitulo?: string; // El '?' significa que es opcional, por si solo quieres título
  texto: string;      // Este es obligatorio
  img?: string;
  priority?:boolean;
  children?: ReactNode;
  Width?:number;
  Height?: number;
  txtImg?:string
}*/
// Saldra un aviso que  la imagen mas  grande puede afectar el rendimiento de la web hya que tratarlo
export default function TarjetaInfoHorizontal({ titulo, subtitulo, texto,img,priority = false,  children,txtImg }: TarjetaInfo) {
  return (
    <div className={styles.tarjeta}>
     <div>
      <h2>{titulo}</h2>
      {subtitulo && (<p>{subtitulo}</p>)}
      <p>{texto}</p>
      <hr/>
      {children}
      </div>
   
             { img && (
              
      <figure className={styles.imagen_mediano}>
        <Image
        src={img}   // ruta dentro de /public
        alt="imagen"
        fill
        sizes="100vw"
        priority  = {priority}/*Decirle a next js que cargue lo mas rapida quep uede esta imagen  */
      />
      <figcaption>{txtImg}</figcaption>
      </figure>
              )
      }
      
    </div>
  );
}