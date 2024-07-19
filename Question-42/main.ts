//Question No. 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians_name : string[] = ["Magician-1", "Magician-2", "Magician-3", "Magician-4"]

function make_great(magicians_name:string[]) {
    
    for (let index = 0; index < magicians_name.length; index++) {

        magicians_name[index] = "The Great" + magicians_name[index];
}
}
make_great(magicians_name)

console.log(magicians_name);
