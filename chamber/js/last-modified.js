// Array to format weekday names
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Array to format months of the year
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Get new date object
const currentDateAndTime = new Date();

// Function to format current time
const getCurrentTime = (currentDateAndTime) => {
  // Get current hours
  let currentHour = currentDateAndTime.getHours();

  // Add leading zero to minutes if necessary
  // Source: https://bobbyhadz.com/blog/javascript-get-minutes-with-leading-zero
  // const currentMinute = String(currentDateAndTime.getMinutes()).padStart(2, "0");
  let currentMinute = currentDateAndTime.getMinutes();
  currentMinute = currentMinute <= 9 ? "0" + currentMinute : currentMinute;

  // Check for AM or PM
  const currentAMPM = currentHour >= 11 ? "PM" : "AM";

  // Convert hours to 12 hour format
  if (currentHour > 12) {
    currentHour -= 12;
  }

  if (currentHour === 0) {
    currentHour = 12;
  }

  // Return formatted string of time
  return `${currentHour}:${currentMinute} ${currentAMPM}`;
};

// Variables for day, month, date, year, and time
const currentDay = weekdays[currentDateAndTime.getDay()];
const currentMonth = months[currentDateAndTime.getMonth()];
const currentDayOf = currentDateAndTime.getDate();
const currentYear = currentDateAndTime.getFullYear();
const currentTime = getCurrentTime(currentDateAndTime);
const currentModDateTime = ` ${currentDay}, ${currentMonth} ${currentDayOf}, ${currentYear} ${currentTime}`;
const currentDateTime = `${currentDay}, ${currentMonth} ${currentDayOf}, ${currentYear}`;

// Variable used to insert date into webpage
const copyrightYear = document.querySelector("#copyrightYear");
// const theDate = document.querySelector("p");

// copyrightYear.textContent = currentDateAndTime.getFullYear();
copyrightYear.textContent = currentYear;
// theDate.innerHTML = `<strong>${currentDateAndTime}</strong>`;

// Variable to update the lastModified div
const lastModified = document.querySelector("#lastModified");

// Update the lastModified div with the current date
lastModified.textContent += currentDateTime;

// Variable to update the lastModified div
const lastModDateTime = document.querySelector("#lastModDateTime");

// Update the lastModified div with the current date
lastModDateTime.textContent += currentModDateTime;
