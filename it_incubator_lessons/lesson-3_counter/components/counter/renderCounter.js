import { Header } from "./header/Header.js";
import { Count } from "./value/Count.js";
import { IncreaseButton } from "./buttons/increaseButton.js";
import { DecreaseButton } from "./buttons/decreaseButton.js";

export function renderCounter() {
  document.body.innerHTML = "";
  document.body.append(Header(), Count(), IncreaseButton(), DecreaseButton());
}
