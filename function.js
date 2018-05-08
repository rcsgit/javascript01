function findBiggestFraction(a,b){
    var result;
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 7/5;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);
//console.log(fractionResult);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);

console.log("Fraction " + fractionResult[0] + " with value of " + fractionResult[1] + " is the biggest");