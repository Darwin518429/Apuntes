import Parragrafo from "@/app/components/TextoImg/txt_img"
export default function BasedeDatos() {
    return (<div>
        <h1> BASE DE DATOS</h1>
        <Parragrafo titulo="¿QUE ES?" parrafo={<p>Una base de datos es un grupo estructurado de datos relacionados entre ellos que se almacena en un gestor DB   y que puede consultarse y mantenerse. No es acumular datos, sino organizarlos con un propósito concreto, representando algún aspecto del mundo real y siendo útiles para un grupo de usuarios específico.
            Las bd pueden ser hechas/mantenidas manualmente o automatizada </p>}>
            <h2>Tipos de Base de datos</h2>
           <ul>
            <li>
             <strong>Bd Relacionales:</strong>Son muy utilizadas, almacena datos en tablas relacionasdas entre ellos,  utilizan para organizar filas y columnas tambien unas claves parea poder relacionar los datos entre ellos . 
                <br/> <br/>
                Este tipo de bd son escalables(a futuro sera facil de subir datos si que hay problemas) y flexibles (Adaptarse), pueden servir cmo por ejemplo(sistemas de gestión de inventario, ventas o finanzas.).
                </li>

                <li>
                    
                </li>
                </ul>
        </Parragrafo>


    </div>)
}