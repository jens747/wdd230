const allSections = document.querySelectorAll("section");
const nextBtn = document.querySelector("#nextButton");

// const sectionObj =  {
//   currentSection: 0,
//   nextSection: 1
// }

// let CURRENT = sectionObj.currentSection;
// let NEXT = sectionObj.nextSection;
let CURRENT = 0;
let NEXT = 0;
// let currentSection = 0;
// let nextSection = 1;

nextBtn.addEventListener("click", advanceSection);

function advanceSection() {
  if (CURRENT < allSections.length - 1) {
    console.log("lt");
    NEXT = CURRENT + 1;
  } else {
    console.log("gt");
    NEXT = CURRENT;
    CURRENT = 0;
  }
  
  console.log(`Current: ${CURRENT}, Next: ${NEXT}`);
  allSections[CURRENT].classList.toggle("show-section");
  allSections[NEXT].classList.toggle("show-section");
  CURRENT++;
  // sectionObj.currentSection = CURRENT;
  // sectionObj.nextSection = NEXT;
  
  // console.log(`Current: ${sectionObj.currentSection}, Next: ${sectionObj.nextSection}`);
}

function updateNext(next) {
  return next + 1;
}