// Using Array.map() method
numArray = [49, 64, 81, 100];

const getSqrt = numArray.map((num) => Math.sqrt(num));

console.log(numArray); // displays 49, 64, 81, 100
console.log(getSqrt); // displays 7, 8, 9, 10

// Using with user defined function
// function convertToC(fahr) {
//   let cel = (fahr - 32) / 1.8;

//   return cel.toFixed(2);
// }

// let celsius = numArray.map(convertToC);

// console.log(celsius);

// Using index and anonymous function
// const skipNum = numArray.map((num, index) => {
//   if (index > 1) {
//     return ((num - 32) / 1.8).toFixed(2);
//   }
//   return "N/A";
// });

// console.log(skipNum);
