/* DIFERENÇA ENTRE VAR E LET. É ACONSELHADO APENAS USAR LET.
var firstName = "Joao";
var lastName = "Souza";

if (firstName === "Joao") {
    let lastName = "Rodrigues";
    var firstName = "Pedro";
    lastName = "Silva";

    console.log(lastName);
}   

console.log(firstName, lastName); */

// CONSTANTES Não pode reatribuir nem declarar o valor de uma constante.
const FIRST_NAME = "Giorgia";
console.log(FIRST_NAME);
