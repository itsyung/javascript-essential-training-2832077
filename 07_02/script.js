/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);
console.log(collection[2]);
collection[2]++; // interesting
collection[collection.length] = "new item";
collection[collection.length] = "second new item";
collection[9] = "the end";
console.log(collection);
