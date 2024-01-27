const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value; // Use textContent for security
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Event listener for listContainer
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI" || e.target.tagName === "SPAN") {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
        saveData();
    }
}, false);

// Function to save data to localStorage
function saveData() {
    localStorage.setItem("taskList", listContainer.innerHTML);
}

// Function to initialize list from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("taskList") || '';
}

// Call showTask to initialize list
showTask();
