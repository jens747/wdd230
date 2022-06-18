const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

const cards = document.querySelector(".cards");

// async function getProphets() {
//   let res = await fetch(URL);
//   if(res.ok) {
//     let data = await res.json();

//     displayProphets(data);
//   } else {
//     throw Error(res.statusText);
//   }
// }

// getProphets();

fetch(requestURL)
  .then(function (res) {
    return res.json();
  })
  .then(function (jsonObj) {
    console.table(jsonObj);
    const prophets = jsonObj["prophets"];

    prophets.forEach(displayProphets);
    // Alternative to filter prophets
    // let nonUtah = data.prophets.filter(p => p.birthplace !== "Utah");
    // nonUtah.forEach(displayProphets);
  });

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let portrait = document.createElement("img");
  let birth = document.createElement("p");

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  // If you use HTML in your string call innerHTML otherwise textContent
  // h2.innerHTML = `${prophet.name} <span class="highlight">{$prophet.lastname}</span>`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute(
    "alt",
    `Portrait of ${prophet.name} ${prophet.lastname} - ${
      prophet.order
    }${numberSuffix(prophet.order)} Latter-day President`
  );
  portrait.setAttribute("loading", "lazy");

  birth.textContent = `Born in ${prophet.birthplace} on ${prophet.birthdate}`;

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);

  // Add/append the section(card) with the img element
  card.appendChild(portrait);

  // Add/append the section(card) with the birth information
  card.appendChild(birth);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}

function numberSuffix(num) {
  if (num == 1 || (num > 20 && num % 10 == 1)) return "st";
  else if (num == 2 || (num > 20 && num % 10 == 2)) return "nd";
  else if (num == 3 || (num > 20 && num % 10 == 3)) return "rd";
  else return "th";
}

// Testing numberSuffix function
// numArray = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];

// numArray.forEach(num => {
//   console.log(`${num}${numberSuffix(num)}`)
// });
