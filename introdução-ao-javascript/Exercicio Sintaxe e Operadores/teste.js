/* TENTATIVA ERRADA
function numeros (numero1, numero2) {
    
    let soma1 = Number(prompt("Insira o primeiro número:"));
    let soma2 = Number(prompt("Insira o segundo número aqui"));
    let = resultado; 

    if (numero1 == numero2) {
    alert(`Os números ${numero1} e ${+numero2} são iguais`);
   /*} else if (numero1 == numero2) {
    alert(`Os números ${numero1} ${numero2} não são iguais`);
}

    function soma () {
        resultado = numero1 + numero2;
        alert(`A soma de ${numero1} + ${numero2} é ${resultado}`); 
    } 
}


numeros (); */

/* EXEMPLO USANDO RETURN NO LUGAR DO IF ELSE
function comparaNumeros(num1,num2) {
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

    if (saoIguais) {
        return "São iguais";
    }

    return "Não são iguais";

} */

/* EXEMPLO COM IF TERNARIO
function comparaNumeros(num1,num2) {
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

    return saoIguais ? "São iguais" : "Não são iguais";
    } */

    function comparaNumeros(num1,num2) {
        const primeiraFrase = criaPrimeiraFrase(num1,num2);
        const segundaFrase = criaSegundaFrase (num1,num2);

        return `${primeiraFrase} ${segundaFrase}`;

        }
    
        function criaPrimeiraFrase (num1,num2) {
            let saoIguais = "";
            
            if(num1 !== num2) {
                saoIguais = "não";
            }

            return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
        };

        function criaSegundaFrase (num1,num2) {
            const soma = num1 + num2;

            let resultado10 = "menor";
            let resultado20 = "menor";

            const compara10 = soma > 10;
            const compara20 = soma > 20;

            if (compara10) {
                resultado10 = "maior"
            }

            if (compara20) {
                resultado20 = "maior"
            }

            return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
        }

        console.log(comparaNumeros(1, 2));
