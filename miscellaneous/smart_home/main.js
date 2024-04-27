const dom = {
  selectbox: document.getElementById("selectbox"),
  selectboxList: document.querySelector(".selectbox__list"),
  rooms: document.getElementById("rooms"),
  settings: document.getElementById("settings"),
  settingsTabs: document.getElementById("settings-tabs"),
  setingsPanel: document.getElementById("setings-panel"),
};

const rooms = {
  all: "Все комнаты",
  livingroom: "01-20",
  bedroom: "20-40",
  kitchen: "40-60",
  bathroom: "60-80",
  studio: "80-100",
  washingroom: "100-120",
};

// Выпадающий список
dom.selectbox.querySelector(".selectbox__selected").onclick = (event) => {
  dom.selectbox.classList.toggle("open");
};

document.body.onclick = (event) => {
  const { target } = event;
  if (
    !target.matches(".selectbox") &&
    !target.parentElement.matches(".selectbox") &&
    !target.parentElement.parentElement.matches(".selectbox")
  ) {
    dom.selectbox.classList.remove("open");
  }
};

dom.selectboxList.onclick = (event) => {
  const { target } = event;
  if (target.matches(".selectbox__item")) {
    const { room } = target.dataset;
    const selectedItem = dom.selectboxList.querySelector(".selected");
    selectedItem.classList.remove("selected");
    target.classList.add("selected");
    dom.selectbox.classList.remove("open");
    selectRoom(room);
  }
};

// Выбор комнаты
function selectRoom(room) {
  const selectedRoom = dom.rooms.querySelector(".selected");
  if (selectedRoom) {
    selectedRoom.classList.remove("selected");
  }
  if (room !== "all") {
    const newSelectedRoom = dom.rooms.querySelector(`[data-room=${room}]`);
    newSelectedRoom.classList.add("selected");
    renderScreen(false);
  } else {
    renderScreen(true);
  }
  const selectedSelectboxRoom = dom.selectbox.querySelector(
    ".selectbox__item.selected"
  );
  selectedSelectboxRoom.classList.remove("selected");
  const newSelectedItem = dom.selectbox.querySelector(`[data-room=${room}]`);
  newSelectedItem.classList.add("selected");
  const selectboxSelected = dom.selectbox.querySelector(
    ".selectbox__selected span"
  );
  selectboxSelected.innerText = rooms[room];
}

// Клик по элементу комнаты
dom.rooms.querySelectorAll(".room").forEach((room) => {
  room.onclick = (event) => {
    const value = room.dataset.room;
    selectRoom(value);
  };
});

// Отображение нового экрана
function renderScreen(isRooms) {
  if (isRooms) {
    dom.rooms.style.display = "grid";
    dom.settings.style.display = "none";
  } else {
    dom.settings.style.display = "block";
    dom.rooms.style.display = "none";
  }
}
