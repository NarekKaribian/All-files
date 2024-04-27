let heroImg = document.querySelector("#hero_img");
let imgBlock = document.querySelector("#img_block");
let rightPosition = 0;
let imgBlockPosition = 0;

function moveHero() {
  rightPosition++;
  if (rightPosition === 5) {
    rightPosition = 0;
  }
  heroImg.style.left = `-${rightPosition * 288}px`;
  imgBlock.style.left = `${imgBlockPosition * 20}px`;
}
const handler = {
  right: () => {
    heroImg.style.transform = "scale(-1,1)";
    imgBlockPosition++;
    moveHero();
  },
  left: () => {
    heroImg.style.transform = "scale(1,1)";
    imgBlockPosition--;
    moveHero();
  },
};

// ОБРАБОТЧИКИ СОБЫТИЙ
let timer = null;
let x = 0;
let halfWidth = window.screen.width / 2;
let onTouchStart = (event) => {
  event.preventDefault();
  x = event.type === "mousedown" ? event.screenX : event.touches[0].screenX;
  timer = setInterval(() => {
    x > halfWidth ? handler.right() : handler.left();
  }, 130);
};
let onTouchEnd = (event) => {
  event.preventDefault();
  clearInterval(timer);
};

window.onmousedown = onTouchStart;
window.ontouchstart = onTouchStart;

window.onmouseup = onTouchEnd;
window.ontouchend = onTouchEnd;
