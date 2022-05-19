// usando interfaces
/* interface IAnimal {
    nome: string;
    tipo: "terrestre" | "aquático";
    domestico: boolean;
    //executarRugido(alturaDecibeis: number): void;
}

interface iFelino extends IAnimal {
    visaoNoturna: boolean;

}

interface iCanino extends IAnimal {
    porte: "pequeno" | "medio" | "grande";
}

type IDomestico = iFelino | iCanino;

const animal: IDomestico = {
    domestico: true,
    nome: "cachorro",
    porte: "medio",
    tipo: "terrestre",
    visaoNoturna: false,
}


/*const animal: IAnimal = {
    nome: "Elefante",
    tipo: "terrestre",
    //executarRugido: (alturaDecibeis) => (`${alturaDecibeis} dB`)
} */
//animal.executarRugido("oi")
/*const felino: iFelino = {
    nome: "gato",
    tipo: "terrestre",
    visaoNoturna: true,
}*/
// usando type
/*
type IAnimal = {
    nome: string;
    tipo: "terrestre" | "aquático";
    executarRugido(alturaDecibeis: number): void;
}
*/
var input = document.getElementById("input");
input.addEventListener("input", function (event) {
    // console.log("digitei");
    var i = event.currentTarget;
    console.log(i.value);
});
