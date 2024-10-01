console.log("Hola mundo2");

/**
 * TIPOS DE DATOS
 * 
 * string
 * number - enteros y decimales
 * boolean - true / false
 * null
 * undefined
 * 
 */

var nombre : string = "David"; //VARIABLE GLOBAL
let apellido : string = "Castro"; //Variable Local
const PI : number = 3.1416; //Variable Constante (siempre mayusculas)

/**
 * Concatenar texto
 */

console.log(nombre+" "+apellido);
console.log(nombre,apellido);
console.log(`Hola ${nombre}`);


let a:string, b:string, c:number; //Podemos iniciar varias variables en la misma linea
a="texto";
b="texto2";
c=2;

//Arrays de datos

let alumnos1:string[]=["Juan","Jose","Alex"];
let alumnos2:string[]=["Fran"];
let valores: (string|number)[] = ["Jose",5,4];

let alumnos:string[]=[...alumnos1,...alumnos2,"Pepe"];
console.log(alumnos);

//Como definimos objetos

let misDatos ={
    nombre : "David",
    apellido : "Castro",
    edad : 18
}

let configuracion = {
    versionTs : "Es6",
    versionCodigo : "1.0"
}

configuracion.versionCodigo;

let propiedad1 = configuracion.versionCodigo;
let propiedad2 = configuracion.versionTs;

console.log(`${propiedad1} ${propiedad2}`);

//enumerados

enum EstadoTarea{"Terminado"="T","Pendiente"="P","EnProceso"="E"};

let estado = EstadoTarea.Pendiente;

console.log(estado);

//Interfaces

interface Tarea {
    nombre:string,
    prioridad:number,
    estado:EstadoTarea
}

let tarea1: Tarea = {nombre:"tarea1",prioridad:2,estado:EstadoTarea.EnProceso}

let tarea0 = {nombre:"tarea1",prioridad:2,estado:EstadoTarea.EnProceso} //sirve pero no es buena pratica

type Empleado = {
    nombre:string,
    edad:number,
    sueldo:number
}

let empleado1:Empleado = {nombre:"David",edad:38,sueldo:1400}

console.log(empleado1)

//usamos propagacion

type Jefe = {
    codigo:string
}

let empleado2 : Empleado & Jefe;

empleado2 = {nombre:"David",edad:38,sueldo:1400,codigo:"ad34dd"};

// Estructuras de control y repeticion

//Operador ternario
// condicion ? verdadero : falso

console.log(tarea1.estado == "T" ? `La tarea ${tarea1.nombre} se ha terminado`:`Terminado`);

// IF-ELSE

if(tarea1.estado == "T"){
//codigo 1
}else if(tarea1.estado == "E"){
//codigo 2
}else{
    //resto de casos
}


//Switch

switch (tarea1.estado){
    case "T": 
    console.log("Terminado");
    break;

    case "P":
        console.log("Pendiente");
        break;

    case "E":
        console.log("en proceso");
        break;

    default:

    //resto de codigo

}



try{

    let numero1: number = 1;
    console.log(numero1.toString())
}catch (error){
    console.log("Se ha producido un error al pasar el numero a string",error)
}

/*
Estrucuturas de repeticion - bucles
*/

let tarea2 : Tarea = {estado: EstadoTarea.Terminado, nombre:"Tarea 2",prioridad:0};


let listadoTareas :Tarea[]= [tarea0,tarea1,tarea2];

// foreach

listadoTareas.forEach(
    (elemento,indice,arreglo) => {
        console.log(indice,elemento,arreglo[indice].estado)
    });
    
    
// WHILE

while (tarea1.estado != EstadoTarea.Terminado){
    console.log("Tarea no completada");
    tarea1.estado = EstadoTarea.Terminado;
}

do {
    console.log (`El estado de la tarea ${tarea1.nombre} es ${tarea1.estado}`)
}while(tarea1.estado != EstadoTarea.Terminado);




/**
 * Funciones: nos permitirá crear bloque de códigos reutilizables.
 * funtion name (nameParam: type):{}
 */

// Funciónes clásicas y documentación del código

/**
 * Muestra un saludo por consola a una persona
 * @param nombre string nombre del usuario
 */
function saludar (nombre:string){
    console.log(`Hola ${nombre}, qué tal estas?`);

}

saludar("David Castro");

//Funciones con parámeros por defecto

function saludarDefault (nombre:string = "David"){
    console.log(`Hola ${nombre}, qué tal estas?`);
}
saludarDefault();
saludarDefault("Juan");


//Funciones con parámeros opcionales

function saludarOpcional (nombre?:string){
    let nombreParam = nombre;
    if(nombreParam == undefined){
        nombreParam = "Nombre Defecto";
    }
    console.log(`Hola ${nombreParam}, qué tal estas?`);

}

saludarOpcional();

