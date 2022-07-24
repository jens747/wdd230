// Obejct with day and month values
const dateObj = {
  // Array listing days of the week
  weekdays: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],

  // Array listing months of the year
  months: [
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
  ],
};

// Create a new date object
const newDateObj = new Date();

// Function to format current time
const getCurrentTime = (newDateObj) => {
  // Get current hours
  let currentHour = newDateObj.getHours();

  // Add leading zero to minutes if necessary
  let currentMinute = newDateObj.getMinutes();
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
let currentDay = dateObj.weekdays[newDateObj.getDay()];
let currentMonth = dateObj.months[newDateObj.getMonth()];
let currentDayOf = newDateObj.getDate();
let currentYear = newDateObj.getFullYear();
let currentTime = getCurrentTime(newDateObj);
let currentDate = ` ${currentDay}, ${currentMonth} ${currentDayOf}, ${currentYear}`;
let currentDateTime = ` ${currentDay}, ${currentMonth} ${currentDayOf}, ${currentYear} ${currentTime}`;

function getNext3Days() {
  let next3Days = [{}, {}, {}];

  next3Days.forEach((day, idx) => {
    let dayName = newDateObj.getDay() + idx + 1;
    if (dayName >= 7) {
      dayName = 0;
    }

    daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day.year % 4) {
      daysInMonth[1] = 29;
    }

    dayMonth = newDateObj.getMonth();
    dayMonNum = newDateObj.getDate() + idx + 1;

    if (dayMonNum > daysInMonth[dayMonth]) {
      dayMonNum -= daysInMonth[dayMonth];
      dayMonth++;
    }

    day.name = dateObj.weekdays[dayName];
    day.month = dateObj.months[dayMonth];
    day.num = dayMonNum;
    day.year = currentYear;

    next3Days[idx] = `
      ${day.name}, 
      ${day.month} 
      ${day.num}
    `;
  });

  return next3Days;
}

// Variable used to insert date into webpage
const copyrightYr = document.querySelector("#copyrightYr");
copyrightYr.textContent = currentYear;

// Variable to update the lastModified div
const lastModified = document.querySelector("#lastModified");

// Update the lastModified div with the current date
lastModified.textContent += currentDateTime;

// Update the current date and time
function updateTime() {
  const submitDateTime = new Date();
  currentDay = dateObj.weekdays[submitDateTime.getDay()];
  currentMonth = dateObj.months[submitDateTime.getMonth()];
  currentDayOf = submitDateTime.getDate();
  currentYear = submitDateTime.getFullYear();
  currentTime = getCurrentTime(submitDateTime);
  currentDateTime = ` ${currentDay}, ${currentMonth} ${currentDayOf}, ${currentYear} ${currentTime}`;
}
