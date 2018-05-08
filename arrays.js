// var list01, list02;
// list01 = [10, 20, 30, 40, 50];

// console.log(list01[1+2]);

// list02 = new Array("one", "two", "three", "four", "five");

// console.log(list02[3]);


var pens;
pens = ["red", "blue", "green", "orange"];

//console.log("Before: ", pens);
//console.log("Array length: "+ pens.length);

//pens.reverse();
//pens.shift(); //remove the first element of the array
//pens.unshift("purple", "black");
//pens.pop(); //remove the last item of the array
//pens.push("pink", "prussian blue");
//pens.splice(2, 1);
//console.log("After: ", pens);

// var newPens = pens.slice();
// newPens.push("black");
// console.log("New pens: " + newPens);

// var results = pens.indexOf("orange", 1);
// console.log("The index possition is: " + results);
// console.log("The index possition is: " + pens[results]);

var arrayString = pens.join(" - | - ");
console.log("String from array: " + arrayString);