import styles from "@/app/ui/componente.module.css"
interface despProp{
txt: string;
clic: () => void; // Le especifcamos que se dbe de introducir una funcion que no devleve nada 
}
export default function desplegable({txt,clic}:despProp){
    return(<div>
        <button className={styles.boton} onClick={clic}>{txt}</button>
    </div>)
}