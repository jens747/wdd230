// Filtering an Array with filter()
numArray = [12, 400, 32, 75, 88, 93];

let filterArray = numArray.filter((num) => num > 75);

console.log(filterArray);

// Filtering an Array of Objects
let employees = [
  { name: "Bob", sold: 306 },
  { name: "Sally", sold: 472 },
  { name: "Joey", sold: 193 },
  { name: "Rupert", sold: 388 },
  { name: "Tina", sold: 212 },
];

// Finding top sellers with for loop
let topSellers = [];

for (let i = 0; i < employees.length; i++) {
  if (employees[i].sold > 300) {
    topSellers.push(employees[i]);
  }
}

console.log(topSellers);

// Finding top sellers using filter
let filterTopSellers = employees.filter(function (merch) {
  return merch.sold > 300;
});

console.log(filterTopSellers);
