export function burgerIcon(callback) {
  const burgerIconElement = document.createElement("div");
  burgerIconElement.classList.add("burger_icon");

  const burgerIconMidleLine = document.createElement("span");

  burgerIconElement.append(burgerIconMidleLine);

  callback(burgerIconElement);
}
