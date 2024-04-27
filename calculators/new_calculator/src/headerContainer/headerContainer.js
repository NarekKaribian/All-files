import { createNavigationContainer } from "../navigationContainer/navigationContainer.js";
import { createButtonContainer } from "../buttonContainer/buttonContainer.js";

export function createHeaderContainer(renderData) {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header_container");

  createNavigationContainer(renderData, (navContainer) => {
    headerContainer.append(navContainer);
  });

  createButtonContainer(renderData, (btnElement) => {
    headerContainer.append(btnElement);
  });

  document.body.append(headerContainer);
  return headerContainer;
}
