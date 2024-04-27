let items = document.querySelectorAll(".countdown_item > h4");
let countdownElement = document.getElementById("countdown");

let countdownDate = new Date(2023, 12, 1, 23, 37, 0).getTime();

function getCountdownTime() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  items.forEach(function (item, index) {
    item.textContent = values[index];
  });

  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "<h4 class='expired'>Время на скидку вышло";
  }
}

let countdown = setInterval(getCountdownTime, 1000);

getCountdownTime();
