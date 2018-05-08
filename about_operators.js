var a = 10, b = "5";
var c = 10, d = 5;

console.log(a+b + "\n\n");
console.log(c+d);
console.log(c+d + b + d);
console.log(a-d);
console.log(b-a);
console.log(b*20);
console.log(10 * "terra");
console.log("30"/"2");
/* + operator works as a mathematical operator and a string concatenator
 the + operator will handle all number that appers after a string as a string, which means that all numbers after a string will be concatenated
 as part of that string
 For the other numerical operators, number declared as string will be treated as numbers and the "numerical value of them" will be used. 
 If a string per say, for instance "three", is placed as one of the operators, a NaN (Not a Number) error will be raised by the interpreter/runtime*/