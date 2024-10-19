import { styleText } from "util";

// Obtengo todos los elementos con el atributo 'name="star-li"' que representan las estrellas
let estrellas = document.getElementsByName("star-li") as NodeListOf<HTMLElement>;

// Obtengo el botón con el id "btn-remove-content", que probablemente sirve para eliminar algo de la página
let borraContenido = document.getElementById("btn-remove-content") as HTMLButtonElement;

// Obtengo el primer elemento que tiene el atributo 'name="btn-add-content"'
let addContenido = document.getElementsByName("btn-add-content")[0] as HTMLButtonElement;

// Obtengo el campo de entrada de texto con el id "input-contenido"
let textoInput = document.getElementById("input-contenido") as HTMLInputElement;

// Obtengo el elemento 'body' de la página
let body = document.getElementsByTagName("body")[0] as HTMLBodyElement;

// Obtengo el elemento <ol> que tiene el id "lista-contenidos"
let listaOl = document.getElementById("lista-contenidos") as HTMLOListElement;

// Obtengo el <div> que tiene el id "errores"
let divError = document.getElementById("errores") as HTMLDivElement;



/**
 * Cada vez que el usuario pase el cursor por encima de una de las estrellas de los elemento 
 * de la lista esta cambiará su estado al estado opuesto. Para ello, es necesario añadirle la 
 * clase bi-star o bi-star-fill. Recuerda que el método classlist devuelve un array con cada clase 
 * de un elemento y mediante classlist.remove y classlist.toggle podemos añadir o eliminar valores 
 * al atributo class de un elemento HTML.
 * 
 * 
 * Además de lo indicado anteriormente, cuando un usuario haga clic en una de las estrellas cambiará su estado al estado opuesto.
 */

// Se recorre cada una de las estrellas en la lista 'estrellas'
estrellas.forEach(estrella => {


    estrella.addEventListener("mouseover", evento => {
        
        if (!estrella.classList.contains("clicked")) {// Si la estrella no está clicada...
            
            estrella.classList.remove("bi-star"); // Quitamos la clase de estrella vacía
            estrella.classList.add("bi-star-fill"); // Añadimos la clase de estrella llena
        }
    });

    // Se añade un evento cuando el ratón sale de la estrella "mouseout"
    estrella.addEventListener("mouseout", evento => {
        // Si la estrella no está clicada 
        if (!estrella.classList.contains("clicked")) {//Si es distinto a clicked        
            estrella.classList.remove("bi-star-fill"); // Quitamos la clase de estrella llena
            estrella.classList.add("bi-star"); // Añadimos la clase de estrella vacía
        }
    });

    // Se añade un evento cuando el usuario hace click en la estrella
    estrella.addEventListener("click", evento => {
        
        if (estrella.classList.contains("clicked")) {// Si la estrella ya está clicada...
           
            estrella.classList.remove("clicked"); // Quito la marca de que está clicada
            estrella.classList.remove("bi-star-fill"); // Quito la estrella llena
            estrella.classList.add("bi-star"); // Vuelvo a poner la estrella vacía
        } else {
            // Si la estrella no estaba clicada, entonces la marco 
            estrella.classList.add("clicked"); // Aqui se indica que está clicada añadiendo la clase 'clicked'
            estrella.classList.remove("bi-star"); // Quito la estrella vacía
            estrella.classList.add("bi-star-fill"); // Añado la estrella llena
        }
    });
});



/**
 * El botón "Añadir un nuevo contenido" añadirá un nuevo elemento a la lista de contenidos, siempre y cuando el texto
 *  introducido en el input sea diferente a vacío, de lo contrario, se mostrará un error.
 */


addContenido.addEventListener("click", evento =>{ //evento de ecucha al pulsar el boton añadir

    if(textoInput.value.trim()!=""){ //si el texto no está vacío
        //creamos el elemento estrella
        let star = document.createElement("i");
        star.classList.add("bi"); // Al haber un espacio hay que hacer dos add
        star.classList.add("bi-star");
        star.setAttribute("name","star-li"); //añadimos un atributo name
        let elementoLi = document.createElement("li"); //creo un elemento li
        let texto = document.createTextNode(textoInput.value); //creo una variable texto con el texto de input
        elementoLi.appendChild(star); //añado el elemento i
        elementoLi.appendChild(texto); //añado el texto
        listaOl.appendChild(elementoLi); //se añade el li 
        textoInput.value=""; //se pone el texto a vacio en el input


    }else{
        let mensajeErr = document.getElementById("p-errores") as HTMLParagraphElement;
        mensajeErr.textContent="El campo de texto está vacío";
        mensajeErr.style.color= "red";
        divError.appendChild(mensajeErr);
    }
})


/**
 * El botón "Borrar contenido" eliminará el contenido de la lista cuyo texto sea igual al indicado
 * en el input. De nuevo, si el valor del input es vacío se mostrará un error.
 */

borraContenido.addEventListener("click", evento =>{ //creo un eventlistener
      let texto = textoInput.value; //recojo el cmapo de texto del input

      if(texto.trim()){ //si el campo no esta vacío...

        let listali = listaOl.getElementsByTagName("li"); //recojo todos los elementos li
        
        for (let index = 0; index < listali.length; index++) {
            if(listali[index].textContent?.trim()==texto.trim()){ //busco el li el cual su contenido sea igual al texto introducido

               listaOl.removeChild(listali[index]);//borramos el hijo <li> a la <ol>
               textoInput.value=""; // seteamos el texto y borramos lo escrito
               break;
            }  else{
                let mensajeErr = document.getElementById("p-errores") as HTMLParagraphElement; //recogemos elemento p-errores
                mensajeErr.textContent="No hay coincidencias";
                mensajeErr.style.color= "red";
                divError.appendChild(mensajeErr);        //mostramos el mensaje de error
        }
        }

      }else{
        let mensajeErr = document.getElementById("p-errores") as HTMLParagraphElement;
        mensajeErr.textContent="No se puede borrar ningún elemento <li> porque el campo de texto está vacío";
        mensajeErr.style.color= "red";
        divError.appendChild(mensajeErr);
      }
})

















    
 
 



