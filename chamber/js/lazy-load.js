const images = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = () => {
    img.removeAttribute("data-src");
  };
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 550px 0px",
};

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
};