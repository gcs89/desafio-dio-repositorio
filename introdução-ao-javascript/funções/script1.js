// função anonima

/*const soma = function (a,b) {
    return a + b;
}


console.log(soma (1,2)); */

// função autoinvocável (iife)

/*
(
    function() {
        let name = "Gi";
        return name;
    }

)(); */

function minhaFuncao (objeto) {
    objeto.make = "Toyota";
}

var meuCarro = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = meuCarro.make;

minhaFuncao (meuCarro);
y = meuCarro.make;

console.log(minhaFuncao);

// CALLBACK


