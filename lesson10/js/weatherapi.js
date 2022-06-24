// select HTML elements to edit
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=47b6a434ebf8169e3efc3593184ee675";

async function fetchWeather() {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      displayWeather(data);
    } else {
      throw Error(await res.text());
    }
  } catch (err) {
    console.log(err);
  }
}

fetchWeather();

function displayWeather(data) {
  currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}
