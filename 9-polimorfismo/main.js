
// 🔀 POLIMORFISMO
// Se trata de la capacidad de un método para comportarse de diferentes maneras según el objeto que lo llame. Esto permite que diferentes clases o funciones usen el mismo nombre de método pero con implementaciones distintas, facilitando la reutilización y flexibilidad del código. 

// ======================
// CABALLERO (SUBCLASE)
// ======================
class Caballero extends Personaje {
    constructor(nombre, fuerza, destreza) {
      super(nombre, fuerza, destreza);
      this.arma = 'espadaPesada'
      
    }
  
    // Polimorfismo
    atacar() {
      const daño = this.fuerza * 2;
      return `${this.nombre} blande su ${this.arma} y causa ${daño} puntos de daño`;
    }
  }

  const caballero = new Caballero("Tony", 15, 8);
  console.log(caballero.atacar());

  const personaje = new Personaje("Rico", 12, 3);
  console.log(personaje.atacar());



// ======================
// MAGO (SUBCLASE)
// ======================
class Mago extends Personaje {
    constructor(nombre, fuerza, destreza, nivelMagia) {
      super(nombre, fuerza, destreza);
      this.nivelMagia = nivelMagia;
      this.hechizos= ["bola de fuego", "ventisca", "electrocutar"];
    }
  
    // Método específico del Mago
    
    hechizoAleatorio(){
        return this.hechizos [Math.floor(Math.random() * this.hechizos.length)];
    }
    // Polimorfismo: Atacar usando magia
    atacar() {
      const hechizos = this.hechizoAleatorio();
      const daño = this.nivelMagia * 3;
      return `${this.nombre} lanza ${hechizo} y causa ${daño} puntos de daño magico`
    }
  }


  const mago = new Mago ("Harry", 1000, 3, 20);
  console.log(mago.atacar());
  console.log(mago.atacar());
  console.log(mago.atacar());



// ======================
// PÍCARO (SUBCLASE)
// ======================
class Picaro extends Personaje {
    constructor(nombre, fuerza, destreza) {
      super(nombre, fuerza, destreza);
      this.arma = "daga dual 🗡️";
    }
  
    // Polimorfismo: Ataque complejo con lógica adicional
    atacar() {
      const baseDaño = this.destreza * 2;
      let resultado = `${this.nombre} usa ${this.arma} `;
      
      // Probabilidad de ataque crítico (30%)
      if (Math.random() < 0.3) {
        const critico = baseDaño * 2;
        resultado += `¡CRÍTICO! ${critico} puntos de daño 💥`;
      } 
      // Probabilidad de ataque doble (50%)
      else if (Math.random() < 0.5) {
        resultado += `con doble golpe: ${baseDaño} + ${baseDaño} = ${baseDaño * 2} daño ✨`;
      } 
      // Ataque normal
      else {
        resultado += `y causa ${baseDaño} puntos de daño`;
      }
      
      return resultado;
    }
  }


  const picaro = new Picaro ("Juan", 200, 100);
  console.log(picaro(atacar));