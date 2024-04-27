export function createButtonElement(icon) {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("buttons");
  buttonElement.append(icon);
  return buttonElement;
}
