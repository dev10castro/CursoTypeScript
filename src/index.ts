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

enum EstadoTarea{"T"="Terminado","P"="Pendiente","E"="En Proceso"};

let estado = EstadoTarea.P;

console.log(estado);

//Interfaces

interface Tarea {
    nombre:string,
    prioridad:number,
    estado:EstadoTarea
}

let tarea1: Tarea = {nombre:"tarea1",prioridad:2,estado:EstadoTarea.E}

let tarea0 = {nombre:"tarea1",prioridad:2,estado:EstadoTarea.E} //sirve pero no es buena pratica

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

console.log(tarea1.estado == "Terminado" ? `La tarea ${tarea1.nombre} se ha terminado`:`Terminado`);

// IF-ELSE

if(tarea1.estado == "Terminado"){
//codigo 1
}else if(tarea1.estado == "En Proceso"){
//codigo 2
}else{
    //resto de casos
}


//Switch

switch (tarea1.estado){
    case "Terminado": 
    console.log("Terminado");
    break;

    case "Pendiente":
        console.log("Pendiente");
        break;

    case "En Proceso":
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