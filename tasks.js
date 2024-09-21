import Task from "./task.js";

let tasks = [];

const addNewTask = (description) => {
  const id = tasks.length + 1;
  const newTask = new Task(id, description, false);
  tasks.push(newTask);
};

const removeTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
};

const toggleTaskCompleted = (id) => {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.isCompleted = !task.isCompleted;
  }
};

const getTasks = () => {
  return tasks;
};

export default {
  addNewTask,
  removeTask,
  toggleTaskCompleted,
  getTasks,
};
