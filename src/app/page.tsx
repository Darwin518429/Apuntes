import Image from "next/image";
import styles from "./ui/page.module.css"
import TarjetaInfo from "@/app/components/intro"; // El @ indica que comienza a buscar dentro de  la carpeta que esta todo el poroyecto osea APUNTES comenzara a buscar 

export default function Home() {
  return (
    <div >
      <main >
        <TarjetaInfo  // Nombre de la tarjeta 
        titulo="¡Hola, futuro programador!"  // Son los parametros
        subtitulo="Este es tu espacio centralizado de estudio."
        texto="Aquí encontrarás todos los apuntes organizados y actualizados que voy creando durante mi aprendizaje de Next.js, React y el ecosistema frontend. He utilizado el App Router para estructurar todo de forma intuitiva. ¡Espero que te sirvan de guía tanto como a mí crearlos!"
        img="/file.svg"
      />
        </main>
    </div>
  );
}
