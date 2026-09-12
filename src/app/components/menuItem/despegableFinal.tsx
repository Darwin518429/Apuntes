// components/Dropdown.jsx
'use client'
import styles from "@/app/ui/componente.module.css"
import { useState } from 'react'
import BotonDesplegable from '@/app/components/menuItem/botonDesplegable'
import BotonOpciones from '@/app/components/menuItem/botonOpciones'
//AQUI ES DONDE  MONTAMOS EL DESPEGABLE 
export interface Formato{
    txt:string
    url:string
    subopciones?: Formato[]
};
 
interface DropdownProp{
    txt:string,
    opciones:Formato[];
}




export default function Dropdown({txt,opciones}:DropdownProp) {
  const [open, setOpen] = useState(false)

  return (
  <div className={styles.wrapper}>
      <BotonDesplegable txt={txt} clic={() => setOpen(!open)} />
          
      {open && <BotonOpciones opcion={opciones} />}
    </div>
  )
}