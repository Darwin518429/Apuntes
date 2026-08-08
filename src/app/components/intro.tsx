interface TarjetaInfoProps { // Esto te sirve para  especiuficar que proeidades debe de tener 
  titulo: string;
  subtitulo?: string; // El '?' significa que es opcional, por si solo quieres título
  texto: string;      // Este es obligatorio
}

export default function TarjetaInfo({ titulo, subtitulo, texto }: TarjetaInfoProps) {
  return (
    <div style={{
      // Estilos principales de la tarjeta
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "32px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      border: "1px solid #e2e8f0",
      
      // Detalle visual: una línea a la izquierda de color azul indigo
      borderLeft: "6px solid #4f46e5",
      
      // Un poco de margen para que no esté pegada a otras cosas
      margin: "24px 0",
      
      // Aseguramos que el texto no se desborde
      maxWidth: "100%",
    }}>
      {/* Área del Título e Introducción */}
      <div style={{ marginBottom: "20px" }}>
        
        {/* Título principal */}
        <h2 style={{
          margin: "0 0 8px 0",
          fontSize: "28px",
          fontWeight: "800", // Negrita fuerte
          color: "#1e293b",
          lineHeight: "1.2",
        }}>
          {titulo}
        </h2>

        {/* Subtítulo opcional (si se lo pasas) */}
        {subtitulo && (
          <p style={{
            margin: "0",
            fontSize: "18px",
            color: "#6366f1", // Un color indigo más claro para el subtítulo
            fontWeight: "500",
          }}>
            {subtitulo}
          </p>
        )}
      </div>

      {/* Línea divisoria sutil */}
      <hr style={{ border: "0", borderTop: "1px solid #e2e8f0", margin: "20px 0" }} />

      {/* Cuerpo de texto (la información) */}
      <div style={{
        fontSize: "16px",
        color: "#4b5563",
        lineHeight: "1.7", // Espaciado entre líneas para facilitar la lectura
      }}>
        <p style={{ margin: "0" }}>
          {texto}
        </p>
      </div>
    </div>
  );
}