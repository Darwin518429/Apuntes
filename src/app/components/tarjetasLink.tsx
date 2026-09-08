import { ReactNode } from 'react'
import styles from "@/app/ui/page.module.css"
import Image from "next/image"
interface TarjetaInfoProps { // Esto te sirve para  especiuficar que proeidades debe de tener 
    titulo: string;
    subtitulo?: string; // El '?' significa que es opcional, por si solo quieres título
    texto: string;      // Este es obligatorio
    img?: string;
    priority?: boolean;
    children?: ReactNode;
    link?: string;
}
// Saldra un aviso que  la imagen mas  grande puede afectar el rendimiento de la web hya que tratarlo
export default function TarjetaVertical({ titulo, subtitulo, texto, img, priority = false, children,link }: TarjetaInfoProps) {
    return (
        <div className={styles.TarjetaVertical}>
            {img && (<Image
                src={img}   // ruta dentro de /public
                alt="imagen"
                className={styles.imagen}
                width={250}
                height={250}
                priority={priority}/*Decirle a next js que cargue lo mas rapida quep uede esta imagen  */
                
            />)}

            <h2>{titulo}</h2>
            {subtitulo && (<p>{subtitulo}</p>)}
            <p>{texto}</p>
            
          { link&&( <a href={link}>
                Entrar
            </a>)}
            <hr />
            {children}
        </div>
    );
}