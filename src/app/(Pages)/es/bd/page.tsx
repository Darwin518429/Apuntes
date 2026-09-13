import Parragrafo from "@/app/components/TextoImg/txt_img"
import Style_titulo from "@/app/ui/titulos.module.css"
export default function BasedeDatos() {
    return (<div>
      <header className={Style_titulo.encabezado}>   <h1 > BASE DE DATOS</h1></header>
      
      
        <Parragrafo titulo="¿QUE ES?" parrafo={<p>Una base de datos es un grupo estructurado de datos relacionados entre ellos que se almacena en un gestor DB   y que puede consultarse y mantenerse. No es acumular datos, sino organizarlos con un propósito concreto, representando algún aspecto del mundo real y siendo útiles para un grupo de usuarios específico.
            Las bd pueden ser hechas/mantenidas manualmente o automatizada </p>}>
            <h2>Tipos de Base de datos</h2>
            <ul>
                <li>
                    <strong>Bd Relacionales:</strong>Son muy utilizadas, almacena datos en tablas relacionasdas entre ellos,  utilizan para organizar filas y columnas tambien unas claves parea poder relacionar los datos entre ellos .
                    <br /> <br />
                    Este tipo de bd son escalables(a futuro sera facil de subir datos si que hay problemas) y flexibles (Adaptarse), pueden servir cmo por ejemplo(sistemas de gestión de inventario, ventas o finanzas.).
                </li>
                <br />
                <li>
                    <strong>Bases de datos no relaiconales(NOSQL):</strong>
                    Son bd que no se guardan en tablas sino en diferentes estructuras de datos, (ej:documentos,graficos  o llaves-valor).
                    Esta tipo de bd son muy escalables(a futuro la base de datos se puede apliar muchos  datos sin tener problemas)(ej:datos de redes sociales)
                </li>
                <br />
                <li>
                    <strong>Bd de objetos:</strong>
                    bd no relacional, que los guarda  como objetos,  estan hechos para  utilizar lenguajes de programacion (Java,python).
                    Son utiles para app para guardar y manejar objetos dificilies y jerarquicos(objeto que tiene como una prioridad o  importante que los otros uno del otro objetos dentro de otros entre ellos)
                </li>
                <br />
                <li>
                    <strong>Bd Grafos</strong>
                    Trabaja con datos  relaciionales complicados,   se gestionan  con nodos  relaciones,.
                    ej: aplicaciones que necesitan análisis complejos y búsqueda de patrones en grandes conjuntos de datos relacionales.
                </li>
                <br />
                <li>

                    <strong> BD DATOS EN MEMORIA:</strong>
                    Trabaja con datos  relaciionales complicados,   se gestionan  con nodos  relaciones,.
                    ej: aplicaciones que necesitan análisis complejos y búsqueda de patrones en grandes conjuntos de datos relacionales.
                </li>
            </ul>
        </Parragrafo>
        <header className={Style_titulo.encabezado}>   <h1 > CONCEPTOS</h1></header>
        <Parragrafo titulo="Diferencia de dato y info" parrafo={<p>Un dato y una informacion no son los mismo
            acontinuacion mostrare las diferencias
        </p>} >
            <ul>
                <li>
                    <strong>Dato:</strong>Cosas que han posado que se pueden registrar(guardar) , por ejemplo : nombres,numeros de telf, direcciones... 
                </li>
                <li>
                    <strong>Informacion</strong>
                     Datos  organizados y manipulados(tocados) de forma que tienen utilidad para tomar decisiones(ej: comparar los trabajos biuen pagados).
 
                </li>
            </ul>
        </Parragrafo>
        <Parragrafo titulo="Caracteristicas de una BD" parrafo={<p> Una bd  tiene diferentes caracteristicas:</p>}>
            <ul>
                <li> Persistencia  : Los datos deben durar mucho con el timepo  y  solo se debe  almacenar datos  importantes.</li>
                <li>Relaciones:</li>
                <ul>
                    <li> Entidades: grupo de datos  que  describen   sobre una cosa(ej:  cliente{'{'}nombre,dni,apellido {'}'},producto{'{'}peso, valor , disponibilidad{'}'},vehiculo{'{'}piezas , marca {'}'}...)</li>
                    <li>Relaciones: Relaciones entre las entidades(el grupo de datos que describe un objeto o cosa), (ej: Doctores revisan expedientes  datos de los pacientes, cliente comprando productos).</li>
                </ul>
                
                
            </ul>
        </Parragrafo>

    </div>)
}