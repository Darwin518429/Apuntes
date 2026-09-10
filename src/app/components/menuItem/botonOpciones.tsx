import styles from "@/app/ui/componente.module.css"
import Link from 'next/link'
import {Formato} from "@/app/components/menuItem/despegableFinal"
interface opcionProp{
opcion:Formato[];
}

export default function desplegableOpcion({opcion}:opcionProp){
    return(<div className={styles.menuFlotante}>
      <ul className={styles.lista}>
        {opcion.map((opt) => (
          <li key={opt.txt} className={styles.itemLista}>
            <Link href={opt.url}>{opt.txt}</Link>
          </li>
        ))}
      </ul>

    </div>)
}