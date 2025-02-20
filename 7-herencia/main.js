
// 🧬 HERENCIA
// Nos permite que una clase hija herede propiedades y métodos de una clase padre, evitando repetir código. Se usa con la palabra clave extends.

class Animal {
    constructor(nombre, especie){
        this.nombre = nombre;
        this.especie = especie;
    }

    mostrarInfo(){
        console.log(`Nombre: ${this.nombre}. Especie: ${this.especie}`)
    }
}


class Perro extends Animal{
    constructor(nombre, raza){
        super(nombre, "Perro")
        this.raza = raza;
        this.vacunas = []

    }

    agregarVacuna(vacuna){
        this.vacunas.push(vacuna)
        console.log(`${vacuna} añadida para ${this.nombre}`)
    }
}


const perro1 = new Perro("Brisa", "Setter inglés")

perro1.agregarVacuna("Rabia")
console.log(perro1)
perro1.mostrarInfo()


