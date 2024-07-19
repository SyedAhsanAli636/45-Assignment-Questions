//Question No. 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians_name : string[] = ["Magician-1", "Magician-2", "Magician-3", "Magician-4"]

function copy_array(magicians_name:string[]) {
    return [...magicians_name]
}
let array_copy = copy_array(magicians_name)

function make_great(magicians_name:string[]) {

    for (let index = 0; index < magicians_name.length; index++) {

        array_copy[index] = `The great ${magicians_name[index]}`
    }
}
make_great(array_copy)

function show_magician(magicians_name:string[]) {
    
    return magicians_name
}
console.log("Origional Array:", show_magician(magicians_name));

console.log("Modified Array:", show_magician(array_copy));
