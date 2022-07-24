const images = document.querySelectorAll("img[data-src");

function prepImage(img) {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = function () {
    img.removeAttribute("data-src");
  };
}

const imageOptions = {
  threshold: 1,
  rootMargin: "0px 0px 550px 0px",
};

if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        prepImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  });
  images.forEach((img) => {
    imgObserver.observe(img);
  }, imageOptions);
} else {
  images.forEach((img) => {
    prepImage(img);
  });
}
