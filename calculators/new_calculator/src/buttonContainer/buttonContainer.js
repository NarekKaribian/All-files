import { createButtonElement } from "./buttonElement.js";

export function createButtonContainer(renderData, callback) {
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("container_buttons");

  Object.values(renderData.buttonIcons).forEach((icon) => {
    buttonsContainer.append(createButtonElement(icon));
  });

  callback(buttonsContainer);
}
