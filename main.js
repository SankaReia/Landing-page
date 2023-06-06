const burgerEl = document.querySelector(".burger");
const navLink = document.querySelectorAll(".nav_link");

function change() {
  document.querySelector(".nav_bar").classList.toggle("active");
  document.querySelector(".line1").classList.toggle("active");
  document.querySelector(".line2").classList.toggle("active");
  document.querySelector(".line3").classList.toggle("active");
}

burgerEl.addEventListener("click", () => {
  change();
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    change();
  });
});
