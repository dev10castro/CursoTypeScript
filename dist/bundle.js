/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
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
var nombre = "David"; //VARIABLE GLOBAL
let apellido = "Castro"; //Variable Local
const PI = 3.1416; //Variable Constante (siempre mayusculas)
/**
 * Concatenar texto
 */
console.log(nombre + " " + apellido);
console.log(nombre, apellido);
console.log(`Hola ${nombre}`);
let a, b, c; //Podemos iniciar varias variables en la misma linea
a = "texto";
b = "texto2";
c = 2;
//Arrays de datos
let alumnos1 = ["Juan", "Jose", "Alex"];
let alumnos2 = ["Fran"];
let valores = ["Jose", 5, 4];
let alumnos = [...alumnos1, ...alumnos2, "Pepe"];
console.log(alumnos);
//Como definimos objetos
let misDatos = {
    nombre: "David",
    apellido: "Castro",
    edad: 18
};
let configuracion = {
    versionTs: "Es6",
    versionCodigo: "1.0"
};
configuracion.versionCodigo;
let propiedad1 = configuracion.versionCodigo;
let propiedad2 = configuracion.versionTs;
console.log(`${propiedad1} ${propiedad2}`);
//enumerados
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea["Terminado"] = "T";
    EstadoTarea["Pendiente"] = "P";
    EstadoTarea["EnProceso"] = "E";
})(EstadoTarea || (EstadoTarea = {}));
;
let estado = EstadoTarea.Pendiente;
console.log(estado);
let tarea1 = { nombre: "tarea 1", prioridad: 2, estado: EstadoTarea.EnProceso };
let tarea0 = { nombre: "tarea 0", prioridad: 2, estado: EstadoTarea.EnProceso }; //sirve pero no es buena pratica
let empleado1 = { nombre: "David", edad: 38, sueldo: 1400 };
console.log(empleado1);
let empleado2;
empleado2 = { nombre: "David", edad: 38, sueldo: 1400, codigo: "ad34dd" };
// Estructuras de control y repeticion
//Operador ternario
// condicion ? verdadero : falso
console.log(tarea1.estado == "T" ? `La tarea ${tarea1.nombre} se ha terminado` : `Terminado`);
// IF-ELSE
if (tarea1.estado == "T") {
    //codigo 1
}
else if (tarea1.estado == "E") {
    //codigo 2
}
else {
    //resto de casos
}
//Switch
switch (tarea1.estado) {
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
try {
    let numero1 = 1;
    console.log(numero1.toString());
}
catch (error) {
    console.log("Se ha producido un error al pasar el numero a string", error);
}
/*
Estrucuturas de repeticion - bucles
*/
let tarea2 = { estado: EstadoTarea.Terminado, nombre: "Tarea 2", prioridad: 0 };
let listadoTareas = [tarea0, tarea1, tarea2];
// foreach
listadoTareas.forEach((elemento, indice, arreglo) => {
    console.log(indice, elemento, arreglo[indice].estado);
});
// WHILE
while (tarea1.estado != EstadoTarea.Terminado) {
    console.log("Tarea no completada");
    tarea1.estado = EstadoTarea.Terminado;
}
do {
    console.log(`El estado de la tarea ${tarea1.nombre} es ${tarea1.estado}`);
} while (tarea1.estado != EstadoTarea.Terminado);
/**
 * Funciones: nos permitirá crear bloque de códigos reutilizables.
 * funtion name (nameParam: type):{}
 */
// Funciónes clásicas y documentación del código
/**
 * Muestra un saludo por consola a una persona
 * @param nombre string nombre del usuario
 */
function saludar(nombre) {
    console.log(`Hola ${nombre}, qué tal estas?`);
}
saludar("David Castro");
//Funciones con parámeros por defecto
function saludarDefault(nombre = "David") {
    console.log(`Hola ${nombre}, qué tal estas?`);
}
saludarDefault();
saludarDefault("Juan");
//Funciones con parámeros opcionales
function saludarOpcional(nombre) {
    let nombreParam = nombre;
    if (nombreParam == undefined) {
        nombreParam = "Nombre Defecto";
    }
    console.log(`Hola ${nombreParam}, qué tal estas?`);
}
saludarOpcional();
// Clase 2/10/2024
for (let x = 0; x <= 10; x++) {
    console.log(x);
}
// (valor1,valor2,valor3) => {}
listadoTareas.forEach((elemento, indice, listadoTareas) => { console.log(`${elemento.nombre}-${indice}-${listadoTareas}`); });
for (let i = 0; i < listadoTareas.length; i++) {
    let elemento = listadoTareas[i];
    console.log(elemento);
}
// DO{} WHILE()
//FUNCIONES BASICAS
/**
 * dado el parametro nombre muestra por pantalla
 * @param nombre nombre a saludar
 */
function saludar2(direccion, nombre = "david", apellido) {
    if (apellido != undefined) {
        console.log(`Hola ${nombre} ${apellido}`);
    }
    else {
        console.log(`Hola ${nombre}`);
    }
    console.log(typeof (direccion));
}
saludar2("moron", "Garcia");
//funciones anonimas
let fanonima = function () { console.log("hola mundo"); };
fanonima();
let fitera = function (elemento, indice) { console.log(`la tarea ${elemento.nombre} esta en numero ${indice}`); };
listadoTareas.forEach(fitera);
let tarea3 = { estado: EstadoTarea.Terminado, nombre: "Tarea 3", prioridad: 0 };
let tarea4 = { estado: EstadoTarea.Terminado, nombre: "Tarea 4", prioridad: 0 };
// funciones con multiples parametros
function muestraTareas(...nombres) {
    nombres.forEach(fitera);
}
muestraTareas(tarea0, tarea2, tarea1, tarea3, tarea4);
let listadoTareas2 = [...listadoTareas, tarea3, tarea4];
muestraTareas(...listadoTareas2);
// funciones arrow
let farrow = (tarea, indice) => { console.log(`${tarea.nombre} ${indice}`); };
listadoTareas2.forEach(farrow);
listadoTareas2.forEach((tarea) => { console.log(`${tarea.nombre}`); });
listadoTareas2.forEach(function (tarea) { console.log(`${tarea.nombre}`); });
farrow(tarea0, 1);
let fsuma = function suma(a, b) {
    return a + b;
};
let fresta = function resta(a, b) {
    return a - b;
};
function opera(x, y, funcion) {
    return funcion(x, y);
}
opera(2, 3, fsuma); //suma 2+3
opera(2, 3, fresta); //resta 2-3
//Funciones asincronas
function asincrona() {
    return __awaiter(this, void 0, void 0, function* () {
        let suma = 0;
        for (let i = 1; i <= 10; i++) {
            suma += i;
        }
        return suma;
    });
}
asincrona().then((data) => { console.log(`el resultado es ${data}`); });
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
function* generadora() {
    for (let tarea in listadoTareas) {
        {
            yield listadoTareas[tarea];
        }
    }
}
let funcionGeneradora = generadora();
console.log(funcionGeneradora.next()); // tarea 1
console.log(funcionGeneradora.next()); // tarea 2
console.log(funcionGeneradora.next()); // tarea 3
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
console.log("Linea posterior a funcion async");
/**
 * FUNCIONES GENERADORAS:
 * Una función generadora es una función que se puede pausar y reanudar, y por lo tanto, nos puede devolver múltiples valores.
 * Para poder declarar una función generadora es necesario añadir el * después de la palabra reservada function.
 * Observa que en lugar de llamar a return para devolver un valor, utilizamos yield.
 * Fuente:https://lenguajejs.com/javascript/funciones/generadores/
 */
// Ejemplo 1: Función que itera elementos de un array y los devuelve
function* fGenTareas() {
    let tareas = [...listadoTareas];
    for (let i in tareas) {
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
function* fgeneradora2() {
    yield "hola";
    yield "mundo";
    yield "adios";
}
let fgen2 = fgeneradora2();
console.log(fgen2.next()); //hola
console.log(fgen2.next()); //mundo
console.log(fgen2.next()); //adios
function generatorGetBreaches() {
    return __asyncGenerator(this, arguments, function* generatorGetBreaches_1() {
        let respuesta = yield __await(fetch("https://haveibeenpwned.com/api/v2/breaches"));
        // Convertimos la respuesta de la petición GET en un archivo JSON
        let datos = yield __await(respuesta.json());
        for (let i in datos) {
            yield yield __await(datos[i]);
        }
    });
}
let valoresUniversidades = generatorGetBreaches();
valoresUniversidades.next().then(({ value, done }) => { console.log(`${value.Name} - ${value.Domain} - ${value.Description} \n`); console.log(`Is the last element? ${done} \n`); });
valoresUniversidades.next().then(({ value, done }) => { console.log(`${value.Name} - ${value.Domain} - ${value.Description}\n`); console.log(`Is the last element? ${done} \n`); });
valoresUniversidades.next().then(({ value, done }) => { console.log(`${value.Name} - ${value.Domain} - ${value.Description}\n`); console.log(`Is the last element? ${done} \n`); });
valoresUniversidades.next().then(({ value, done }) => { console.log(`${value.Name} - ${value.Domain} - ${value.Description}\n`); console.log(`Is the last element? ${done} \n`); });
// Implementación de la función
function funcionSobrecarga(param) {
    // hacer cosas
    return "";
}
funcionSobrecarga(12); // esto no da error
funcionSobrecarga("12"); // esto no da error
// Implementación de la función
function funcionSobrecargaDiffParam(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Tipos de parámetros no coinciden");
}
console.log(funcionSobrecargaDiffParam("Hola, ", "mundo")); // "Hola, mundo"
console.log(funcionSobrecargaDiffParam(5, 10)); // 15
//console.log(funcionSobrecargaDiffParam("Hola", 10)); //ERROR
funcionSobrecarga(13);
// Implementación de la función
function mostrarMensaje(mensaje, veces) {
    if (veces === undefined) {
        console.log(mensaje);
    }
    else {
        for (let i = 0; i < veces; i++) {
            console.log(mensaje);
        }
    }
}
mostrarMensaje("Hola"); // "Hola"
mostrarMensaje("Hola", 3); // "Hola" "Hola" "Hola"
function saludos(nombre, apellido, edad) {
    if (apellido == undefined && edad == undefined) {
        return `Hola ${nombre}`;
    }
    else if (edad == undefined) {
        return `Hola ${nombre} ${apellido}`;
    }
    else {
        return `Hola ${nombre} ${apellido}, tu edad es de ${edad} años.`;
    }
}
console.log(saludos("David"));
console.log(saludos("David", "Castro"));
console.log(saludos("David", "Castro", "38"));
/*EJERCICIO 1
Crea una función en tu proyecto que reciba como parámetro un string llamado "type" que tendrá como valor por defecto "SessionStorage", un string
llamado "key", un array de objetos Tarea llamado "data" . El funcionamiento de dicha función debe ser el siguiente: dependiendo de si el valor del
parámetro "type" es "session" o "local" se almacenará la información del array empleando el objeto "SessionStorage" o "LocalStorage". La información
del parámetro data se almacenará usando la key pasada como parámetro
*/
function userSession(type = "SessionStorage", key, data) {
    if (type == "session") {
        sessionStorage.setItem(key, JSON.stringify(data));
        console.log("Datos almacenados correctamente en SessionStorage");
    }
    else if (type == "local") {
        localStorage.setItem(key, JSON.stringify(data));
        console.log("Datos almacenados correctamente en LocalStorage");
    }
    else {
        console.log("Tipo de almacenamiento no válido");
    }
}
/* EJERCICIO 3
Ejecuta la función anterior usando pasándole como parámetro el valor de type "session", un array
de Tareas, y como clave "datos". Además, deberás ejecutar de nuevo la  función pasándole como parámetro
el valor de type "local", un array de Tareas, y como clave "datos".
*/
let listaTareas = [tarea0, tarea1, tarea2, tarea3, tarea4];
//mostramos la info
userSession("session", "datos", listaTareas);
userSession("local", "datos", listaTareas);
/* EJERCICIO 4
Crea una función en tu proyecto que permita recuperar la información almacenada en SessionStorage y LocalStorage.
Dicha función debe recibir dos parámetros: type que será un string y tendrá como valor por defecto "session", y un string
llamado "key". El funcionamiento de la función debe ser el siguiente: dependiendo el valor de type, si es "sessión" o
"local", se recuperará la información empleando el objeto "SessionStorage" o "LocalStorage" y la key pasada como parámetro.
*/
function recoverInfo(type = "session", key) {
    if (type == "session") {
        let info = sessionStorage.getItem(key);
        console.log(info);
    }
    else if (type == "local") {
        let info = localStorage.getItem(key);
        console.log(info);
    }
    else {
        console.log("Type no valido");
    }
}
/*EJERCICIO 5
Recupera la información almacenada en el navegador y muestrala por consola.
*/
recoverInfo("session", "datos");
recoverInfo("local", "datos");
/*EJERCICIO 6
Crea una función del mismo estilo que las anteriores que permita borrar la información
almacenada en SessiónStorage y LocalStorage. Solo debe recibir como parámetro un string
llamado "type" y un string llamado "key". Ejecuta dicha función tantas veces como sea
necesaria para borrar toda la información almacenada.
*/
function deleteInfo(type = "session", key) {
    if (type == "session") {
        for (let i = 0; i < sessionStorage.length; i++) {
            sessionStorage.removeItem(key);
        }
        console.log("Datos eliminados correctamente de SessionStorage");
    }
    else if (type == "local") {
        for (let i = 0; i < localStorage.length; i++) {
            localStorage.removeItem(key);
            console.log("Datos eliminados correctamente de LocalStorage");
        }
    }
    else {
        console.log("Type no valido");
    }
}
//deleteInfo("session","datos");
//deleteInfo("local","datos");
//Crea una cookie llamada nombre con tu nombre que expire a los 7 días y sea accesible desde el path /
//Crea una cookie llamada apellidos con tu apellido que expire a los 2 días
//Crea una cookie llamada email con un email que expire a los 4 días.
//Recupera todas las cookies anteriores.
//Borra todas las cookies anteriores


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map