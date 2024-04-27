import { createHeaderTitleElement } from "./headerTitleElement.js";
import { createInputElement } from "./inputElement.js";

export function createNavigationContainer(renderData, callback) {
  const navigationContainer = document.createElement("div");
  navigationContainer.classList.add("container_nav");
  navigationContainer.append(
    createHeaderTitleElement(renderData.title),
    createInputElement()
  );
  callback(navigationContainer);
}
