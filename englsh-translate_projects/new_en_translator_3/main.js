const dom = {
  selectbox: document.getElementById("selectbox"),
  selectboxList: document.querySelector(".selectbox__list"),
  wordsBox: document.getElementById("words_box"),
  settings: document.getElementById("settings"),
};

const wordsBox = {
  all: "All words",
  livingroom: "01-20",
  bedroom: "20-40",
  kitchen: "40-60",
  bathroom: "60-80",
  studio: "80-100",
  washingroom: "100-120",
};

// Выпадающий список
dom.selectbox
  .querySelector(".selectbox__selected")
  .addEventListener("click", (event) => {
    dom.selectbox.classList.toggle("open");
  });

document.body.addEventListener("click", (event) => {
  const { target } = event;
  if (
    !target.matches(".selectbox") &&
    !target.parentElement.matches(".selectbox") &&
    !target.parentElement.parentElement.matches(".selectbox")
  ) {
    dom.selectbox.classList.remove("open");
  }
});

dom.selectboxList.addEventListener("click", (event) => {
  const { target } = event;
  if (target.matches(".selectbox__item")) {
    const { words } = target.dataset;
    const selectedItem = dom.selectboxList.querySelector(".selected");
    selectedItem.classList.remove("selected");
    target.classList.add("selected");
    dom.selectbox.classList.remove("open");
    selectedWords(words);
  }
});

// Выбор слов
function selectedWords(words) {
  const selectedWordsBox = dom.wordsBox.querySelector(".selected");
  if (selectedWordsBox) {
    selectedWordsBox.classList.remove("selected");
  }
  if (words !== "all") {
    const newSelectedWords = dom.wordsBox.querySelector(
      `[data-words=${words}]`
    );
    newSelectedWords.classList.add("selected");
    renderScreen(false);
  } else {
    renderScreen(true);
  }
  const selectedSelectboxWords = dom.selectbox.querySelector(
    ".selectbox__item.selected"
  );
  selectedSelectboxWords.classList.remove("selected");
  const newSelectedItem = dom.selectbox.querySelector(`[data-words=${words}]`);
  newSelectedItem.classList.add("selected");
  const selectboxSelected = dom.selectbox.querySelector(
    ".selectbox__selected span"
  );
  selectboxSelected.innerText = wordsBox[words];
}

// Клик по элементу комнаты
dom.wordsBox.querySelectorAll(".words").forEach((words) => {
  words.addEventListener("click", (event) => {
    const value = words.dataset.words;
    selectedWords(value);
  });
});

function renderScreen(isWordsBox) {
  if (isWordsBox) {
    dom.wordsBox.style.display = "grid";
    dom.settings.style.display = "none";
  } else {
    dom.settings.style.display = "block";
    dom.wordsBox.style.display = "none";
  }
}

function translationGenerator(_words, _userAnswer, _countAnswers, _input) {
  let currentWord = getNextWord();
  let userTranslation = _input.value.toLowerCase().trim();
  let correctTranslation = currentWord.translation.toLowerCase().trim();

  if (userTranslation === correctTranslation) {
    translation.innerHTML = `${currentWord.original} - <span class="green_text"> ${currentWord.translation} </span>`;
    correctAnswers++;
  } else {
    inCorrectAnswers++;
    translation.innerHTML = `${currentWord.original} - <span class="red_text">${currentWord.translation}</span>`;
  }

  correctIndex = (correctIndex + 1) % _words.length;

  userAnswer.textContent = getNextWord().original;
  countAnswers.innerHTML = `
            <p>${correctAnswersText}: <span class="green_text">${correctAnswers}</span></p>
            <p>${inCorrectAnswersText}: <span class="red_text">${inCorrectAnswers}</span></p>
          `;

  _input.value = "";
}

function getNextWord() {
  return wordsTr[correctIndex % wordsTr.length];
}

const userAnswer = document.querySelector(".user_answer");
const input = document.querySelector(".input");
const translation = document.querySelector(".translation");
const countAnswers = document.querySelector(".count_answers");

let wordsTr = [];
let correctIndex = 0;
let correctAnswers = 0;
let correctAnswersText = "Правильные ответы";
let inCorrectAnswers = 0;
let inCorrectAnswersText = "Неправильные ответы";

if (dom.wordsBox.querySelector(".box_1")) {
  wordsTr = [
    { original: "Continue", translation: "Продолжать" },
    { original: "Title", translation: "Заголовок" },
    { original: "Rows", translation: "Ряды" },
  ];
} else if (dom.wordsBox.querySelector(".box_2")) {
  wordsTr = [
    { original: "Being", translation: "Существование" },
    { original: "Crash reports", translation: "Отчеты о сбоях" },
    { original: "Rules", translation: "Правила" },
  ];
} else if (dom.wordsBox.querySelector(".box_3")) {
  wordsTr = [
    { original: "Justify", translation: "Оправдывать" },
    { original: "Tutorials", translation: "Обучающие программы" },
    { original: "Change", translation: "Изменять" },
  ];
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (input.value.trim() === "") {
      userAnswer.classList.add("red_text");
      setTimeout(() => {
        userAnswer.classList.remove("red_text");
      }, 600);
      return;
    }
    translationGenerator(wordsTr, userAnswer, countAnswers, input);
  }
});

userAnswer.textContent = getNextWord().original;
countAnswers.innerHTML = `
          <p>${correctAnswersText}: <span class="green_text">${correctAnswers}</span></p>
          <p>${inCorrectAnswersText}: <span class="red_text">${inCorrectAnswers}</span></p>
        `;
