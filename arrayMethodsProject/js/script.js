// Select all sections and next button
const allSections = document.querySelectorAll("section");
const nextBtn = document.querySelector("#nextButton");

// Values for current and next slide
let CURRENT = 0;
let NEXT = 0;

// Add event to advance slide
nextBtn.addEventListener("click", advanceSection);

// Advance the slides
function advanceSection() {
  // If current slide reaches end of array, reset next slide, otherwise set next slide to index after current slide.
  CURRENT < allSections.length - 1 ? (NEXT = CURRENT + 1) : (NEXT = 0);

  // Hide current slide, show next slide
  allSections[CURRENT].classList.toggle("show-section");
  allSections[NEXT].classList.toggle("show-section");

  // Increment current slide
  CURRENT++;

  // Reset current slide if exceeds slide array index
  if (CURRENT > allSections.length - 1) CURRENT = 0;
}
