import { closeAddTaskDialog, createTask, data } from "../../../data/data.js";

export function AddNewTaskDialog() {
  const container = document.createElement("dialog");

  const inputElement = document.createElement("input");
  const saveButtonElement = document.createElement("button");
  saveButtonElement.append("save");
  saveButtonElement.addEventListener("click", () => {
    createTask(inputElement.value);
  });

  const cancelButtonElement = document.createElement("button");
  cancelButtonElement.append("cancel");
  cancelButtonElement.addEventListener("click", () => {
    closeAddTaskDialog();
  });

  if (data.todolist.addNewTaskDialog.isOpen) {
    container.open = true;
  }

  container.append(inputElement);

  if (data.todolist.addNewTaskDialog.error !== null) {
    inputElement.classList.add("error");
    const errorElement = document.createElement("span");
    errorElement.append(data.todolist.addNewTaskDialog.error);
    container.append(errorElement);
  }

  container.append(saveButtonElement);
  container.append(cancelButtonElement);

  return container;
}
