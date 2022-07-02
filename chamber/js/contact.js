const dateSubmitted = document.querySelector(".dateSubmitted");
const formSubmission = document.querySelector("#submitBtn");

formSubmission.addEventListener("click", () => {
  updateTime();
  dateSubmitted.textContent = `Form submitted on: ${currentModDateTime}.`;
});
