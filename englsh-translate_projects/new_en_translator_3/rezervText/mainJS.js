// (function burgerClick() {
//   const burgerNav = document.querySelector(".burger_nav");
//   const burgerIcon = document.querySelector(".burger_icon");

//   burgerIcon.addEventListener("click", function () {
//     this.classList.toggle("active");
//     burgerNav.classList.toggle("open");
//   });
// })();

// function translationGenerator(_words, _userAnswer, _countAnswers, _input) {
//   let currentWord = getNextWord();
//   let userTranslation = _input.value.toLowerCase().trim();
//   let correctTranslation = currentWord.translation.toLowerCase().trim();

//   if (userTranslation === correctTranslation) {
//     renderCorrectText(currentWord);
//     correctAnswers++;
//   } else {
//     inCorrectAnswers++;
//     renderIncorrectText(currentWord);
//   }

//   correctIndex = (correctIndex + 1) % _words.length;

//   renderTextAnswer(_userAnswer, _countAnswers);

//   _input.value = "";
// }

// function getNextWord() {
//   return words[correctIndex];
// }

// function renderCorrectText(currentWord) {
//   translation.innerHTML = `${currentWord.original} - <span class="green_text"> ${currentWord.translation} </span>`;
// }

// function renderIncorrectText(currentWord) {
//   translation.innerHTML = `${currentWord.original} - <span class="red_text">${currentWord.translation}</span>`;
// }

// function randomWords(random) {
//   for (let i = random.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [random[i], random[j]] = [random[j], random[i]];
//   }
//   return random;
// }

// function renderTextAnswer(nextWord, countUserAnswers) {
//   nextWord.textContent = getNextWord().original;
//   countUserAnswers.innerHTML = `
//             <p>${correctAnswersText}: <span class="green_text">${correctAnswers}</span></p>
//             <p>${inCorrectAnswersText}: <span class="red_text">${inCorrectAnswers}</span></p>
//           `;
// }

// const userAnswer = document.querySelector(".user_answer");
// const input = document.querySelector(".input");
// const translation = document.querySelector(".translation");
// const countAnswers = document.querySelector(".count_answers");

// const mainButtons = document.querySelectorAll(".main_button");
// const mainPage = document.querySelector(".main");

// let words;
// let correctIndex = 0;
// let correctAnswers = 0;
// let correctAnswersText = "Правильные ответы";
// let inCorrectAnswers = 0;
// let inCorrectAnswersText = "Неправильные ответы";

// renderTextAnswer(userAnswer, countAnswers);

// if (mainButtons.innerhtml === "Words 01-20") {
//   mainButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       button.classList.remove("main_button");
//       mainPage.classList.add("container_main");
//       words = randomWords([
//         { original: "Continue", translation: "Продолжать" },
//         { original: "Title", translation: "Заголовок" },
//         { original: "Rows", translation: "Ряды" },
//       ]);
//       renderTextAnswer(userAnswer, countAnswers);
//     });
//   });
// } else if (document.title === "Words 20-40") {
//   words = randomWords([
//     { original: "Being", translation: "Существование" },
//     { original: "Crash reports", translation: "Отчеты о сбоях" },
//     { original: "Rules", translation: "Правила" },
//   ]);
// } else if (document.title === "Words 40-60") {
//   words = randomWords([
//     { original: "Justify", translation: "Оправдывать" },
//     { original: "Tutorials", translation: "Обучающие программы" },
//     { original: "Change", translation: "Изменять" },
//   ]);
// }

// input.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     if (input.value.trim() === "") {
//       userAnswer.classList.add("red_text");
//       setTimeout(() => {
//         userAnswer.classList.remove("red_text");
//       }, 600);
//       return;
//     }
//     translationGenerator(words, userAnswer, countAnswers, input);
//   }
// });
