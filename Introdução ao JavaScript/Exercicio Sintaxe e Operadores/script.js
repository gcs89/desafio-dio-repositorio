/* Criar uma função que recebe dois numero como parametros */

function comparaNumeros (num1, num2) {
    const saoIguais = num1 === num2; /*confira se são iguais*/
    const soma = num1 + num2; /*conferir se soma é maior que 10 ou menor que 20*/

    /*retorne uma string dizendo se num1 e num2 são/não são iguais*/
    if(saoIguais) {
        return "São iguais";
    }

    return "Não são iguais";
}

comparaNumeros (0);
