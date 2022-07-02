const positionTitle = document.querySelector("#position");
const dateSubmitted = document.querySelector(".dateSubmitted");
const formSubmission = document.querySelector("#submitBtn");
const alertMsg = document.querySelector("#alert-message");

formSubmission.addEventListener("click", () => {
  updateTime();
  dateSubmitted.textContent = `Form submitted on: ${currentModDateTime}.`;
});

positionTitle.addEventListener("focusout", testReg);

function testReg() {
  let reg = positionTitle.value;

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
