// Question No. 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let guest_List : string [] = ["Asim", "Rehan", "Dawood"]

console.log(guest_List);

let message : string = "You are invited for Dinner at my Home tonight!"

for (let index = 0; index < guest_List.length; index++) {

    console.log(` Mr.${guest_List[index]}, ${message}`);
}
console.log(`\nNote: Mr.${guest_List[2]}, is unable to join us at Dinner Tonight.\n`);

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let guest_Notattending = guest_List.pop()

let new_guest = guest_List.unshift("Shahnawaz")

console.log(guest_List);

//• Print a second set of invitation messages, one for each person who is still in your list.

for (let index = 0; index < guest_List.length; index++) {

    console.log(` Mr.${guest_List[index]}, ${message}`);
}

// Question No. 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log(`\nHello Guys! we just found a bigger Dinner Table.\n`);

// • Add one new guest to the beginning of your array.
guest_List.unshift("Mujeeb")
console.log(guest_List);

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
guest_List.splice(2, 0, "Asad")
console.log(guest_List);

guest_List.push("Hassan")
console.log(guest_List);

// • Print a new set of invitation messages, one for each person in your list.

for (let index = 0; index < guest_List.length; index++) {

    console.log(` Mr.${guest_List[index]}, ${message}`);
}

// Question No. 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log(`\nSorry Guys! I just found out that our new Dinner Table won’t arrive in time for the dinner, and I have space for only two guests.\n`);

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
let removed_guest1 = guest_List.pop()
console.log(`Mr.${removed_guest1}, Sorry! You are not invited for Dinner.`);

let removed_guest2 = guest_List.pop()
console.log(`Mr.${removed_guest2}, Sorry! You are not invited for Dinner.`);

let removed_guest3 = guest_List.pop()
console.log(`Mr.${removed_guest3}, Sorry! You are not invited for Dinner.`);

let removed_guest4 = guest_List.pop()
console.log(`Mr.${removed_guest4}, Sorry! You are not invited for Dinner.\n`);

console.log(guest_List);

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

for (let index = 0; index < guest_List.length; index++) {

    console.log(` Mr.${guest_List[index]}, ${message}`);
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

guest_List.pop()
guest_List.pop()

console.log(guest_List);

// Question No. 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log(`\nCurrently, I am inviting ${guest_List.length} guests for the Dinner tonight.`);

