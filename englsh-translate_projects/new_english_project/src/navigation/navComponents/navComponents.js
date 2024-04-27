import { headerLogo } from "../headerLogo/headerLogo.js";
import { burgerNavigationPage } from "../burgerNavigationPage/burgerNavigationPage.js";
import { burgerIcon } from "../burgerIcon/burgerIcon.js";

export function navComponents(renderFullNav) {
  const headerNavContainerElement = document.createElement("div");
  headerNavContainerElement.classList.add("header_nav_container");

  headerLogo(renderFullNav, (logoElement) => {
    headerNavContainerElement.append(logoElement);
  });

  burgerNavigationPage(renderFullNav, (burgerNavElement) => {
    headerNavContainerElement.append(burgerNavElement);
  });

  burgerIcon((burgerIconElement) => {
    headerNavContainerElement.append(burgerIconElement);
  });

  document.body.append(headerNavContainerElement);
}
