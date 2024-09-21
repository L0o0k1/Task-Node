import inquirer from "inquirer";
import chalk from "chalk";
import tasks from "./tasks.js";

const mainMenu = async function () {
  while (true) {
    const { choice } = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "What Do You Want To Do Today?",
        choices: [
          "Add a Task",
          "Remove A Task",
          "Toggle Task Completion",
          "List Tasks",
          "Quit",
        ],
      },
    ]);

    switch (choice) {
      case "Add a Task":
        const { description } = await inquirer.prompt([
          {
            type: "input",
            name: "description",
            message: "Enter task description:",
          },
        ]);
        tasks.addNewTask(description);
        break;
      case "Remove A Task":
        const { id: removeId } = await inquirer.prompt([
          {
            type: "input",
            name: "id",
            message: "Enter The task ID to Remove:",
          },
        ]);
        tasks.removeTask(parseInt(removeId));
        break;
      case "Toggle Task Completion":
        const { id: toggleId } = await inquirer.prompt([
          {
            type: "input",
            name: "id",
            message: "Enter the task ID to toggle completion:",
          },
        ]);
        tasks.toggleTaskCompleted(parseInt(toggleId));
        break;
      case "List Tasks":
        const allTasks = tasks.getTasks();
        console.log(chalk.bold("Your Tasks:"));
        allTasks.forEach((task) => {
          const status = task.isCompleted ? "Completed" : "Pending";
          console.log(`- ${task.id}. ${task.description} (${status})`);
        });
        break;
      case "Quit":
        console.log("Goodbye!");
        process.exit(0);
    }
  }
};

mainMenu();
