const dropdown = document.querySelectorAll(".dropdown-nav");
const navul = document.querySelectorAll(".nav-ul");

dropdown[0].addEventListener("click", () => {
  dropdown[0].classList.toggle("close-nav");
  navul[0].classList.toggle("open-nav");
});
