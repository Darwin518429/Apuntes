'use client'
import { useState } from 'react'
import styles from "@/app/ui/componente.module.css"
interface despProp{
txt: string;
clic: () => void; // Le especifcamos que se dbe de introducir una funcion que no devleve nada 
}
//BOTON DEL DESPEGBLE 
//Repreental boton donde mostrar los submenus 
export default function Desplegable({txt,clic}:despProp){
  const [open, setOpen] = useState(false)
    return( 
      <button onClick={() =>{ // Es una funcion flecha creada 
        clic()  
        setOpen(!open)
      }} className={styles.boton}>{txt} <span className={`${styles.flecha} ${open ? styles.flechaAbajo : ''}`}>▲</span> </button>
    )
}