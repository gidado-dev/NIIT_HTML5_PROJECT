const hamburger = document.querySelector("nav .hamburger");
const navlinks = document.querySelector("nav .nav-links");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("show");
});
