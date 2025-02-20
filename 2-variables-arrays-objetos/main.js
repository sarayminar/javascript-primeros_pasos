// console.log('La consola es fundamental SIEMPRE')
//Comentarios en JavaScript// // Ctrol ç//
/*Comentarios
de varias lineas*/



// VARIABLES 📝


// Ejemplo 1️⃣

// const ---> variables cuyo valor no cambiará después de su asignación inicial
const name="Celia"
console.log(name);

//  let --->  variables cuyo valor puede cambiar con el tiempo
let ageCelia = 33
let ageAnya = 3
let ageJade =  1
console.log("Jade" + ageJade)

let isConnected= true;
let direction = null;
let result 
console.log(result)
console.log(direction)




// ARRAYS 📚
// [ ] - corchetes



// Ejemplo 1️⃣
const tareas = ["Fregar los platos", "Barrer", "Hacer la compra"]
console.log(tareas[0])

tareas.splice(1, 0, "sacar al perro")
console.log(tareas)

const numeroTarea = ["primera", "segunda", "tercera", "cuarta"]
for (let i=0; i < tareas.length;i++){
    console.log("La " + numeroTarea[i] + "tarea es: " + tareas[i])
}



// Ejemplo 2️⃣
const coders = ["Julia", "Natalia", "Ángel", "Rafael"]
const fruits = ["manzana", "pera", "fresa", "mango"]
const mixed = [1, true, "Chanyeol"]
ruralCoder = 
[
    {
        name: "Noe",
        age: 47,
        isConnected: true,
        direction: null,
        pets: ["Scooby", "Cora"]
    }
    , 
    {
        name: "Julia",
        age: 26,
        isConnected: true,
        direction: null,
        pets: ["Rizik", "Lapulya"]
    }
]
console.log(ruralCoder)





// OBJETOS🧰
// { } - llaves
// Nombre de objeto - Noe


// Ejemplo 1️⃣
const noe = {
    name: "Noe",
    age: 47,
    isConnected: true,
    direction: null,
    pets: ["Scooby", "Cora"]
}

console.log(noe.age)


// Ejemplo 2️⃣
const pelicula = {
        titulo: "Titanic",
        protagonista: "Leonardo Di Caprio",
        estreno: 1997,
    }
    console.log(pelicula.protagonista)
    
    const tienda = {
        nombre: "La tiendina",
        trabajadores: 3,
        ubicacion:{
            ciudad: "avilés",
            direccion: "las meanas"
        },
        especialidad: "cachopos",
        estaAbierta: true
    }
    console.log(tienda.direccion, + "," +  tienda.ubicacion.direccion)
    
    const calificaciones = {
        nombre: "Saray",
        ingles: 8,
        programacion: 9,
        html: 10
    }
    const media = (calificaciones.ingles + calificaciones.programacion + calificaciones.html)/3
    console.log("La media de tus asignaturas es de: " + media)
    
