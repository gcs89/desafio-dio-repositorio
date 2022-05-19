// primeira solução
/*function verificaPalindromo (string) {
    if (!string) return "string inexistente"; //verificação se a variavel existe.

    return string.split("").reverse().join("") === string

}


//console.log (verificaPalindromo("")); */

// segunda solução

function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){ //é dividido por 2 porque só precisa verificar até a metade da string.
        if (string[i] !== string[string.length -1 - i]){ //menos 1 porque a posição começa em 1 e não em 0.
            return false; // isso aqui faz parar a função
        }
    }

    return true; // se nada parar a função antes, vai retornar true.
}

console.log(verificaPalindromo2("gato"));