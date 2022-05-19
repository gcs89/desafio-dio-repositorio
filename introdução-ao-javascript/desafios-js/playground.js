let lines = gets().split("\n");

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let N = parseInt(lines.shift());
const frase = " ";

for (let i =1; i <= N; i++) {
    if (i === N) frase += "HO!";
    else frase += "HO ";
}
print(frase);
