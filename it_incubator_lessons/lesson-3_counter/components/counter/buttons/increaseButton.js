import { increaseClientsCount } from "../../../data/data.js";

export function IncreaseButton() {
  const element = document.createElement("button");
  element.append("+");

  element.addEventListener("click", increaseClientsCount);

  return element;
}
