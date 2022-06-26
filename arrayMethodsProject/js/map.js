const mapExamples = document.querySelectorAll(".map-examples");
// let mapInput = document.querySelectorAll(".map-input");
// let input = document.querySelector("input");
const spanInput = document.querySelectorAll(".input");

const examples = [
  {
    index: 0,
    // height: "104px;",
    inputArray: [],
    getArray: function () {
      let numArray = this.inputArray;
      let getSqrt = this.inputArray.map((num) => Math.sqrt(num));

      placeElement(mapExamples, "p", "Original array: ", numArray, 0);
      placeElement(mapExamples, "p", "Square root: ", getSqrt, 0);
    },
  },
  {
    index: 1,
    // height: "256px;",
    inputArray: [],
    getArray: function () {
      let tempArray = this.inputArray;
      let celsius = tempArray.map(convertToC);

      placeElement(mapExamples, "p", "Fahrenheit: ", tempArray, 1);
      placeElement(mapExamples, "p", "Celsius: ", celsius, 1);
    },
  },
  {
    index: 2,
    inputArray: [],
    getArray: function () {
      let skipArray = this.inputArray;
      const skipNum = skipArray.map((num) => {
        let temp = (num * 1.8 + 32).toFixed(2);
        if (temp <= 85 && temp >= 65) {
          return temp;
        }
        return "N/A";
      });

      placeElement(mapExamples, "p", "Nice Days: ", skipNum, 2);
    },
  },
  {
    index: 3,
    inputArray: [],
    getArray: function () {
      let unfiltered = this.inputArray;
      let filterArray = unfiltered.filter((num) => num > 75);

      placeElement(mapExamples, "p", "Unfiltered: ", unfiltered, 3);
      placeElement(mapExamples, "p", "Filtered: ", filterArray, 3);
    },
  },
  {
    index: 4,
    inputArray: [],
    getArray: async function () {
      let employees = [
        { name: "Bob", sold: 306 },
        { name: "Sally", sold: 472 },
        { name: "Joey", sold: 193 },
        { name: "Rupert", sold: 388 },
        // { name: "Tina", sold: 212 },
      ];
      let employee = {
        name: this.inputArray[1],
        sold: parseInt(this.inputArray[3]),
      };
      employees.push(employee);

      // Finding top sellers with for loop
      let forTopSellers = [];
      console.log(employees);

      for (let i = 0; i < employees.length; i++) {
        if (employees[i].sold > 300) {
          forTopSellers.push(employees[i]);
        }
      }

      // Finding top sellers using filter
      let filterTopSellers = employees.filter(function (merch) {
        return merch.sold > 300;
      });

      topForSellers = forTopSellers.map((ar) => Object.values(ar).join(": "));
      topFilteredSellers = filterTopSellers.map((ar) =>
        Object.values(ar).join(": ")
      );

      placeElement(mapExamples, "p", "For loop: ", topForSellers, 4);
      placeElement(mapExamples, "p", "Filter: ", topFilteredSellers, 4);
    },
  },
  {
    index: 5,
    inputArray: [],
    getArray: function () {
      let reduceNums = this.inputArray;
      let minNum = (a, b) => Math.min(a, b);
      let smallestNum = reduceNums.reduce(minNum);

      placeElement(mapExamples, "p", "Numbers List: ", reduceNums, 5);
      placeElement(mapExamples, "p", "Smallest Number: ", smallestNum, 5);
    },
  },
  {
    index: 6,
    inputArray: [],
    getArray: function () {
      let purchasedItems = [
        {
          name: "apple",
          price: 0.49,
          qty: 5,
        },
        {
          name: "orange",
          price: 0.99,
          qty: 4,
        },
        {
          name: "banana",
          price: 1.49,
          qty: 2,
        },
      ];

      let tax = parseInt(this.inputArray[0]);

      // initialValue is required when iterating over Objects, otherwise
      // reduce uses the first object as the inital value & returns an error
      let totalCost = purchasedItems.reduce((previous, current) => {
        return previous + current.qty * (current.price + current.price * tax);
      }, 0);

      totalCost = [totalCost.toFixed(2)];

      placeElement(mapExamples, "p", "Total: $", totalCost, 6);
    },
  },
  {
    index: 7,
    inputArray: [],
    getArray: function () {
      const allPos = [1, 13, 4, 75, 8, 629, 2];
      const oneLess = this.inputArray;

      // every
      const everyA = allPos.every((number) => number > 0); // true
      const everyB = oneLess.every((number) => number > 0); // false

      // some
      const someA = allPos.some((number) => number > 0); // true
      const someB = oneLess.some((number) => number > 0); // true

      placeElement(mapExamples, "p", "EveryA: ", everyA, 7);
      placeElement(mapExamples, "p", "EveryB: ", everyB, 7);
      placeElement(mapExamples, "p", "SomeA: ", someA, 7);
      placeElement(mapExamples, "p", "SomeB: ", someB, 7);
    },
  },
  {
    index: 8,
    inputArray: [],
    getArray: function () {
      // Checking to see if the elements of one array are included in another.
      const isIncluded = (set1, set2) =>
        set2.every((item) => set1.includes(item));

      // Works on all types of data
      const everyNumber = isIncluded([6, 20, 5, 77, 22, 3, 12, 9], [6, 20, 22]);
      console.log(everyNumber); // true

      console.log("Every results: ");
      const everyLetterA = isIncluded(
        ["a", "b", "c", "d", "e", "f"],
        ["e", "a", "d"]
      );

      const everyLetterB = isIncluded(
        ["a", "b", "c", "d", "e", "f"],
        ["f", "h", "g"]
      );

      console.log(everyLetterA); // true
      console.log(everyLetterB); // false

      const includedOnce = (set1, set2) =>
        set2.some((item) => set1.includes(item));

      console.log("Some results: ");
      const someLettersA = includedOnce(
        ["a", "b", "c", "d", "e", "f"],
        ["e", "a", "d"]
      );

      const someLettersB = includedOnce(
        ["a", "b", "c", "d", "e", "f"],
        ["f", "h", "g"]
      );

      console.log(someLettersA); // true
      console.log(someLettersB); // true

      placeElement(mapExamples, "p", "everyNumber: ", everyNumber, 8);
      placeElement(mapExamples, "p", "everyLetterA: ", everyLetterA, 8);
      placeElement(mapExamples, "p", "everyLetterB: ", everyLetterB, 8);
      placeElement(mapExamples, "p", "someLettersA: ", someLettersA, 8);
      placeElement(mapExamples, "p", "someLettersB: ", someLettersB, 8);
    },
  },
  {
    index: 9,
    inputArray: [],
    getArray: function () {
      // Checking a range with some() and this
      let scores = [84, 95, 87, 79, 91];
      // let scores = this.inputArray;

      const rangeA = {
        min: 94,
        max: 100,
      };

      let letterGrade = scores.some(function (grade) {
        return grade >= this.min && grade <= this.max;
      }, rangeA);

      // console.log(`Got an A? ${letterGrade}`);

      placeElement(mapExamples, "p", "Got A? ", letterGrade, 9);
    },
  },
  {
    index: 10,
    inputArray: [],
    getArray: function () {
      // Using sort
      let letters = ["b", "e", "d", "c", "a"];
      let numbers = [3, 5, 1, 30, 11];

      placeElement(mapExamples, "p", "Sorted letters: ", letters.sort(), 10);
      placeElement(mapExamples, "p", "Sorted numbers? ", numbers.sort(), 10);
    },
  },
  {
    index: 11,
    inputArray: [],
    getArray: function () {
      let numbers = [3, 5, 1, 30, 11];

      // Sorting numbers correctly in ascending order
      function sortNumbers(a, b) {
        return a - b;
      }

      const ascendingNums = numbers.sort(sortNumbers);

      placeElement(mapExamples, "p", "Ascending order: ", ascendingNums, 11);
    },
  },
  {
    index: 12,
    inputArray: [],
    getArray: function () {
      let numbers = [3, 5, 1, 30, 11];

      // Sorting numbers in descending order
      function desendingOrder(a, b) {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
      }

      const descendingNums = numbers.sort(desendingOrder);

      placeElement(mapExamples, "p", "Descending order: ", descendingNums, 12);
    },
  },
  {
    index: 13,
    inputArray: [],
    getArray: function () {
      // Using localeCompare to sort
      // Source: https://www.javascripttutorial.net/javascript-array-sort/
      // let cities = ["Kraków", "Düsseldorf", "Córdoba", "Iași", "Malmö"];
      let cities = [
        "Pessac",
        "Marseille",
        "Ribeauvillé",
        "Périgueux",
        "Saint-Lô",
      ];

      placeElement(mapExamples, "p", "Out of order: ", cities.sort(), 13);

      cities.sort((a, b) => {
        return a.localeCompare(b, "fr", {
          sensitivity: "base",
          ignorePunctuation: true,
        });
      });

      placeElement(mapExamples, "p", "Sorted correctly: ", cities, 13);
    },
  },
  {
    index: 14,
    inputArray: [],
    getArray: function () {
      // Adding file extensions with forEach().
      const songs = ["song1", "song2", "song3", "song4", "song5"];

      let forExt = [];
      let forEachExt = [];

      for (let i = 0; i < songs.length; i++) {
        forExt.push(` ${songs[i]}.mp3`);
      }

      songs.forEach((item) => {
        forEachExt.push(` ${item}.mp3`);
      });

      console.log(songs);
      console.log(`For loop:${forExt}`);
      console.log(`forEach:${forEachExt}`);

      placeElement(mapExamples, "p", "Songs: ", songs, 14);
      placeElement(mapExamples, "p", "For loop: ", forExt, 14);
      placeElement(mapExamples, "p", "forEach: ", forEachExt, 14);
    },
  },
];

