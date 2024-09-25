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

let alumnos:string[]=[...alumnos1,...alumnos2,"Pablo"];
console.log(alumnos);



