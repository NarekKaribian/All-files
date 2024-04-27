import { burgerIconSettings } from "../burgerIconSettings/burgerIconSettings.js";
import { navComponents } from "../navComponents/navComponents.js";

export function headerNavContainer(settingsNav) {
  navComponents(settingsNav);
  burgerIconSettings(settingsNav);
}
