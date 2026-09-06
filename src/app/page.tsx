import Image from "next/image"
import styles from "./ui/page.module.css"
import TarjetaInfo from "@/app/components/intro"; // El @ indica que comienza a buscar dentro de  la carpeta que esta todo el poroyecto osea APUNTES comenzara a buscar 

export default function Home() {
  return (
    <div >
      <main >
        <TarjetaInfo  // Nombre de la tarjeta 
        titulo="¡ MIS APUNTES :O !"  // Son los parametros
        subtitulo="APUNTES HECHOS CON NEXT JS "
        texto="Aquí encontrarás todos mis apuntes organizados(mas o menos :/) y actualizados que voy creando durante mi aprendizaje durante el ciclo."
      >
        <Image
  src="/gallardo.jpg"   // ruta dentro de /public
  alt="Descripción de la imagen"
  width={500}
  height={300}
  priority /*Decirle a next js que cargue lo mas rapida esta imagen  */
/>
        </TarjetaInfo>
        </main>
    </div>
  );
}
