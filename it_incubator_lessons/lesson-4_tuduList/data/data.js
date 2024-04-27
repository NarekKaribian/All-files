export const data = {
  todolist: {
    id: createUniqId(),
    title: "to Learn js",
    tasks: [
      {
        id: createUniqId(),
        title: "Learn HTML",
      },
      {
        id: createUniqId(),
        title: "Learn CSS",
      },
    ],
    addNewTaskDialog: {
      isOpen: false,
      error: null,
    },
  },
};

function setError(error) {
  data.todolist.addNewTaskDialog.error = error;
  notifySubscriber();
}

export function openAddTaskDialog() {
  data.todolist.addNewTaskDialog.isOpen = true;
  notifySubscriber();
}

export function closeAddTaskDialog() {
  data.todolist.addNewTaskDialog.isOpen = false;
  notifySubscriber();
}

let notifySubscriber = null;
export function subscribe(subscriber) {
  notifySubscriber = subscriber;
}

function createUniqId() {
  return Math.floor(Math.random() * 100000);
}

export function createTask(newTitle) {
  if (newTitle.trim().length > 0) {
    const newTask = {
      id: createUniqId(),
      title: newTitle,
    };
    data.todolist.tasks.push(newTask);
    notifySubscriber();
    return true;
  } else {
    setError("empty input");
    return false;
  }
}

export function deleteTask(id) {
  data.todolist.tasks = data.todolist.tasks.filter((t) => t.id !== id);

  notifySubscriber();
}
