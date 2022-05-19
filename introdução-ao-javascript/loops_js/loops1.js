// IF/ELSE

/*
function numeroPositivo(num) {
    let resultado;

    if(num < 0) {
        resultado = false;
    }else  {
        resultado = true;
    }

    return resultado;
}

numeroPositivo(2);
numeroPositivo(-9); 

console.log(numeroPositivo(2)); */

// SWITCH CASE = comparação de tipo e valor. Precisa ter um default (quando nenhuma das opções acontece, cai nele)

// WHILE E DO WHILE

/*
function exemploWhile() {
    let num = 0;

    while(num <= 5) {
        console.log(num);
        num++;
    }
}

exemploWhile(); */

// DO WHILE
/*
function exemploDoWhile(){
    let num = 0;

    do {
        console.log(num);
        num++;
    } while(num <= 5)
}

exemploDoWhile(2)

console.log(exemploDoWhile); */

// THIS no index

// CALL

/*const pessoa = {
    nome: "Miguel",
};

const animal = {
    nome: "Murphy",
};

function getSomething() {
    console.log(this.nome);
} 

getSomething.call(animal); */

//ARROW FUNCTIONS

/*const helloWorld = () => {
    return "Hello";
}*/

//const soma = (a, b) => a+b;
//soma (4, 6);

const soma = a => a;
soma (4);

console.log(soma(4));



//const helloWorld = () => "Hello World!";
