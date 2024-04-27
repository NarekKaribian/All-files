import { AddNewTaskDialog } from "./AddNewTaskDialog/AddNewTaskDialog.component.js";
import { ButtonsPanel } from "./ButtonsPanel/ButtonsPanel.js";
import { Header } from "./Header/Header.js";
import { TasksList } from "./TasksList/TasksList.js";

export function Todolist(data) {
  const container = document.createElement("div");

  const headerElement = Header(data.title);
  const tasksListElement = TasksList(data.tasks);
  const buttonsElement = ButtonsPanel();
  const dialog = AddNewTaskDialog();

  container.append(headerElement, tasksListElement, buttonsElement, dialog);

  return container;
}
