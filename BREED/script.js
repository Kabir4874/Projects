const nav = document.querySelector(".nav-wrapper");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const li = document.querySelector(".menu").querySelectorAll("li");
hamburger.addEventListener("click", () => {
  menu.style.left = "0";
  cross.style.display = "block";
});
cross.addEventListener("click", () => {
  menu.style.left = "105%";
});
li.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.style.left = "105%";
  });
});
