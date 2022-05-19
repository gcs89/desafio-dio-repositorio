/* sem função
var arr = [2, 2];

var soma = arr.reduce(function(soma,i){
    return soma + i;
});

console.log(soma); */

// com função - soma o array

/*function somaNumeros (arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0); //muda numero inicial pra 0
    
}

const arr = [1, 2];

console.log(somaNumeros(arr)); */

// EXERCICIO 2

const lista = [
    {
        nome: "sabão",
        preco: 30,
    },

    {
        nome: "cereal",
        preco: 12,
    },
    {
        nome: "toalha",
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log("rodada", index +1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;

    }, saldoDisponivel);
    
}

console.log(calculaSaldo(saldoDisponivel, lista));