const likeTemple = document.querySelectorAll(".like-temple");

// Check local storage to see if any buttons are liked and update the button visually if they are
document.addEventListener("DOMContentLoaded", () => {
  likeTemple.forEach((temple) => {
    if (window.localStorage.getItem(temple.id) == "true") {
      temple.classList.add("unlike-temple");
    } else {
      temple.classList.remove("unlike-temple");
    }
  });
});

// When button is clicked this function updated local storage and button style
const chkLocalStor = (temple) => {
  if (window.localStorage.getItem(temple.id) == "true") {
    window.localStorage.setItem(temple.id, "false");
    temple.classList.remove("unlike-temple");
  } else {
    window.localStorage.setItem(temple.id, "true");
    temple.classList.add("unlike-temple");
  }
};

// Event listener for the temple like buttons
likeTemple.forEach((temple) => {
  temple.addEventListener("click", () => {
    chkLocalStor(temple);
  });
});
