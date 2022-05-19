/* filter
let frutas = ["maçã fuji", "maçã verde", "laranja", "abacaxi"]; //usando let porque com const deu ruim

//tem que declarar de novo
frutas = frutas.filter((fruta) => fruta.includes("maçã"));

console.log(frutas); */

/*
function filtraFrutas (arr) {
    const filtraMaca = arr.filter((item) => item.includes("maçã"));
    return filtraMaca; 
}

console.log (filtraFrutas(["maçã fuji", "maçã verde", "laranja", "abacaxi"])); */

/* tentativa de outra forma - deu CERTO*/
function filtraFrutas (arr) {
    return arr.filter(callback);
}

function callback(item) {
    const filtraMaca = (item) => {item.includes("maçã")};
    return filtraMaca;
}

const frutas = ["maçã fuji", "maçã verde", "laranja", "abacaxi"];

console.log(filtraFrutas(frutas)); 
