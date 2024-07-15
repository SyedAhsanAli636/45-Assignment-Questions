// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guest_List = ["Asim", "Rehan", "Dawood"];
console.log(guest_List);
let message = "You are invited for Dinner at my Home tonight!";
for (let index = 0; index < guest_List.length; index++) {
    console.log(` Mr.${guest_List[index]}, ${message}`);
}
console.log(`Note: 
    Mr.${guest_List[2]}, is unable to join us at Dinner Tonight.`);
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let guest_Notattending = guest_List.pop();
let new_guest = guest_List.unshift("Shahnawaz");
console.log(guest_List);
//• Print a second set of invitation messages, one for each person who is still in your list.
for (let index = 0; index < guest_List.length; index++) {
    console.log(` Mr.${guest_List[index]}, ${message}`);
}
export {};
