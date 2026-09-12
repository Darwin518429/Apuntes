// components/menuItem/itemMenu.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Formato } from './despegableFinal'
import styles from '@/app/ui/componente.module.css';

interface ItemMenuProp {
  item: Formato
}

export default function ItemMenu({ item }: ItemMenuProp) {
 
  const [open, setOpen] = useState(false)
  const tieneHijos = item.subopciones && item.subopciones.length > 0  // La primera condicion me sirve apra comrrovar si se ha inserta la propiedad subopciones y lo otro es par acomprobar si hay mas de un elemento,
  //const enlaceprincipal = !!item.mainurl;
//En caso de no  introducir solo insertar un Link 
  if (!tieneHijos ) {
    return (
      <li className={styles.item}>
        <Link href={item.url} className={styles.link}>{item.txt}</Link>
      </li>
    )
  }

  
//Encaso detenre + de una opcion listara el componente.
  return (
    <li className={styles.item}>
      <button onClick={() => setOpen(!open)} className={`${styles.link} ${styles.boton}`}>
        {item.txt}
        <span className={`${styles.flecha} ${open ? styles.flechaAbierta : ''}`}>▶</span>
      </button>
      {open && (
        <ul className={styles.submenu}>
          {item.subopciones!.map((sub) => ( // La parte donde poner subopciones! el ! aviso a ts que no nunca sera undefined
            <ItemMenu key={sub.txt} item={sub} />
          ))}
        </ul>
      )}
    </li>
  )
}