// Using Array.map() method
let numArray = [];

// Records values for all input entries
spanInput.forEach((entry, idx) => {
  entry.addEventListener("keyup", (event) => {
    if (event.code === "ShiftRight") {
      if (examples[idx].inputArray.isArray) {
        examples[idx].inputArray = entry.textContent.split(", ");
        console.log(examples[idx].inputArray);
        examples[idx].inputArray = examples[idx].inputArray.map((num) =>
          parseInt(num)
        );
      } else {
        examples[idx].inputArray = entry.textContent.split(/[ ,:]+/);
        // .split(",")
        // .map((e) => e.split(":"));
        console.log(examples[idx].inputArray);
      }

      examples[idx].getArray();
      entry.blur();
    }
  });
});

// Using with user defined function
let tempArray = [];

function convertToC(fahr) {
  let cel = (fahr - 32) / 1.8;

  return cel.toFixed(2);
}

/* Displays element information to the page after input is given by user. */
function placeElement(parentElm, childType, text, arr, arrIdx) {
  let newElm = document.createElement(childType);
  console.log(typeof arr);

  if (arr.length > 1) newElm.textContent = text + arr.join(", ");
  else newElm.textContent = text + arr;

  parentElm[arrIdx].appendChild(newElm);
}

/* Add event listeners to all buttons */
const expandBtn = document.querySelectorAll(".expand");
const expandable = document.querySelectorAll(".expandable");

expandBtn.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    if (spanInput[idx]) spanInput[idx].focus();
    else examples[idx].getArray();
    // expandable[idx].style.height = examples[idx].height;
    expandable[idx].classList.toggle("show-code");
  });
});
