import Image from "next/image"
interface TarjetaInfoProps { // Esto te sirve para  especiuficar que proeidades debe de tener 
  titulo: string;
  subtitulo?: string; // El '?' significa que es opcional, por si solo quieres título
  texto: string;      // Este es obligatorio
img?: string;
}

export default function TarjetaInfoHorizontal({ titulo, subtitulo, texto,img }: TarjetaInfoProps) {
  return (
    <div>
      <h2>{titulo}</h2>
      {subtitulo &&(<p>{subtitulo}</p>)}
<p>{texto}</p>
{img &&(<Image
  src={img}   // ruta dentro de /public
  alt="Descripción de la imagen"
  width={500}
  height={300}
/>)}
    </div>
  );
}