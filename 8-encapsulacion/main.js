

// 🔒ENCAPSULACION
//  Consiste en ocultar los detalles internos de un objeto y solo exponer lo necesario para su uso, evitando el acceso directo a sus propiedades o métodos internos. 


// Clase Caballero que demuestra el principio de encapsulación

class Caballero {
    #durabilidadArmadura;  // Atributo privado usando # (característica moderna de JS)
    constructor(durabilidadInicial, nombre) {
        this.#durabilidadArmadura = durabilidadInicial;
        this.nombre = nombre;
    }

    // Método público que permite recibir daño de manera controlada
    recibirDaño(cantidadDaño) {
        const realHurt = Math.min(cantidadDaño, this.#durabilidadArmadura);
        this.#durabilidadArmadura -= realHurt;
        return `${this.nombre} recibió ${realHurt} puntos de daño. Durabilidad restante: ${this.#durabilidadArmadura}`
    }

    // Método público para consultar el estado de la armadura
    consultarEstadoArmadura() {
        return `La armadura de ${this.nombre} tiene ${this.#durabilidadArmadura}`;
    }

    // Método privado para reparar la armadura (solo usado internamente)
    #repararArmadura(cantidad) {
        this.#durabilidadArmadura += cantidad;
        if (this.#durabilidadArmadura > 100){
            this.#durabilidadArmadura = 100;
        }
        }
    

    // Método público que usa el método privado de manera controlada
    visitarHerrero() {
        this.#repararArmadura(50);
        return "El herrero ha reparado la armadura";
    }
}

class Enemigo{
    constructor(nombre, poderAtaque){
        this.nombre = nombre;
        this.poderAtaque = poderAtaque;
    }

    atacarCaballero(caballero){
        return caballero.recibirDaño(this.poderAtaque);
    }
}
const caballero = new Caballero(100, "Mam Saray");
const dragon = new Enemigo ("Dragón feroz", 30);
// console.log(caballero.#durabilidadArmadura); NO FUNCIONA

console.log(caballero.consultarEstadoArmadura());
console.log(dragon.atacarCaballero(caballero));
console.log(caballero.consultarEstadoArmadura());
console.log(dragon.atacarCaballero(caballero));
console.log(dragon.atacarCaballero(caballero));
console.log(caballero.visitarHerrero());
console.log(caballero.consultarEstadoArmadura());




