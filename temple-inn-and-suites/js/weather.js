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
      <div>
        <figure>
          <img
            src="https://openweathermap.org/img/w/${icon}.png"
            alt="image of current weather conditions"
            id="weather-img"
          />
          <figcaption id="weather-report">${this.addCaps(report)}</figcaption>
        </figure>
        <h3 id="temp">${temp} °F</h3>
        <h3 id="humid">Current humidity: ${humidity}%</h3>
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
          <div class="card-3day" id="day${idx + 1}">
            <img
              src="https://openweathermap.org/img/w/${icon}.png"
              alt="image for 3-day forecast"
              id="weather-img-day${idx + 1}"
            />
          <h4>Current temp: ${day} °F</h4>
          </div>
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
          ***WEATHER ALERT*** ${event} <span ><button class="close-alert">X</button></span>
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
