/* More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.

* Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.
* Add one new guest to the beginning of your array.
* Add one new guest to the middle of your array. 
*  Use append() to add one new guest to the end of your list. 
* Print a new set of invitation messages, one for each person in your list. */

let guests : string [] = ["Alice", "Bob", "Charlie"];
console.log("I founf bigger table!");

// add guests
guests.unshift("David");
guests. splice(guests.length / 2, 0, "Bob");
guests.push("Alice");

guests.forEach (guest => console.log(`Dear ${guest}, you are invited to dinner.`));