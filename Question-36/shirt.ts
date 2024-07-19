// Question No. 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, text: string) {

    console.log(`On ${size} size of T-Shirt, ${text} is Printed.`);
}
make_shirt("Medium", "The Boys!")
make_shirt("Large", "Being Human!")
