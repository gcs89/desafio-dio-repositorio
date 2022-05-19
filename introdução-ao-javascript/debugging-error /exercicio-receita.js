const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven (actualMinutes) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutes;
}

remainingMinutesInOven();
console.log("Tempo restante no forno: ", remainingMinutesInOven(5));

function preparationTimeInMinutes(numberOfLayers){
    return numberOfLayers * 2;
}

preparationTimeInMinutes();
console.log("Tempo de montagem: ", preparationTimeInMinutes(5));

function totalTimeInMinutes (numberOfLayers,actualMinutes) {
    return preparationTimeInMinutes + actualMinutes;
} 

totalTimeInMinutes();


