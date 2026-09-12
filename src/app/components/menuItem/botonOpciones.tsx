import styles from "@/app/ui/componente.module.css"
import Link from 'next/link'
import {Formato} from "@/app/components/menuItem/despegableFinal"
import ItemMenu from "./itemMenu"
interface opcionProp{
opcion:Formato[];
}
//AQUI DONDE LISTAREMOS LAS OPCIONES DEL SUBMENU
export default function desplegableOpcion({opcion}:opcionProp){
    return(
      <ul className={styles.panel}>
      {opcion.map((opt) => (
        <ItemMenu key={opt.txt} item={opt} />
      ))}
    </ul>
)
}