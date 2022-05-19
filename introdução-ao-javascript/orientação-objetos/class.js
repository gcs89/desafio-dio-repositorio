/*class Pessoa {
    nome;
    constructor(nome) {
        this.nome = nome;
    }

    seApresente() {
        console.log(`Oi! Meu nome é ${this.nome}`);
    }
}

const giorgia = new Pessoa ("Giorgia");

giorgia.seApresente();*/

/*class Person {

    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  
  } 

const giles = new Person('Giles');

giles.introduceSelf()*/

// omitindo constructor
/*class Animal {
  sleep() {
    console.log("zzzzzZz");
  }
}

const spot = new Animal();

spot.sleep();*/

// encapsular - privando um método

class Exemplo {

  umMetodoPublico() {
    this.#umMetodoPrivado();
  }

  #umMetodoPrivado() {
    console.log("Você me chamou?");
  }

}

const meuExemplo = new Exemplo();

meuExemplo.umMetodoPublico();
//meuExemplo.#umMetodoPrivado();