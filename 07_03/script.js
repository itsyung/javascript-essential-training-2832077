/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];
console.log(backpackContents.join(" "));
console.log(backpackContents);
backpackContents.push("pencil", 7);
console.log(backpackContents);
backpackContents.unshift("car", "log");

console.log(backpackContents);
backpackContents.shift();
console.log(backpackContents);
backpackContents.pop();
console.log(backpackContents);

// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);
