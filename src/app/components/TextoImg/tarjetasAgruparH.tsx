//import { ReactNode } from 'react'
import styles from "@/app/ui/componente.module.css"
import { ContenedorH } from '@/types';
/*interface TarjetaInfoProps { // Esto te sirve para  especiuficar que proeidades debe de tener 
 children?: ReactNode;
}*/
// Saldra un aviso que  la imagen mas  grande puede afectar el rendimiento de la web hya que tratarlo
export default function Agruparl({children }: ContenedorH) {
  return (
    <div className={styles.agruparHorizontal}>
     {children}
    </div>
  );
}