import Cookies from 'js-cookie'

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

/*
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
*/


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

/*
//FUNCIONES ASINCRONAS
async function getUniversitiesAsync(pais: string): Promise<Universidad[]> {
    const response = await fetch(`https://universities.hipolabs.com/search?country=${pais}`);
    const data: Universidad[] = await response.json() as Universidad[];
    return data;
}
    


// Llamamos a la función asincrona y mostramos el JSON de las universidades existentes en Spain
getUniversitiesAsync("Spain").then((data)=>{console.log(data[1])});
*/
// Como curiosidad, podéis observar que esta línea se ejecuta antes aún estando después de la llamada a la API. 
// Esto ocurre porque la función getDataFromAPI es una función asíncrona y muestra los resultados en el momento que termina su ejecución.
console.log("Linea posterior a funcion async")

/**
 * FUNCIONES GENERADORAS:
 * Una función generadora es una función que se puede pausar y reanudar, y por lo tanto, nos puede devolver múltiples valores.
 * Para poder declarar una función generadora es necesario añadir el * después de la palabra reservada function. 
 * Observa que en lugar de llamar a return para devolver un valor, utilizamos yield.
 * Fuente:https://lenguajejs.com/javascript/funciones/generadores/
 */

// Ejemplo 1: Función que itera elementos de un array y los devuelve

function* fGenTareas (): Generator<Tarea>{

    let tareas: Tarea[] = [... listadoTareas]

    for(let i in tareas){
        yield tareas[i];
    }
    // No es posible usar la función foreach porque al ser una función callback no se puede usar con yield.
}

// Preparamos nuestra función generadora
const genTareas = fGenTareas();
console.log(genTareas.next()); // Accedemos al primer valor del array

// Podemos obtener todos los valores de nuestra función generadora usando el operador spread

// const getAllTareas = [...fGenTareas()];
// console.log(getAllTareas);

function* fgeneradora2() : Generator<string>{
    yield "hola"
    yield "mundo"
    yield "adios"
}

let fgen2 = fgeneradora2();
console.log(fgen2.next());//hola
console.log(fgen2.next());//mundo
console.log(fgen2.next());//adios







// EJEMPLO 2: función generadora y asíncrona que accede a una API y devuelve cada uno de los elementos del array JSON.

 // Funcion generadora y asíncrona que devuelve páginas web que han sufrido alguna brecha de seguridad
 

type Website = {
    Name:string,
    Title:string,
    Domain: string,
    Description:string
}
async function* generatorGetBreaches():AsyncGenerator<Website> {

    let respuesta:Response = await fetch("https://haveibeenpwned.com/api/v2/breaches");
    // Convertimos la respuesta de la petición GET en un archivo JSON
    let datos: Website[]= await respuesta.json() as Website[];
    
    for(let i in datos){
        yield datos[i]
    }
   
}

let valoresUniversidades = generatorGetBreaches();

valoresUniversidades.next().then(({value,done}) => {console.log(`${value.Name} - ${value.Domain} - ${value.Description} \n`); console.log(`Is the last element? ${done} \n`);});
valoresUniversidades.next().then(({value,done}) => {console.log(`${value.Name} - ${value.Domain} - ${value.Description}\n`); console.log(`Is the last element? ${done} \n`);});
valoresUniversidades.next().then(({value,done}) => {console.log(`${value.Name} - ${value.Domain} - ${value.Description}\n`); console.log(`Is the last element? ${done} \n`);});
valoresUniversidades.next().then(({value,done}) => {console.log(`${value.Name} - ${value.Domain} - ${value.Description}\n`); console.log(`Is the last element? ${done} \n`);});


/**
 * Sobrecarga de funciones:
 * La sobrecarga de funciones permite declarar varias versiones de una función con diferentes parámetros y tipos de retorno. 
 * Cada versión de la función (o firma) se llama sobrecarga.
 * 
 * Para crear sobrecargas de funciones en TypeScript debemos hacer lo siguiente
 * 1. Definir las firmas de las funciones sobrecargadas.
 * 2. Proveer una única implementación de la función que maneje todas las combinaciones de parámetros.
 * Fuente:  https://www.luisllamas.es/typescript-sobrecarga-de-funciones/
*/

// Definición de sobrecargas
// En este ejemplo, la función miFuncion tiene dos firmas: una que acepta un string y otra que acepta un number. 
// La implementación de la función maneja ambas firmas.


function funcionSobrecarga(param: string): string;
function funcionSobrecarga(param: number): number;

// Implementación de la función
function funcionSobrecarga(param: string | number): string | number {
    // hacer cosas

    return "";
}
funcionSobrecarga(12);   // esto no da error
funcionSobrecarga("12")  // esto no da error

// Sobrecarga con diferentes tipos de parámetros.

function funcionSobrecargaDiffParam(a: string, b: string): string;
function funcionSobrecargaDiffParam(a: number, b: number): number;

// Implementación de la función
function funcionSobrecargaDiffParam(a: string | number, b: string | number): string | number {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Tipos de parámetros no coinciden");
}

console.log(funcionSobrecargaDiffParam("Hola, ", "mundo")); // "Hola, mundo"
console.log(funcionSobrecargaDiffParam(5, 10)); // 15
//console.log(funcionSobrecargaDiffParam("Hola", 10)); //ERROR

funcionSobrecarga(13)

