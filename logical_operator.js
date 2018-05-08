var a = 10, b = 10, c = 10, d = 1;
//AND
if (a == b && c == d){console.log(true)};
//OR
if (a == b || c == d)(console.log("OR: true"))
//XOR
if ((a == b || c == d) && ((a == b) != (c == d))){console.log("XOR: true")}

//Ternary
a == b ? console.log("Match") : console.log("No match");