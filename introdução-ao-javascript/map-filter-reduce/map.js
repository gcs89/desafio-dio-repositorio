// sem this - eu que fiz errado 
/* let multiplicaNumeros = [1, 2, 3];

multiplicaNumeros = multiplicaNumeros.map((item) => item * 2);

console.log(multiplicaNumeros); */

// com this - eu que fiz errado
/*let multiplicaNumeros = [1, 2, 3];

multiplicaNumeros = multiplicaNumeros.forEach(callback(currentValue [, index [[1, 2, 3]])[, thisArg]);

console.log(); */

//CERTO - COM THIS

/*const maca = {
    value: 2,
}

const laranja = {
    value:3,
}

function mapComThis (arr, thisArg) {
    return arr.map(function(item){ //função de callback 
        return item * this.value;
    }, thisArg); 
}


const nums = [1, 2];

console.log("this -> maca", mapComThis(nums, maca)); // aqui, o maca é o thisArg

console.log("this -> laranja", mapComThis(nums, laranja)); // aqui, o laranja é o thisArg */

// CERTO SEM THIS


function mapSemThis (arr) {
    return arr.map (function (item) {
        return item *2;
    })
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

console.log(nums); 