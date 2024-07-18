// Question No. 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

let persons_age : number = 32

// • If the person is less than 2 years old, print a message that the person is a baby.

if (persons_age == 2) {
    console.log("The person is a Baby.");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

else if (persons_age < 4) {
    console.log("The person is a Toddler.");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

else if (persons_age < 13) {
    console.log("The person is a Kid.");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

else if (persons_age < 20) {
    console.log("The person is a Teenager.");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

else if (persons_age < 65) {
    console.log("The person is an Adult.");
}
// • If the person is age 65 or older, print a message that the person is an elder.

else {
    console.log("The person is an Elder.");
}
