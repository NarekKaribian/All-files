export function burgerIconSettings() {
  const burgerNavElement = document.querySelector(".burger_nav");
  const burgerIconElement = document.querySelector(".burger_icon");

  burgerIconElement.addEventListener("click", function () {
    this.classList.toggle("active");
    burgerNavElement.classList.toggle("open");
  });
}
