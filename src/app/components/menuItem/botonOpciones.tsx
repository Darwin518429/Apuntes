import styles from "@/app/ui/componente.module.css"
import Link from 'next/link'
import {Formato} from "@/app/components/menuItem/despegableFinal"
import ItemMenu from "./itemMenu"
import { Opcionboton } from "@/types"
/*interface opcionProp{
opcion:Formato[];
}*/
//AQUI DONDE LISTAREMOS LAS OPCIONES DEL SUBMENU
export default function desplegableOpcion({opcion}:Opcionboton){
    return(
      <ul className={styles.panel}>
      {opcion.map((opt) => (
        <ItemMenu key={opt.txt} item={opt} />
      ))}
    </ul>
)
}