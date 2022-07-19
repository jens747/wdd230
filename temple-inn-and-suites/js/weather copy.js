const weatherAlert = document.querySelector(".weather-alert");
const currentWeather = document.querySelector("#current-weather");
const weather3Day = document.querySelector("#weather-3day");
const card3Day = document.querySelectorAll(".card-3day");

const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=38.981&lon=-77.100&exclude=minutely&units=imperial&appid=47b6a434ebf8169e3efc3593184ee675";

async function checkWeather() {
  // try {
  const res = await fetch(url);
  if (res.ok) {
    const weather = await res.json();

    console.log(weather);
    displayCurrent(weather);
    display3Day(weather);
  } else {
    throw Error(await res.text());
  }
  // } catch (err) {
  //   console.log(err);
  // }
}

checkWeather();

function displayAlert(data) {
  return;
}

function displayCurrent(data) {
  const temp = data.current.temp;
  const description = data.current.weather[0].description;
  const humid = data.current.humidity;
  const weatherImg = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;

  const report = description.split(" ");

  currentWeather.innerHTML = `
      <div>
        <figure>
          <img
            src="${weatherImg}"
            alt="image of current weather conditions"
            id="weather-img"
          />
          <figcaption id="weather-report">${addCaps(report)}</figcaption>
        </figure>
        <h3 id="temp">${temp} °F</h3>
        <h3 id="humid">Current humidity: ${humid}%</h3>
      </div>
      <hr />
    `;

  // return;
}

// Display the 3-day forecast
function display3Day(data) {
  card3Day.forEach((day, idx) => {
    const dayTemp = data.daily[idx].temp.day;
    const dayIcon = `https://openweathermap.org/img/w/${data.daily[idx].weather[0].icon}.png`;

    day.innerHTML = `
      <div class="card-3day" id="day${idx + 1}">
        <img
          src="${dayIcon}"
          alt="image for 3-day forecast"
          id="weather-img-day${idx + 1}"
        />
      <h4>Current temp: ${dayTemp} °F</h4>
      </div>
    `;
  });
  // return;
}

function addCaps(words) {
  const capitalized = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return capitalized;
}
