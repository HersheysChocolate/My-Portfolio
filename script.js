// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});


// =========================
// CALCULATOR
// =========================

const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}


// =========================
// TO-DO LIST
// =========================

const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const clearTasks = document.getElementById("clearTasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-task">Delete</button>
        `;

        li.querySelector("span").addEventListener("click", () => {

            tasks[index].completed = !tasks[index].completed;

            saveTasks();
            displayTasks();

        });

        li.querySelector(".delete-task").addEventListener("click", () => {

            tasks.splice(index, 1);

            saveTasks();
            displayTasks();

        });

        taskList.appendChild(li);
    });
}

function addNewTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();

    taskInput.value = "";

    displayTasks();
}

addTask.addEventListener("click", addNewTask);

taskInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        addNewTask();
    }

});

clearTasks.addEventListener("click", () => {

    tasks = [];

    saveTasks();

    displayTasks();

});

displayTasks();