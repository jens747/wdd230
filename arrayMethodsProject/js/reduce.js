// Using reduce on an array
const nums = [8, 17, 23, 3, 67, 44];

const smallestNum = (a, b) => Math.min(a, b);

console.log(nums.reduce(smallestNum)); // returns 3

// Using reduce to get the Sum of an array
// const sumNums = nums.reduce(function (prev, current) {
//   return prev + current;
//   // });
// });

// console.log(sumNums);

// Using reduce on an array of objects
// let purchasedItems = [
//   {
//     name: "apple",
//     price: 0.49,
//     qty: 5,
//   },
//   {
//     name: "orange",
//     price: 0.99,
//     qty: 4,
//   },
//   {
//     name: "banana",
//     price: 1.49,
//     qty: 2,
//   },
// ];

// let tax = 0.035;

// // initialValue is required when iterating over Objects, otherwise
// // reduce uses the first object as the inital value & returns an error
// let totalCost = purchasedItems.reduce((previous, current) => {
//   return previous + current.qty * (current.price + current.price * tax);
// }, 0);

// console.log(`Total: \$${totalCost.toFixed(2)}`);
