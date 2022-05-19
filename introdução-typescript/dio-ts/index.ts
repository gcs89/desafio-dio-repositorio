
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

/* 

// tratando a tag input (HTMLInputElement)
const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
    // console.log("digitei");
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value)
}); */

// generic types

/*function preencheLista<NaoSei>(array: any[], valor: NaoSei) {
    return array.map(item => item + valor)
}

preencheLista([1, 2, 3], 1); */

// condicionais a partir de parametros
/*
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: "gerente" | "coordenador" | "supervisor";
}

function redirecione(usuario: IUsuario | IAdmin) {
    if("cargo" in usuario) {
        // redirecionar para a admin area
    } // redirecionar para a area de usuario
} */

/* 
// variavel opcional com "?"" 
interface IUsuario {
    id: string;
    email: string;
    cargo?: "gerente" | "coordenador" | "supervisor" | "funcionario";
}

function redirecione(usuario: IUsuario) {
    if(usuario.cargo) {
        // redirecionar(usuario.cargo)
    }

    // redirecionar para a area do usuario
} */

// variaveis com readonly e private

interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof ICachorro]-?: ICachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;
    
    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro("apolo", 14);
