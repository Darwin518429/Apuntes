import { ReactNode } from 'react'
import styles from "@/app/ui/componente.module.css"
interface TarjetaInfoProps { // Esto te sirve para  especiuficar que proeidades debe de tener 
  
 children?: ReactNode;
  
}
// Saldra un aviso que  la imagen mas  grande puede afectar el rendimiento de la web hya que tratarlo
export default function Agruparl({children }: TarjetaInfoProps) {
  return (
    <div className={styles.agruparHorizontal}>
     {children}
    </div>
  );
}