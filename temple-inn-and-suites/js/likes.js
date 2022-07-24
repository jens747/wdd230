const likeTemple = document.querySelectorAll(".like-temple");

// Check local storage to see if any buttons are liked and update the button visually if they are
document.addEventListener("DOMContentLoaded", () => {
  console.log("doc");

  likeTemple.forEach((temple) => {
    console.log(temple);
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
    console.log(temple.id);
    chkLocalStor(temple);
  });
});

// likeOgden.addEventListener("click", () => {
//   console.log("click");
//   if (window.localStorage.getItem("like-ogden") == "true") {
//     likeOgden.classList.remove("unlike-temple");
//     window.localStorage.setItem("like-ogden", "false");
//   } else {
//     window.localStorage.setItem("like-ogden", "true");
//     likeOgden.classList.add("unlike-temple");
//   }
// });

// likeTemple.forEach((btn) => {
//   console.log(btn);
//   document.addEventListener("click", function (btn) {
//     // if (window.localStorage.getItem("like-boise") == "true") {
//     //   window.localStorage.setItem("like-boise", "false");
//     // } else {
//     //   window.localStorage.setItem("like-boise", "true");
//     // }
//     console.log(btn[0]);
//     btn[1].classList.toggle("unlike-temple");
//   });
// });

/* **EXPLICIT CALL** 
const likeOgden = document.querySelector("#like-ogden");

document.addEventListener("DOMContentLoaded", () => {
  console.log("doc");

  chkLocalStor(new PointerEvent("like-ogden"), likeOgden, "unlike-temple");
});

const chgLocalStor = (
  chkTagStr = new PointerEvent("like-ogden"),
  chgTag = likeOgden,
  chgClass = "unlike-temple"
) => {
  if (window.localStorage.getItem(chkTagStr) == "true") {
    chgTag.classList.remove(chgClass);
    window.localStorage.setItem(chkTagStr, "false");
  } else {
    window.localStorage.setItem(chkTagStr, "true");
    likeOgden.classList.add(chgClass);
  }
};

likeOgden.addEventListener("click", chgLocalStor);

const chkLocalStor = (
  chkStrTag = new PointerEvent("like-ogden"),
  chgTag = likeOgden,
  chgClass = "unlike-temple"
) => {
  if (window.localStorage.getItem(chkStrTag) == "true") {
    chgTag.classList.add(chgClass);
  } else {
    chgTag.classList.remove(chgClass);
  }
};
*/
