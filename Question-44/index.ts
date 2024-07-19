// Question No. 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(array:string[]) {

    console.log(`Your order is ready included with:`);

    console.log(`${array}`);

    console.log(`Enjoy your Meal !`);
}
sandwich(["Extra Cheez", "Salad", "Chicken Piece"])

sandwich(["Extra Toopings", "Drink", "French Fries"])

sandwich(["Extra Sause", "Ketchup", "Crispy Chicken"])