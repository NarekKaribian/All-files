const quiz = {
  words: [],
  correctIndex: 0,
  correctAnswers: 0,
  correctAnswersText: "Правильные ответы",
  inCorrectAnswers: 0,
  inCorrectAnswersText: "Неправильные ответы",
  headerElements: {
    headerContainer: document.querySelector(".header_container"),
    headerLogo: document.querySelector(".header_logo"),
    burgerNav: document.querySelector(".burger_nav"),
    burgerIcon: document.querySelector(".burger_icon"),
  },
  mainElements: {
    containerMain: document.querySelector(".container_main"),
    userAnswer: document.querySelector(".user_answer"),
    input: document.querySelector(".input"),
    button: document.querySelector(".button"),
    translation: document.querySelector(".translation"),
    countAnswers: document.querySelector(".count_answers"),
  },
  init() {
    if (document.title === "Words 01-20") {
      this.words = randomWords([
        { original: "Continue", translation: "Продолжать" },
        { original: "Title", translation: "Заголовок" },
        { original: "Rows", translation: "Ряды" },
        { original: "Configure", translation: "Настроить" },
        { original: "Tasks", translation: "Задания" },
        { original: "Sync", translation: "Синхронизировать" },
      ]);
    }
    this.setupHeader();
    this.setupMain();
  },
  setupHeader() {
    const { burgerIcon, burgerNav } = this.headerElements;
    this.burgerClick(burgerIcon, burgerNav);
  },
  setupMain() {
    const { button, input } = this.mainElements;
    const { correctAnswersText, inCorrectAnswersText } = this;
    this.mainElements.countAnswers.innerHTML = `
        <p>${correctAnswersText}: <span class="green_text">${this.correctAnswers}</span></p>
        <p>${inCorrectAnswersText}: <span class="red_text">${this.inCorrectAnswers}</span></p>
      `;
    this.mainElements.userAnswer.textContent = this.getNextWord().original;

    button.addEventListener("click", () => {
      this.translationGenerator();
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.translationGenerator();
      }
    });
  },
  burgerClick(burgerIcon, burgerNav) {
    burgerIcon.addEventListener("click", function () {
      this.classList.toggle("active");
      burgerNav.classList.toggle("open");
    });
  },
  translationGenerator() {
    const { userAnswer, input, button, translation, countAnswers } =
      this.mainElements;
    const currentWord = this.getNextWord();
    const userTranslation = input.value.toLowerCase().trim();
    const correctTranslation = currentWord.translation.toLowerCase().trim();

    if (input.value.trim() === "") {
      userAnswer.classList.add("red_text");
      setTimeout(() => {
        userAnswer.classList.remove("red_text");
      }, 600);
      return;
    }

    if (userTranslation === correctTranslation) {
      translation.innerHTML = `${currentWord.original} - <span class="green_text"> ${currentWord.translation} </span>`;
      this.correctAnswers++;
      button.classList.add("green");
    } else {
      translation.innerHTML = `${currentWord.original} - <span class="red_text">${currentWord.translation}</span>`;
      this.inCorrectAnswers++;
      button.classList.add("red");
    }
    setTimeout(() => {
      button.classList.remove("green", "red");
    }, 400);

    this.correctIndex = (this.correctIndex + 1) % this.words.length;

    userAnswer.textContent = this.getNextWord().original;
    countAnswers.innerHTML = `
        <p>${this.correctAnswersText}: <span class="green_text">${this.correctAnswers}</span></p>
        <p>${this.inCorrectAnswersText}: <span class="red_text">${this.inCorrectAnswers}</span></p>
      `;
    input.value = "";
  },
  getNextWord() {
    return this.words[this.correctIndex];
  },
};

quiz.init();
