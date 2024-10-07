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

let tarea1: Tarea = {nombre:"tarea 1",prioridad:2,estado:EstadoTarea.EnProceso}

let tarea0 = {nombre:"tarea 0",prioridad:2,estado:EstadoTarea.EnProceso} //sirve pero no es buena pratica

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


// Clase 2/10/2024
for(let x =0; x<=10;x++){
    console.log(x)
}

// (valor1,valor2,valor3) => {}
listadoTareas.forEach((elemento,indice,listadoTareas)=>{console.log(`${elemento.nombre}-${indice}-${listadoTareas}`)})


for(let i=0;i<listadoTareas.length;i++){
    let elemento=listadoTareas[i];
    console.log(elemento);
}


// DO{} WHILE()




//FUNCIONES BASICAS
/**
 * dado el parametro nombre muestra por pantalla
 * @param nombre nombre a saludar
 */
function saludar2(direccion:string | number,nombre:string="david",apellido?:string): void{
    if(apellido != undefined){
        console.log(`Hola ${nombre} ${apellido}`);
    }else{
        console.log(`Hola ${nombre}`);
    }
    console.log(typeof(direccion));

    
}


saludar2("moron","Garcia");

//funciones anonimas

let fanonima = function(){console.log("hola mundo")}

fanonima();

let fitera = function(elemento:Tarea,indice:number){console.log(`la tarea ${elemento.nombre} esta en numero ${indice}`)}

listadoTareas.forEach(fitera);


let tarea3 : Tarea = {estado: EstadoTarea.Terminado, nombre:"Tarea 3",prioridad:0};
let tarea4 : Tarea = {estado: EstadoTarea.Terminado, nombre:"Tarea 4",prioridad:0};

// funciones con multiples parametros

function muestraTareas(... nombres : Tarea[]): void {
    nombres.forEach(fitera);
}

muestraTareas(tarea0,tarea2,tarea1,tarea3,tarea4);

let listadoTareas2 = [...listadoTareas,tarea3,tarea4];

muestraTareas(...listadoTareas2);


// funciones arrow

let farrow = (tarea:Tarea,indice:number) => {console.log(`${tarea.nombre} ${indice}`)};

listadoTareas2.forEach(farrow);
listadoTareas2.forEach((tarea:Tarea)=>{console.log(`${tarea.nombre}`)})
listadoTareas2.forEach(function (tarea:Tarea){console.log(`${tarea.nombre}`)})
farrow(tarea0,1);


let fsuma = function suma(a:number,b:number){
    return a+b;
}

let fresta = function resta(a:number,b:number){
    return a-b;
}  



function opera (x:number,y:number, funcion:(a:number,b:number)=>number){
    return funcion(x,y);
}

opera(2,3,fsuma); //suma 2+3

opera(2,3,fresta); //resta 2-3



//Funciones asincronas

async function asincrona (){
    let suma = 0;
    for(let i=1;i<=10;i++){
       suma+=i;
    }
    return suma;
}

asincrona().then((data:number)=>{console.log(`el resultado es ${data}`)}); 

console.log("fin de la funcion asincrona");


async function getDataUniversity(): Promise<Universidad[]> {
    const data = await fetch("https://universities.hipolabs.com/search?country=Spain");
    let respuesta : Promise<Universidad[]> = await data.json() as Promise<Universidad[]>;
    return respuesta;
}

//

type Universidad = {
    domains: string[],
    alpha_two_code: string,
    name: string,
}

getDataUniversity().then((data:Universidad[])=>{
    //console.log(data.forEach((elemento:Universidad)=>{console.log(elemento.name)}))

    for(let i=0;i<data.length;i++){
        console.log(data[i].name);
    }
});

//FUNCION GENERADORA

function* generadora(): Generator<Tarea>{
   for (let tarea in listadoTareas){ {
    yield listadoTareas[tarea];
        
    }
   }
}


let funcionGeneradora = generadora();

console.log(funcionGeneradora.next());// tarea 1
console.log(funcionGeneradora.next());// tarea 2
console.log(funcionGeneradora.next());// tarea 3

