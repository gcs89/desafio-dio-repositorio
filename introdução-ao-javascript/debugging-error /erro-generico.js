try {
    throw new Error ("Ooops!");
} catch (e) {
    console.error(e.name + ": " + e.message);
}

/*function doWork() {
    try {
        doFailSomething();
    } catch(err) {
        throw new Error ("Failed in some way", { cause: err});
    } try {
        doFailAnotherWay();
    } catch(err) {
        throw new Error ("Failed in another way", { cause: err });
    }
}

try {
    doWork();
} catch (err) {
    switch(err.message) {
        case "Failed in some way" :
            handleFailSomeWay(err.cause);
            break;
        case "Failed in another way" :
            handleFailInAnotherWay(err.cause);
            break;
    }
} */