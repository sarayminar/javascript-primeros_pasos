
// 🔍Getter  ---> Se usa para obtener el valor de una propiedad de manera controlada. Se accede como si fuera una propiedad normal, pero ejecuta una función interna.

// 📝 Setter ---> Se usa para modificar una propiedad de manera controlada. Permite validar o transformar el valor antes de asignarlo.



class Producto {
  // El constructor inicializa los valores cuando se crea un objeto de esta clase
  constructor(nombre, precio, stock) {
      this._nombre = nombre; 
      this._precio = precio; 
      this._stock = stock;   
  }

  // Getter para obtener el nombre, precio y stock del producto
  get nombre() {
      return this._nombre;
  }

  get precio() {
      return this._precio;  
  }

  get stock() {
      return this._stock;
  }

  // Setter para modificar el nombre, precio y stock del producto con validación
  set nombre(nuevonombre) {
      if (typeof nuevonombre == "string" && nuevonombre.length >= 3) {
          this._nombre = nuevonombre; // Se cambia el nombre solo si es un texto con 3 o más caracteres
      } else {
          console.log(`Este nombre "${nuevonombre}" es incorrecto. Debe ser un texto con al menos 3 caracteres.`);
      }
  }

  
  set precio(nuevoprecio) {
      if (nuevoprecio > 0) {
          this._precio = nuevoprecio; // Se cambia el precio solo si es mayor que 0
      } else {
          console.log(`El precio "${nuevoprecio}" es incorrecto. Debe ser mayor que 0.`);
      }
  }


  set stock(nuevoStock) {
      if (Number.isInteger(nuevoStock) && nuevoStock <= this._stock && nuevoStock > 0) {
          this._stock -= nuevoStock; // Se reduce el stock solo si el número es válido
      } else {
          console.log(`Stock inválido: "${nuevoStock}". Debe ser un número entero positivo y menor o igual al stock actual.`);
      }
  }


  // Método para mostrar la información del producto en la consola
  mostrar() {
      console.log(`Nombre: ${this._nombre}`);
      console.log(`Precio: ${this._precio}`);
      console.log(`Stock: ${this._stock}`);
      console.log("----------------------");
  }
}

// Creación de productos (instancias de la clase Producto)
const jamon = new Producto("Jamon Joselito", 450, 25);
const queso = new Producto("Queso Cabrales", 24, 100);

// Mostrar información de los productos
jamon.mostrar();
queso.mostrar();

// Intentar modificar los valores con los setters
jamon.nombre = 255858;  
jamon.precio = 250;     
jamon.stock = 50;  

// Mostrar información del producto jamón después de los cambios
jamon.mostrar();


