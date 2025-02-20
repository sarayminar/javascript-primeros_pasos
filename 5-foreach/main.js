

// Ejemplo 1️⃣
const frutas = ["manzana", "pera", "melon", "melocoton", "naranja"];
frutas.forEach(function(fruta) {
    console.log(fruta);
});


// Ejemplo 2️⃣
const numbers = [1,5,6,18,21,23,33,38,40,41,52,57,60,66]
let evenCont = 0
let oddCont = 0
numbers.forEach(function(num) {
    if (num % 2 === 0) {
        evenCont++
    } else { oddCont++
    }
})
console.log("En el array hay " + evenCont + " números pares y " + oddCont + " números impares.")


// Ejemplo 3️⃣
const ciudades = ["Oviedo", "Gijón", "Murcia", "Madrid", "Orense", "Almería", "Zaragoza", "Elche"]
let vocalCont = 0
const vocals = ["A", "E", "I", "O", "U"]
ciudades.forEach(function(ciudad) {
    if (vocals.includes(ciudad[0])) {
        vocalCont++
    }
})

console.log ("Hay un total de " +  vocalCont + " ciudades que empiezan por vocal.")



