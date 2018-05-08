function logScope(){
    var localVar = 2;

    if(localVar){
        let localVar = "I'm different";
        console.log("nested localVar: ", localVar);
    }

    console.log("logScope localVar: ", localVar);
}

logScope();

const const01 = 10;

console.log(Object.keys({const01}).toString(), typeof const01);