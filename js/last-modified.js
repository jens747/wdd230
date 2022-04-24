const currentDateAndTime = new Date();
const copyrightYear = document.querySelector("#copyrightyear");
const theDate = document.querySelector("p");

copyrightYear.textContent = currentDateAndTime.getFullYear();
theDate.innerHTML = `<strong>${currentDateAndTime}</strong>`;
