// I’m going to talk about some JavaScript Array methods or functions.

  // First off, just a little bit about JavaScript Arrays
  // The JavaScript Array is an object which allows us to store a list of items.
  // JavaScript Arrays are bound by certain characteristics:

    // They are resizable.
    // They can contain various data types, like Boolean, string, int, & float, even other objects, functions, or arrays.
    // They are zero-indexed, so their index starts at 0 and progresses incrementally, the last index can be referenced with a -1.

// There are many ways to create and populate an array object:

// let pets = ["dog", "cat", "rabbit", "owl"];

let pets = new Array("cat", "rabbit");

pets.push("owl");	  // push() method adds item to end of array
pets.unshift("dog");	// unshif() method adds item to beginning

console.log(`${pets}`);	// displays dog,cat,rabbit,owl

// …and the Array object has different methods for manipulating arrays in different ways:
  
  // Adding/removing items: push(), unshift(), pop(), shift(), splice(), and slice().
  // Selecting items: indexOf(), includes(), find(), and findIndex().
  // High-order methods: map(), filter(), reduce(), every(), some(), sort(), forEach()
  // Merging Arrays: concat()
  // Making Arrays: of(), from()
  // Flattening Arrays: flat(), flatMap()

// These are just a few, there are many more. We will be focusing mostly on the high-order methods, but I will also touch on a couple of others.
// First, I want to talk about the indexOf() method. 
  
  // takes 2 arguments: element to search for, index to start search at
  // it returns the index of element in array
  // or -1 if element not found
	
  // It’s fairly straightforward and easy to use.

let animals = ["bear", "lion", "penguin", "zebra", "shark"];

console.log(animals.indexOf("penguin")); // returns 2
console.log(animals.indexOf("dolphin")); // returns -1

// only returns first instance of element, but here is a nice example I found that uses indexOf and push to get all instances of the desired element

// store matching indices
let findCar = [];
let cars = ["audi", "buick", "chevy", "ford", "toyota", "chevy"];

// search for index of this item
let car = "chevy"              

// finds 1st index match
let carIndex = cars.indexOf(car); 

// run while loop until no more matches
while(carIndex != -1) {
  // push matching index to findCar array
  findCar.push(carIndex);

  // search for remaining matches at index after match
  carIndex = cars.indexOf(car, carIndex + 1);
}

console.log(findCar); // returns 2, 5

// This example uses indexOf to add items that may be missing from an array.
function checkForParts(carParts, carPart) {
  if (carParts.indexOf(carPart) === -1) {
      carParts.push(carPart);
      console.log(`Installing new ${carPart}.`);
  } else if (carParts.indexOf(carPart) > -1) {
      console.log(`${carPart} already installed.`);
  }
}

var thecarParts = ["Tires", "Steering wheel", "Brakes", "Muffler", "Doors"];

checkForParts(thecarParts, "Steering wheel");  // Steering wheel already installed.
checkForParts(thecarParts, "Horn");  //  Installing new Horn.
checkForParts(thecarParts, "Muffler");  //  Muffler already installed.
checkForParts(thecarParts, "Mirrors");  //  Installing new Mirrors.