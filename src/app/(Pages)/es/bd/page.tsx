import Parragrafo from "@/app/components/TextoImg/txt_img";
import Style_titulo from "@/app/ui/titulos.module.css";
import Style_componente from "@/app/ui/componente.module.css"
import Image from 'next/image'
import TarjetaFoto from '@/app/components/TextoImg/intro'

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
                <li>Compartir:</li>
                <ul>
                    <li>
                        Multiples usos:  maneras  para poder : entrar,mantener y visualizar los datos(por web,mobil, software especifico, informes, graficos...)
                    </li>
                    <li>Multiples usuarios: Asegurar/ tener en cuenta que  muchas personas puedan utilizar al mismo tiempioo la bd, para poder  revisar los(datos del banco por ej) </li>
                </ul>
            </ul>
        </Parragrafo>


        <TarjetaFoto titulo="Otros conceptos" texto="Diferentes conceptos" img="/bd/introduccion/bd_2.png">
            <ul>
                <li><strong>Clave-valor: </strong>bd no relacional , para guardar los datos  los almacena como una coleccion/lista de clave-valor en la que cada clave es una id unica que esta relacionada a un dato en especifico
                </li>
                <li><strong>Sistema de comunicacion de processos(IPC):</strong> mecanismos y técnicas utilizados por los programas que se ejecutan en una computadora para comunicarse y compartir datos entre sí.
                </li>
                <li><strong>Pipes:</strong>un pipe es un flujo de datos que circula entre dos procesos que, o bien están estrechamente vinculados, o no tienen un origen común. Esto quiere decir que el resultado arrojado por un programa servirá como entrada para otro programa.
                </li>
            </ul>
        </TarjetaFoto>


        <TarjetaFoto titulo="GESTOR BD" texto="Definicion sobre gestor bd " img="/bd/introduccion/bd_1.png"  txtImg=" EJ:Por ejemplo, en una app web, el gestor se pone al  medio entre la aplicación y la base de datos, manejando toda la lógica de acceso y organización de los datos, lo que hace el trabajo más fácil.
">
            <ul>
                <li><strong>Gestor de Base de Datos (DBMS)</strong>  es un programa que gestiona i  maneja  con la base de datos, haciendolo facil  a la hora de tratar los datos sin que la aplicación tenga que comunicarse directamente con ellos. Permite almacenar, modificar, consultar... , tambien asegura que varios usuarios o aplicaciones puedan acceder a los datos al mismo tiempo sin problemas.
                </li>

                <li> <strong> El gestor de db puede  ser una aplicacion  o libreria:</strong> en caso de ser una aplicacion necessitamos un {"'"}sistema de comunicacion de processos{"'"}para poder comunicarnos con la base de datos(ej: modelo cliente servidor).
                    Existen diferentes  formas  de poder enviar/recibir datos(comunicacion)  --{'>'}  pipes,  red, memoria compartida.
                    Pero si son librerias tenemos que vincularlo al nuestro app/programa.</li>

                <li><strong>Las app no acceden de golpe los datos </strong>lo que haremos es que le haremos como solicitudes de lo queramos al gestor de db, el gestor es el responnsable  a la hora de acceder a los datos.
                    Eso hace que mantenga la integridad de los datos y  que tenga seguridad </li>
            </ul>
            <hr />
            <p>
                Para que  un programa se considere un gestor de bd  debe de facilitar las accione que queremos hacer .
                Lo mas importante es que  debe de  que  podemos seguir accediendo a los datos usando las herramientas del propio SGBD, sin necesidad de depender de otros programas externos. <br /> <br />
                También podemos cambiar la estructura de los datos (por ejemplo, añadir una nueva columna a una tabla), desde el mismo SGBD, sin tener que modificar las apps que usan esos datos.
                Controlar quién puede acceder a los datos  y mantener la seguridad y la integridad de los datos, es decir, protegerlos y asegurarse de que no se corrompan ni se pierdan.
            </p>

             <p>La info es un recurso importante a la hora de tomar decisines  de las empresas,  hay una necessidad  de mantener algun tipo de infraestructura para manejar la info  de manera rapida con el esfuerzo minimo, es infraestructura se llama Sistema de info
</p>
        </TarjetaFoto>

       
    </div>)
}