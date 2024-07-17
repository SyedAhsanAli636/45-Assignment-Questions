// Question Node. 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let ahsan : string = "Ahsan"

console.log(ahsan === "Ahsan");

console.log(ahsan != "Ahsan");

// • Tests using the lower case function

let name : string = "AHSAN"
console.log(name.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number1 : number = 5
let number2 : number = 4

console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);

// • Tests using "and" and "or" operators

 let number3 : number = 10
 let number4 : number = 5

 console.log(number3 === number4 && number3 === number4);
 console.log(number3 < number4 || number3 > number4);
 
// • Test whether an item is in a array

let students : string[] = ["Ali", "Ahmed", "Sana", "Sara"];

console.log(students.includes("Sana") === true);

// • Test whether an item is not in a array

console.log(students.includes("Sunny") === false);
