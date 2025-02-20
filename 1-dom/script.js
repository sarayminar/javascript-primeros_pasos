
// DOM 🌐

// // cambiamos el texto del elemento con la clase "parrafo" por el texto que contenga la clase
document.querySelector(".parrafo").textContent = "hago magia y cambio cosas"
const hola = document.querySelector("parrafo")
console.log(document.querySelector(".parrafo"))

// cambiamos el texto del elemento que tenga el id "parrafo" por el texto que contenga el id
document.getElementById("parrafo").textContent = "pum pum pum"
const title = document.getElementById("parrafo")
title.textContent = "Aloja mundo"




// textContent

// se obtiene el elemento con el id "listaFrutas" (en este caso el <ul>) y se guarda en la variable 'ulTag'.
const ulTag = document.getElementById("listaFrutas");

// se imprime el contenido de la variable 'ulTag' en la consola. Esto debería mostrar el <ul> si se encuentra en el HTML.
console.log(ulTag);

// se define un arreglo con nombres de frutas, llamado 'fruits'.
const fruits =["apple", "orange", "watermelon", "strawberry"];

// se recorre el arreglo 'fruits' usando el método 'forEach'. Por cada fruta en el arreglo, se ejecuta la función dentro de 'forEach'.
fruits.forEach(fruit => {
    // se crea un nuevo elemento <li> y se guarda en la variable 'li'.
    const li = document.createElement("li");
    
    // se agrega el nuevo <li> como hijo de 'ulTag' (es decir, dentro del <ul> en el HTML).
    ulTag.appendChild(li);
    
    // se asigna el nombre de la fruta al contenido de texto del <li> creado.
    li.textContent = fruit;
});




// // Creando un elemento por la posición 0 de mi array

const li1 = document.createElement("li")
ulTag.appendChild(li1);
li1.textContent = fruits[0];


// Creando un elemento por la posición 1 de mi array

const li2 = document.createElement("li")
ulTag.appendChild(li2);
li2.textContent = fruits[1];


// Creando un elemento por la posición 2 de mi array

const li3 = document.createElement("li")
ulTag.appendChild(li3);
li3.textContent = fruits[2];


// Creando un elemento por la posición 3 de mi array

const li4 = document.createElement("li")
ulTag.appendChild(li4);
li4.textContent = fruits[3];



// Crear una alerta al pulsar un boton
const greetButton = document.getElementById("button_greet")

console.log(greetButton)

greetButton.addEventListener("click", function(){
    console.log("Hola desde boton");
    alert("Esto es una alerta")
})






