
// CLASE JS 🏛️
// sirven para crear moldes de objetos, permitiendo definir propiedades y métodos que los objetos creados a partir de esa clase compartirán, facilitando la organización y reutilización de código.

class Persona{
  // Constructor de la clase: se ejecuta automáticamente cuando creas una nueva instancia de esa clase, su función es inicializar las propiedades del objeto con los valores que se le pasan al crear el objeto.

    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;    
    }

    // se define la función saludar que puede ser llamada por cualquier objeto Persona
    saludar(){
      console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} y mi trabajo es de ${this.profesion}`);
  }
}

// creación de un objeto "saray" usando la clase Persona
const saray = new Persona("Saray", 23, "estudiante")
console.log(saray)


// creación de un objeto "ainhoa" usando la clase Persona
const ainhoa = new Persona("Ainhoa", 23, "pedagoga")
console.log(ainhoa)

// llama al método "saludar" en el objeto "saray" para que imprima el mensaje de saludo
saray.saludar()
ainhoa.saludar()


