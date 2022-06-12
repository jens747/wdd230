const positionTitle = document.querySelector("#position");
const dateSubmitted = document.querySelector(".dateSubmitted");
const formSubmission = document.querySelector("#submitBtn");
const alertMsg = document.querySelector("#alert-message");

formSubmission.addEventListener("click", () => {
  updateTime();
  dateSubmitted.textContent = `Form submitted on: ${currentModDateTime}.`;
});

positionTitle.addEventListener("focusout", testReg);
// document.addEventListener("keydown", testReg);

function testReg() {
  let reg = positionTitle.value;
  // let reg = positionTitle.value;
  // console.log(positionTitle.value);
  // let testReg = reg.match(/^[-\sa-zA-Z]+$/);

  // testReg ? console.log("Okay") : console.log("Bad");

  // reg = "";
  if (reg.match(/^[-\sa-zA-Z]{7,}$/)) {
    alertMsg.style.display = "none";
    alertMsg.textContent = "";
  } else {
    alertMsg.style.display = "block";
    alertMsg.textContent =
      "**ALERT** Position/Title must be 7 characters long and may only contain letters, hyphens, and spaces.";
    positionTitle.focus();
    positionTitle.value = "";
  }
}
