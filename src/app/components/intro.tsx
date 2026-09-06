import { ReactNode } from 'react'
import styles from "@/app/ui/page.module.css"
interface TarjetaInfoProps { // Esto te sirve para  especiuficar que proeidades debe de tener 
  titulo: string;
  subtitulo?: string; // El '?' significa que es opcional, por si solo quieres título
  texto: string;      // Este es obligatorio
  children?: ReactNode;
}

export default function TarjetaInfoHorizontal({ titulo, subtitulo, texto, children }: TarjetaInfoProps) {
  return (
    <div className={styles.tarjeta}>
     <div>
      <h2>{titulo}</h2>
      {subtitulo && (<p>{subtitulo}</p>)}
      <p>{texto}</p>
      </div>
      {children}
    </div>
  );
}