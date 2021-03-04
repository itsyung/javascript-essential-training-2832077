/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let myArray = [
  1,
  2,
  "three",
  "phone",
  "ruby",
  ["beth", "comb", { car: "black", year: "2007" }],
  { type: "book", pages: 249 },
];

console.log(myArray[6][1]);

console.log(myArray);
let lastItem = myArray.pop(); // removing last item
console.log(lastItem);
console.log(myArray);
myArray.unshift(lastItem);

console.log(myArray);
console.log(myArray.indexOf("ruby"));

console.log(myArray);
console.log(myArray.splice(1, 1));
console.log(myArray);
console.log(myArray);
console.log(myArray);
console.log(myArray);
console.log(myArray);
console.log(myArray);
