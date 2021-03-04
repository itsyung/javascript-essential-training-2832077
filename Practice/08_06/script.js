/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

let officeDays = {
  Monday: "no",
  Tuesday: "yes",
};

const numberFun = function addPrintNumber(a, b) {
  console.log(a + b);
};

numberFun(3, 6);

function addOfficeDay(day, attended) {
  officeDays[`${day}`] = attended;
  console.log(officeDays);
}

addOfficeDay("Wednesday", "yes");

(function () {
  console.log(officeDays["Monday"]);
})();
