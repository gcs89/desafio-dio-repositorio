// função pra pegar os gatinhos

const BASE_URL = "https://thatcopy.pw/catapi/rest/"; // api (tem que colocar a url completa, com a barra no final)
const catBtn = document.getElementById("change-cat"); // botão no html
const catImg = document.getElementById("cat"); // imagem


const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json(); //transforma em json

        return json.webpurl;
    }
    catch(e) { //se algo  der errado, o catch vai mostrar o erro no console
        console.log(e.message);
    }
};

// essa função vai dar um await no getCats
const loadImg = async () => {
    catImg.src = await getCats();
}

// adiciona um listener no botão. ativa o loadImg sempre que der um clique.

catBtn.addEventListener("click", loadImg);

loadImg();
