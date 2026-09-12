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
  const tieneHijos = item.subopciones && item.subopciones.length > 0 // La primera condicion me sirve apra comrrovar si se ha inserta la propiedad subopciones y lo otro es par acomprobar si hay mas de un elemento,

//En caso de no  introducir solo insertar un Link 
  if (!tieneHijos) {
    return (
      <li className={styles.item}>
        <Link href={item.url} className={styles.link}>{item.txt}</Link>
      </li>
    )
  }

  return (
    <li className={styles.item}>
      <button onClick={() => setOpen(!open)} className={`${styles.link} ${styles.boton}`}>
        {item.txt}
        <span className={`${styles.flecha} ${open ? styles.flechaAbajo : ''}`}>▶</span>
      </button>
      {open && (
        <ul className={styles.submenu}>
          {item.subopciones!.map((sub) => (
            <ItemMenu key={sub.txt} item={sub} />
          ))}
        </ul>
      )}
    </li>
  )
}