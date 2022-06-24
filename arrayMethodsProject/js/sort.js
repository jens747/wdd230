// Using sort
let letters = ['b', 'e', 'd', 'c', 'a'];
let numbers = [3, 5, 1, 30, 11];

console.log(letters.sort());   // returns ['a', 'b', 'c', 'd', 'e']
console.log(numbers.sort());   // returns [1, 11, 3, 30, 5]

// Sorting numbers correctly in ascending order
function sortNumbers(a, b) {
  return a - b;
}

const ascendingNums = numbers.sort(sortNumbers);

console.log(`Ascending order: ${ascendingNums}`);

// Sorting numbers in descending order
function desendingOrder(a, b) {
  if (a > b)
    return -1;
  if (a < b)
    return 1;
  return 0;
}

const descendingNums = numbers.sort(desendingOrder);
console.log(`Descending order: ${descendingNums}`);

// Using localeCompare to sort
// Source: https://www.javascripttutorial.net/javascript-array-sort/
// let cities = ["Kraków", "Düsseldorf", "Córdoba", "Iași", "Malmö"];
let cities = ["Pessac", "Marseille", "Ribeauvillé", "Périgueux", "Saint-Lô"];

console.log(cities.sort()); // Leaves cities out of order

cities.sort((a, b) => {
  return a.localeCompare(b);
});

console.log(`Sorted by locale: ${cities.join(", ")}`);