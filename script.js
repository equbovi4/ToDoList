const userInput = document.getElementById("user-input")
const allTasks = document.getElementById("all-tasks")
const pendingTasks = document.getElementById("pending-tasks")
const completedTasks = document.getElementById("completed-tasks")
const clear = document.getElementById("clear-all")
const taskList = document.getElementById("task-list")

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && userInput.value != "") {
        newToDo(userInput.value)
        userInput.value = "";
    }
});

allTasks.addEventListener("click", function() {
    var tasks = document.querySelectorAll(".input-checkbox")
    tasks.forEach(task => {
        task.parentElement.hidden = false;
    })
});

pendingTasks.addEventListener("click", function() {
    var tasks = document.querySelectorAll(".input-checkbox")
    tasks.forEach(task => {
        if (task.checked != false) {
            task.parentElement.hidden = true;
        } else {
            task.parentElement.hidden = false;
        }
    })
});

completedTasks.addEventListener("click", function() {
    var tasks = document.querySelectorAll(".input-checkbox")
    tasks.forEach(task => {
        if (task.checked != true) {
            task.parentElement.hidden = true;
        } else {
            task.parentElement.hidden = false;
        }
    })
});

function newToDo(toDo) {
    var label = document.createElement("label");
    label.classList.add("task")
    label.setAttribute("for", "input-checkbox")

    var textContent = document.createTextNode(toDo);
    var checkbox = document.createElement("input");

    checkbox.type = "checkbox"
    checkbox.classList.add("input-checkbox")
    checkbox.setAttribute("id", "input-checkbox")

    label.appendChild(checkbox);
    label.appendChild(textContent);
    taskList.appendChild(label);

    checkbox.addEventListener("click", function() {
        if (checkbox.checked == true) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    });
}

clear.addEventListener("click", function() {
    let tasks = document.querySelectorAll(".task")
    tasks.forEach(task => {
        task.remove();
    });
})