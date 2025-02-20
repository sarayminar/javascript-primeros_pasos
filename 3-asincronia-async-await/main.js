

// FUNCIONES ASINCRONAS ⏳
// Permiten esperar a que algo termine (como una llamada a la APIs) sin detener todo el programa.

// Ejercicio 1️⃣
// console.log("Buenos ");

// // Imprime Saray después de 5segundos
// setTimeout(()=>{
//     console.log("Saray");
// }, 5000);

// console.log("dias ");


// callback() es otra función que se ejecuta despues de que console.log ($(nombre) sea ejecutado)
// function saludar(nombre, callback){
//     console.log(`Hola, ${nombre}`);
//     callback();
// }

// saludar("Saray", ()=> console.log("¿Cómo estás?"))


// Ejercicio 2️⃣

// una Promise en JavaScript es un objeto que representa una operación asíncrona (algo que tomará tiempo)
function conseguirTitulos(){
    return new Promise((resolve, reject)=>{
      let error = false;
      setTimeout(()=>{
          if (error){
              reject("Ocurrió un error");
          } else{
              resolve("Operacion exitosa");
          }
      }, 1000);
    });
}

// llamamos a la función y usamos la promesa
conseguirTitulos()
    .then((mensaje) => console.log(mensaje)) // .then maneja éxito, se ejecuta cuando la promesa de resuelve (resolve ())correctamente
    .catch((error) => console.log(error));  // .catch maneja errores, se ejecuta cuando la promesa falla (reject())



// Async/Await

    // la palabra clave async indica que esta función es asíncrona, lo que significa que puede usar await dentro de ella.
    async function hacerAlgo(){ 
        console.log("Voy a hacer algo...");
        await new Promise((resolve) => setTimeout (resolve, 3000)); // await hace que la ejecución se detenga durante 3 segundos
        console.log("Ya terminé de hacer algo.");

    }
    
    hacerAlgo();


