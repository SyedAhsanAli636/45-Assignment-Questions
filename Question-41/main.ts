//Question No. 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians_name : string[] = ["Magician-1", "Magician-2", "Magician-3"]

function show_magicians(magicians_name:string[]) {
    
    for (let index = 0; index < magicians_name.length; index++) {

        console.log(magicians_name[index]);
}
}
show_magicians(magicians_name)
