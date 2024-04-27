import { createHeaderContainer } from "../headerContainer/headerContainer.js";

export function calculatorDataApp(Data) {
  const headerContainer = createHeaderContainer(Data);
  const inputSumElement = headerContainer.querySelector(".input_sum");
  const buttonsContainer = headerContainer.querySelector(".container_buttons");

  buttonsContainer.addEventListener("click", function (event) {
    const targetButton = event.target;
    if (targetButton.tagName === "BUTTON") {
      const buttonText = targetButton.textContent;

      if (buttonText === Data.buttonIcons.clear) {
        inputSumElement.value = "";
      } else if (buttonText === Data.buttonIcons.equal) {
        try {
          inputSumElement.value = eval(inputSumElement.value);
        } catch (error) {
          inputSumElement.value = "Error";
        }
      } else {
        inputSumElement.value += buttonText;
      }
    }
  });
}
