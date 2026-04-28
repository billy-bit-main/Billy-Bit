// CLOCK
function updateTime() {
    const now = new Date();

    document.getElementById("time").textContent =
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    document.getElementById("date").textContent =
        now.toLocaleDateString(undefined, {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        });
}

setInterval(updateTime, 1000);
updateTime();


// TASK SYSTEM
const taskList = document.getElementById("taskList");
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// render tasks
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.onclick = () => {
            tasks.splice(index, 1);
            saveTasks();
        };

        const text = document.createElement("span");
        text.textContent = task;

        li.appendChild(checkbox);
        li.appendChild(text);
        taskList.appendChild(li);
    });
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// show input
addBtn.onclick = () => {
    input.style.display = "block";
    input.focus();
};

// add task
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {
        tasks.push(input.value.trim());
        input.value = "";
        input.style.display = "none";
        saveTasks();
    }
});

renderTasks();
