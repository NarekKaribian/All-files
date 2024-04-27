export function burgerNavigationPage(createNewPage, callback) {
  const burgerNavElement = document.createElement("div");
  burgerNavElement.classList.add("burger_nav");
  burgerNavElement.append(createNewPage.burgerNavPage);

  callback(burgerNavElement);
}
