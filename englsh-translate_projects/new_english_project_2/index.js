const burgerNav = document.querySelector(".burger_nav");
const burgerIcon = document.querySelector(".burger_icon");

burgerIcon.addEventListener("click", function () {
  this.classList.toggle("active");
  burgerNav.classList.toggle("open");
});
