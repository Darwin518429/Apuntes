// components/Dropdown.jsx
'use client'
import styles from "@/app/ui/componente.module.css"
import { useState } from 'react'
import BotonDesplegable from '@/app/components/menuItem/botonDesplegable'
import BotonOpciones from '@/app/components/menuItem/botonOpciones'

export interface Formato{
    txt:string
    url:string
};
 
interface DropdownProp{
    txt:string,
    opciones:Formato[];
}




export default function Dropdown({txt,opciones}:DropdownProp) {
  const [open, setOpen] = useState(false)

  return (
  <div className={styles.contenedor}>
      <BotonDesplegable txt={txt} clic={() => setOpen(!open)} />
      {open && <BotonOpciones opcion={opciones} />}
    </div>
  )
}