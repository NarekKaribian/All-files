let numberOne = document.querySelector(".number_one");
let numberTwo = document.querySelector(".number_two");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let myHeader = document.querySelector(".header");
let myClear = document.querySelector(".clear");

myClear.addEventListener("click", function () {
  myHeader.innerHTML = "";
  numberOne.value = "";
  numberTwo.value = "";
});

function calculatorFunction() {
  plus.addEventListener("click", () => {
    let myNumberOne = parseInt(numberOne.value);
    let myNumberTwo = parseInt(numberTwo.value);
    myHeader.innerHTML = myNumberOne + myNumberTwo;
  });

  minus.addEventListener("click", () => {
    let myNumberOne = parseInt(numberOne.value);
    let myNumberTwo = parseInt(numberTwo.value);
    myHeader.innerHTML = myNumberOne - myNumberTwo;
  });

  multiply.addEventListener("click", () => {
    let myNumberOne = parseInt(numberOne.value);
    let myNumberTwo = parseInt(numberTwo.value);
    myHeader.innerHTML = myNumberOne * myNumberTwo;
  });

  divide.addEventListener("click", () => {
    let myNumberOne = parseInt(numberOne.value);
    let myNumberTwo = parseInt(numberTwo.value);
    myHeader.innerHTML = myNumberOne / myNumberTwo;
  });
}

calculatorFunction();
