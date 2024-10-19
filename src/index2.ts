
// PROBANDO COGER TEXTO Y AÑADIENDO A UN NUEVO <li>

import { get } from "http";

 // Obtiene la referencia del elemento <ul> con el id "lista-contenidos"
 let documentoOl2 = document.getElementById("lista-contenidos") as HTMLUListElement;
console.log("probando");

 // Obtiene la referencia del botón con el atributo name "btn-add-content"
 let btnNuevoContenido2 = document.getElementsByName("btn-add-content")[0] as HTMLButtonElement;
 
 // Obtiene la referencia del campo de entrada (input) con el id "input-contenido"
 let nuevoElementoInput = document.getElementById("input-contenido") as HTMLInputElement;

 //obtenemos elemento ol

 let elementoOl = document.getElementsByTagName("ol");

 //obtenemos los elemento li

    let elementoLi = document.getElementsByTagName("li");

   


 
// Obtenemos la referencia del boton borrar

 
 btnNuevoContenido2.addEventListener("click", (event) => {
     // Recupera el valor del campo de entrada (el texto que hemos escrito)
     const texto = nuevoElementoInput.value;
 
     // Verifica si el campo de entrada no está vacío
     if (texto.trim() !== "") {
         // Crea un nuevo elemento <li> en el DOM
         let nuevoElemento = document.createElement("li");
 
         // Asigna el texto ingresado al nuevo <li>
         nuevoElemento.innerText = texto;
 
         // Añade el nuevo elemento <li> al <ul> (lista) existente en el DOM
         documentoOl2.appendChild(nuevoElemento);
 
         // Limpia el campo de entrada para que el usuario pueda ingresar nuevo texto
         nuevoElementoInput.value = "";
     } else {
         // Si el campo de entrada está vacío, muestra un mensaje en la consola
         console.log("El campo de entrada está vacío");
     }
 });


 let nuevoElementodel = document.getElementsByName("btn-del-content")[0] as HTMLButtonElement;

nuevoElementodel.addEventListener("click", (event) => {
    // Recupera el valor del campo de entrada (el texto que hemos escrito)
    const texto = nuevoElementoInput.value;

    // Verifica si el campo de entrada no está vacío
    if (texto.trim()) {
        // Selecciona todos los elementos <li> dentro de la lista
        let listaElementos = documentoOl2.getElementsByTagName("li");
        let encontrado = false;

        // Recorre los elementos <li> y busca coincidencias
        for (let i = 0; i < listaElementos.length; i++) {
            if (listaElementos[i].textContent?.trim() === texto.trim()) {
                // Si encuentra un <li> con el texto coincidente, lo elimina
                documentoOl2.removeChild(listaElementos[i]);
                encontrado = true;
                break; // Sale del bucle una vez que encuentra y elimina el elemento
            }
        }

        // Si no se encontró ningún elemento con ese texto
        if (!encontrado) {
            console.log("No se encontró ningún elemento con ese nombre");
        }

        // Limpia el campo de entrada
        nuevoElementoInput.value = "";
    } else {
        // Si el campo de entrada está vacío, muestra un mensaje en la consola
        console.log("El campo de entrada está vacío");
    }
});



// ejemplo api perros https://dog.ceo/api/breeds/image/random

let url = "https://dog.ceo/api/breeds/image/random";

type perro={
    message: string;
    status: string;
}


async function getDogImage(){

let response = await fetch(url);

let data: perro = await response.json();

return data;

}

let imgPerro = getDogImage();

imgPerro.then((data) => {
    let datos = data;
    console.log(datos);
    let img = document.createElement("img");
    img.src = datos.message;
    document.body.appendChild(img);
});
