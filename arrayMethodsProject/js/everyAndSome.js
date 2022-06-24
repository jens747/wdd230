// Using every() & some methods with an arrow function.
const allPos = [1, 13, 4, 75, 8, 629, 2];
const oneLess = [-1, 13, 4, 75, 8, 629, 2];

// every
const everyA = allPos.every(number => number > 0); // true
const everyB = oneLess.every(number => number > 0); // false

// some
const someA = allPos.some(number => number > 0); // true
const someB = oneLess.some(number => number > 0); // true

console.log(`Every A: ${everyA}`);
console.log(`Every B: ${everyB}`);
console.log(`Some A: ${someA}`);
console.log(`Some B: ${someB}`);

// Checking to see if the elements of one array are included in another.
const isIncluded = (set1, set2) => set2.every(item => set1.includes(item));

// Works on all types of data
console.log(isIncluded([6, 20, 5, 77, 22, 3, 12, 9], [6, 20, 22]));         // true

console.log("Every results: ")
console.log(isIncluded(['a', 'b', 'c', 'd', 'e', 'f'], ['e', 'a', 'd']));   // true
console.log(isIncluded(['a', 'b', 'c', 'd', 'e', 'f'], ['f', 'h', 'g']));   // false

const includedOnce = (set1, set2) => set2.some(item => set1.includes(item));

console.log("Some results: ")
console.log(includedOnce(['a', 'b', 'c', 'd', 'e', 'f'], ['e', 'a', 'd']));   // true
console.log(includedOnce(['a', 'b', 'c', 'd', 'e', 'f'], ['f', 'h', 'g']));   // true


// Checking a range with some() and this
let scores = [84, 95, 87, 79, 91];

const rangeA = {
    min: 94,
    max: 100
};

let letterGrade = scores.some(function (grade) {
    return grade >= this.min && grade <= this.max;
}, rangeA);

console.log(`Got an A? ${letterGrade}`);