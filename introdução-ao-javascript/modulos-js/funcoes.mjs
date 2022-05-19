
function mostraIdade(nome,idade) {
    return `A idade de ${nome} é ${idade}.`;
}

function mostraCidade(nome,cidade) {
    const suaCidade = cidade;
    return `A cidade em que ${nome} vive é ${cidade}.`;
}

function mostraHobby(nome,hobby) {
    const seuHobby = hobby;
    return `O hobby de ${nome} é ${hobby}.`;
}

export { mostraIdade, mostraCidade, mostraHobby };