//Sobrecarga con diferentes cantidades de parámetros
// Definición de sobrecargas
function mostrarMensaje(mensaje: string): void;
function mostrarMensaje(mensaje: string, veces: number): void;

// Implementación de la función
function mostrarMensaje(mensaje: string, veces?: number): void {
    if (veces === undefined) {
        console.log(mensaje);
    } else {
        for (let i = 0; i < veces; i++) {
            console.log(mensaje);
        }
    }
}

mostrarMensaje("Hola"); // "Hola"
mostrarMensaje("Hola", 3); // "Hola" "Hola" "Hola"

function saludos(nombre:string):string;
function saludos(nombre:string,apellido:string):string;
function saludos(nombre:string,apellido:string, edad:string):string;
function saludos(nombre:string,apellido:string, edad:string):string;


function saludos(nombre:string,apellido?:string,edad?:string|number):string{
    if(apellido == undefined && edad == undefined){
        return `Hola ${nombre}`;
    }else if(edad == undefined){
        return `Hola ${nombre} ${apellido}`;
    }else{
        return `Hola ${nombre} ${apellido}, tu edad es de ${edad} años.`;
    }
}

console.log(saludos("David"));
console.log(saludos("David","Castro"));
console.log(saludos("David","Castro","38"));



/*EJERCICIO 1
Crea una función en tu proyecto que reciba como parámetro un string llamado "type" que tendrá como valor por defecto "SessionStorage", un string 
llamado "key", un array de objetos Tarea llamado "data" . El funcionamiento de dicha función debe ser el siguiente: dependiendo de si el valor del 
parámetro "type" es "session" o "local" se almacenará la información del array empleando el objeto "SessionStorage" o "LocalStorage". La información 
del parámetro data se almacenará usando la key pasada como parámetro
*/

function userSession (type:string="SessionStorage",key:string,data:Tarea[]){
    if(type == "session"){
        sessionStorage.setItem(key,JSON.stringify(data));
        console.log("Datos almacenados correctamente en SessionStorage");
    }else if(type == "local"){
        localStorage.setItem(key,JSON.stringify(data));
        console.log("Datos almacenados correctamente en LocalStorage");
    }else{
        console.log("Tipo de almacenamiento no válido");
    }
}


/* EJERCICIO 3
Ejecuta la función anterior usando pasándole como parámetro el valor de type "session", un array 
de Tareas, y como clave "datos". Además, deberás ejecutar de nuevo la  función pasándole como parámetro 
el valor de type "local", un array de Tareas, y como clave "datos".
*/

let listaTareas : Tarea[] = [tarea0,tarea1,tarea2,tarea3,tarea4];

//mostramos la info

userSession("session","datos",listaTareas);
userSession("local","datos",listaTareas);
userSession("local","datos",listaTareas);

/* EJERCICIO 4
Crea una función en tu proyecto que permita recuperar la información almacenada en SessionStorage y LocalStorage.
Dicha función debe recibir dos parámetros: type que será un string y tendrá como valor por defecto "session", y un string 
llamado "key". El funcionamiento de la función debe ser el siguiente: dependiendo el valor de type, si es "sessión" o 
"local", se recuperará la información empleando el objeto "SessionStorage" o "LocalStorage" y la key pasada como parámetro.
*/

function recoverInfo(type:string="session",key:string){
   if(type=="session"){
        let info= sessionStorage.getItem(key);
        console.log(info);
   }else if(type == "local"){
        let info = localStorage.getItem(key);
        console.log(info);
   }else{
    console.log("Type no valido");
   }
}



/*EJERCICIO 5
Recupera la información almacenada en el navegador y muestrala por consola.
*/

recoverInfo("session","datos");
recoverInfo("local","datos");

/*EJERCICIO 6
Crea una función del mismo estilo que las anteriores que permita borrar la información 
almacenada en SessiónStorage y LocalStorage. Solo debe recibir como parámetro un string 
llamado "type" y un string llamado "key". Ejecuta dicha función tantas veces como sea 
necesaria para borrar toda la información almacenada.
*/

function deleteInfo(type:string="session",key:string){
    if(type=="session"){
        for(let i=0;i<sessionStorage.length;i++){
            sessionStorage.removeItem(key);
        } 
        console.log("Datos eliminados correctamente de SessionStorage");
   }else if(type == "local"){
        for(let i=0;i<localStorage.length;i++){
            localStorage.removeItem(key);
        console.log("Datos eliminados correctamente de LocalStorage");
    }
   }else{
    console.log("Type no valido");
   }
}


deleteInfo("session","datos");
deleteInfo("local","datos");



//Cookeis importados arriba en la linea 1
//Crea una cookie llamada nombre con tu nombre que expire a los 7 días y sea accesible desde el path /

Cookies.set('nombre', 'David', {expires:1,path:"/",sameSite:'Strict',secure:false})

//Crea una cookie llamada apellidos con tu apellido que expire a los 2 días

Cookies.set('apellidos', 'Castro', {expires:2,path:"/",sameSite:'Strict',secure:false})


//Crea una cookie llamada email con un email que expire a los 4 días.

Cookies.set("email","estenoesmiemail@gmail.com",{expires:4,path:"/",sameSite:'Strict',secure:false});

//Recupera todas las cookies anteriores.

console.log(Cookies.get("nombre"));
console.log(Cookies.get("apellidos"));
console.log(Cookies.get("email"));

//Borra todas las cookies anteriores

Cookies.remove("nombre");
Cookies.remove("apellidos");
Cookies.remove("email");



