const loadJoin = document.querySelectorAll(".load-join-btn");

loadJoin.forEach((loader) => {
  loader.addEventListener("click", function() {
    document.location.href="join.html";
  });
});