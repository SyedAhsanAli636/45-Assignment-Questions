// Question No. 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

// Version-1

let alien_color1 : string = "green"

if (alien_color1 === "green") {
    console.log("The Player just earned 05 Points for shooting the alien.");
}
else {
    console.log("The Player just earned 10 Points for shooting the alien.");
}

// Version-2

let alien_color2 : string = "yellow"

if (alien_color2 === "green") {
    console.log("The Player just earned 05 Points for shooting the alien.");
}
else {
    console.log("The Player just earned 10 Points for shooting the alien.");
}
