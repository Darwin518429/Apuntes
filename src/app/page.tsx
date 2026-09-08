import TarjetaVertical from "@/app/components/tarjetasLink";
import TarjetaInfo from "@/app/components/intro"; // El @ indica que comienza a buscar dentro de  la carpeta que esta todo el poroyecto osea APUNTES comenzara a buscar 

export default function Home() {
  return (
    <div>
      <main >
        <TarjetaInfo  // Nombre de la tarjeta 
        titulo="¡ MIS APUNTES :O !"  // Son los parametros
        subtitulo="APUNTES HECHOS CON NEXT JS "
        texto="Aquí encontrarás todos mis apuntes organizados(mas o menos :/) y actualizados que voy creando durante mi aprendizaje durante el ciclo."
        img="/gallardo.jpg"
        priority
      >
     <p>Contenido que tendra los apuntes:</p>
     <ul>
      <li>Base de datos</li>
      <li>Programacion</li>
      <li>Marcas</li>
     </ul>
        </TarjetaInfo>
      <TarjetaVertical    
      titulo="Programacion"  // Son los parametros
        texto="De momento hay Js y Java "
        img="/gallardo.jpg"
        link="#"
        >
        
      </TarjetaVertical>
        
        </main>
    </div>
  );
}
