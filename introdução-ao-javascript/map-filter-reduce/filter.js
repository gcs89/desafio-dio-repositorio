

function filtraPares (arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0; // pra deixar os impares, mudar para !==
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));