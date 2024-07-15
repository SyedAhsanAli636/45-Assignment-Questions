// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. 

let guest_List : string [] = ["Asim", "Rehan", "Dawood"]

let message : string = "You are invited for Dinner at my Home tonight!"

for (let index = 0; index < guest_List.length; index++) {

    console.log(` Mr.${guest_List[index]}, ${message}`);
}
