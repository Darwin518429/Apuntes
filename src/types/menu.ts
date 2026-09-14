//TODOS LOS TIPOS DE TYPES QUE HAY 

//BOTON DESPEGABLE 
//El boton que abrira la lista de opciones 
export interface botonDespegable{
txt: string;
clic: () => void; // Le especifcamos que se dbe de introducir una funcion que no devleve nada 
}
//FORMATO PARA INTROUCI OBJETOS PARA AÑADIR OPCIONES
export interface FormatOpcion{
    txt:string
    url:string
    subopciones?: FormatOpcion[]
    //mainurl?:string;
};

//AQUI DONDE LISTAREMOS LAS OPCIONES DEL SUBMENU
export interface Opcionboton{
opcion:FormatOpcion[];
}


 // Nos sirve para un componente en especifico es para introducir  
export interface BotonFinalIntroducir{
    txt:string,
    opciones:FormatOpcion[];
}

