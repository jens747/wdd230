const lat = 44.6584;
const lng = -111.1005;

const params = "airTemperature,windSpeed";

let weatherData = {};
let tempC = 16.96;
let windSpeedMps = 5.73;

// const url = `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
//   headers: {
//     'Authorization': 'example-api-key'
//   };

// async function getWindSpeed(url) {
//   const response = await fetch(url);

//   if(response.ok) {
//     const data = await response.json();
//     console.log(data);
//   }
// }

// fetch(
//   `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
//   {
//     headers: {
//       Authorization:
//         "e186e4f0-dd6e-11ec-bcd6-0242ac130002-e186e55e-dd6e-11ec-bcd6-0242ac130002",
//     },
//   }
// )
//   .then((response) => response.json())
//   .then((jsonData) => {
//     weatherData = jsonData;
//     console.log(weatherData);
//     windSpeedMps = weatherData.hours[0].windSpeed.noaa;
//     tempC = weatherData.hours[0].airTemperature.noaa;
//   });

const windSpeedMph = windSpeedMps / 0.44704;
console.log(`Wind speed: mps - ${windSpeedMps}, mph - ${windSpeedMph}`);

const tempF = tempC * 1.8 + 32;
console.log(`Temperature: C - ${tempC}, F - ${tempF}`);

const windChill =
  35.74 +
  0.6215 * tempF -
  35.75 * windSpeedMph * 0.16 +
  0.4275 * tempF * windSpeedMph * 0.16;
console.log(`Wind chill: ${windChill} F`);
