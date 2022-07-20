const dropdown = document.querySelectorAll(".dropdown-nav");
const dropsub = document.querySelectorAll(".dropdown-sub");
const subpage = document.querySelectorAll(".subpage");
const navul = document.querySelectorAll(".nav-ul");
const subpageul = document.querySelectorAll(".subpage-ul");

dropdown.forEach((list, index) => {
  list.addEventListener("click", () => {
    list.classList.toggle("close-nav");
    if (!dropdown[0].classList.contains("close-nav"))
      dropdown[1].classList.remove("close-nav");
    // if (index <= 0)
      navul[index].classList.toggle("open-nav");
    dropsub.forEach(item => {
      item.classList.remove("open-sub");
    })
  });
});

dropsub[0].addEventListener("click", () => {
  dropsub.forEach(item => {
    item.classList.toggle("open-sub");
  })
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

// loadJoin.forEach((loader) => {
//   loader.addEventListener("click", function() {
//     document.location.href="join.html";
//   });
// });