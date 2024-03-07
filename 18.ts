/* Seeing the World: Think of at least five places in the world you’d like to visit.

* Store the locations in a array. Make sure the array is not in alphabetical order.
* Print your array in its original order.
* Print your array in alphabetical order without modifying the actual list.
* Show that your array is still in its original order by printing it.
* Print your array in reverse alphabetical order without changing the order of the original list.
* Show that your array is still in its original order by printing it again.
* Reverse the order of your list. Print the array to show that its order has changed.
* Reverse the order of your list again. Print the list to show it’s back to its original order.
* Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
* Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */

// Store the locations in an array (not in alphabetical order)
let places = ["Tokyo", "Paris", "Machu Picchu", "Santorini", "Great Barrier Reef"];

// Print the array in its original order
console.log("Original order:");
console.log(places);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log([...places].sort());

// Show that the array is still in its original order by printing it
console.log("\nOriginal order (unchanged):");
console.log(places);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log([...places].sort().reverse());

// Show that the array is still in its original order by printing it again
console.log("\nOriginal order (unchanged):");
console.log(places);

// Reverse the order of the list and print the array to show that its order has changed
console.log("\nReversed order:");
console.log(places.reverse());

// Reverse the order of the list again and print the list to show it’s back to its original order
console.log("\nOriginal order (after reversing again):");
console.log(places.reverse());

// Sort the array so it’s stored in alphabetical order and print the array to show that its order has been changed
console.log("\nSorted in alphabetical order:");
console.log(places.sort());

// Sort to change your array so it’s stored in reverse alphabetical order and print the list to show that its order has changed
console.log("\nSorted in reverse alphabetical order:");
console.log(places.sort().reverse());
