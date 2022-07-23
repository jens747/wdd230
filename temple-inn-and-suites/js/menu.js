const dropdown = document.querySelectorAll(".dropdown-nav");
const navul = document.querySelectorAll(".nav-ul");

dropdown[0].addEventListener("click", () => {
  dropdown[0].classList.toggle("close-nav");
  navul[0].classList.toggle("open-nav");
});

// dropsub.forEach((item, idx) => {
//   item.addEventListener("mouseover", () => {
//     item.forEach(obj, () => {
//       obj.classList.add("open-sub")
//     })
//   })
// })

// dropsub.forEach((item, idx) => {
//   item.addEventListener("mouseout", () => {
//     dropsub.forEach(obj, () => {
//       obj.classList.remove("open-sub")
//     })
//   })
// })
