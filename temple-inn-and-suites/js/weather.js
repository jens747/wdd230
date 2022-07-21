const weatherAlert = document.querySelectorAll(".weather-alert");
const currentWeather = document.querySelector("#current-weather");
const weather3Day = document.querySelector("#weather-3day");
const card3Day = document.querySelectorAll(".card-3day");

let weatherApp = {
  appid: "47b6a434ebf8169e3efc3593184ee675",
  checkWeather: function () {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=38.981&lon=-77.100&exclude=minutely&units=imperial&appid=${this.appid}`
    )
      .then((res) => {
        if (!res.ok) {
          alert("Could not get current weather.");
          throw new Error("Could not get weather.");
        }
        return res.json();
      })
      .then((weather) => this.displayCurrent(weather))
      .then((weather) => this.display3Day(weather))
      .then((weather) => this.displayWeatherAlert(weather))
      .then((weather) => this.closeWeatherAlert(weather));
  },
  displayAlert: function (data) {
    return;
  },
  displayCurrent: function (data) {
    const { temp } = data.current;
    const { icon, description } = data.current.weather[0];
    const { humidity } = data.current;

    const report = description.split(" ");

    currentWeather.innerHTML = `
        <div class="backdrop"></div>
        <div class="forecast">
          <h4 id="current-date">
            ${currentDate}
          </h4>
          <figure>
            <img
              src="https://openweathermap.org/img/w/${icon}.png"
              alt="image of current weather conditions"
              id="weather-img"
            />
            <figcaption id="weather-report"><h4>${this.addCaps(
              report
            )}</h4></figcaption>
          </figure>
          <h4 id="temp">Current Temp: <br>${temp} °F</h4>
          <h4 id="humid">Current Humidity: <br>${humidity}%</h4>
        </div>
      <hr />
    `;
    return data;
  },
  display3Day: function (data) {
    console.log(data);
    card3Day.forEach((card, idx) => {
      const { day } = data.daily[idx].temp;
      const { icon } = data.daily[idx].weather[0];

      card.innerHTML = `
            <img
              src="https://openweathermap.org/img/w/${icon}.png"
              alt="image for 3-day forecast"
              id="weather-img-day${idx + 1}"
            />
          <h4>Current temp: <br>${day} °F</h4>
        `;
    });
    return data;
  },
  addCaps: function (words) {
    const capitalized = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    return capitalized;
  },
  displayWeatherAlert: function (data) {
    try {
      const { alerts } = data;
      alerts.forEach((card, idx) => {
        const { description, event, sender_name } = data.alerts[idx];

        // weatherAlert.innerHTML += `
        //   <div>
        //     ${description}: \n@@@@@${event}\n@@@@@${sender_name} <span class="close-alert">x</span>
        //   </div>
        // `
        weatherAlert[idx].innerHTML += `
        <div class="div-alert">
          ***WEATHER ALERT*** ${event} <span ><button type="button" class="close-alert">X</button></span>
        </div>
      `;
        return data;
      });
    } catch (error) {
      console.log(error);
    }
  },
  closeWeatherAlert: function (data) {
    const btnAlert = document.querySelectorAll(".btn-alert");
    btnAlert.forEach((alert) => {
      alert.addEventListener("click", () => {
        alert.classList.toggle("alert-close");
      });
    });
  },
};

weatherApp.checkWeather();
