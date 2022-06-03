const images = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
  // const src = img.getAttribute("data-src");
  // if (!src) {
  //   return;
  // }

  // img.src = src;
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = () => {
    img.removeAttribute("data-src");
    // img.classList.remove("hazy");
    // img.classList.add("lazy");
  };
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 550px 0px",
};

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       preloadImage(entry.target);
//       imgObserver.unobserve(entry.target);
//     }
//   });
// }, imgOptions);

if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  });
  images.forEach((img) => {
    imgObserver.observe(img);
  }, imgOptions);
} else {
  images.forEach((img) => {
    preloadImage(img);
  });
}

// images.forEach((image) => {
//   imgObserver.observe(image);
// });
