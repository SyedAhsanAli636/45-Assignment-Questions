// Question No. 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ["AHSAN", "hassan", "ather", "MOHSIN", "Faizan"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["Rehan", "ATHER", "Asad", "Arsalan", "ahsan"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let insensitive = [];
for (let index = 0; index < current_users.length; index++) {
    insensitive.push(current_users[index].toLowerCase());
}
for (let index = 0; index < new_users.length; index++) {
    if (insensitive.includes(new_users[index])) {
        console.log(`${new_users[index]} enter a new username.`);
    }
    else {
        console.log(`${new_users[index]} The username is available.`);
    }
}
export {};
