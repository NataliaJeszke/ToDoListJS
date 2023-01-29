// EventListeners for buttons
document.getElementById("submit").addEventListener("click", addTaskToList);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTaskToList();
  }
});
document.getElementById("resetBtn").addEventListener("click", resetFunction);

// Variables for DOM elements
const $myTaskList = document.getElementById("taskList");
const $elements = document.getElementsByClassName("element");
const $taskContent = document.getElementsByClassName("label");
// Variable for array of objects from local storage
const $storedArray = JSON.parse(localStorage.getItem("array"));

//Function that creates elements - tasks in HTML
function addTaskToList() {
  let checkbox = document.createElement("input");

  let taskName = document.getElementById("inputTask").value;
  let label = document.createElement("label");

  if (taskName !== "") {
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.className = "element";
    checkbox.checked = false;

    label.htmlFor = "id";
    label.className = "label";
    label.innerHTML = `${taskName} <br/>`;

    $myTaskList.append(checkbox, label);
  }

  if (taskName === "") {
    alert("can't add empty task");
  }

  saveList();

  addEventListenerToCheckbox();

  tasksCounter();
  doneTasksCounter();
}

//Function that loops through elements of DOM (checboxes) and creating objects with two elements that is pushed into the array and stored in local storage.
function saveList() {
  let listArray = [];
  for (let i = 0; i < $elements.length; i++) {
    const isDone = $elements[i].checked;

    const taskName = $taskContent[i].textContent;

    const task = {
      taskName,
      isDone,
    };

    listArray.push(task);
    localStorage.setItem("array", JSON.stringify(listArray));
    console.log(listArray);
  }
  doneTasksCounter();
}

//Function that adds EventListeners to all checkboxes
function addEventListenerToCheckbox() {
  for (let i = 0; i < $elements.length; i++) {
    $elements[i].addEventListener("click", saveList);
  }
}

//Function that counts children of div with id "taskList" and shows number of all tasks
function tasksCounter() {
  let numberOfElements = $myTaskList.getElementsByClassName("element").length;
  document.querySelector(".tasksToDo").innerHTML = `${numberOfElements}`;
}

//Function gets array from local storage, finds "isDone" property and checks how many values "true" is in property "isDone". This function is added to saveList() with addEventListinerToCheckbox() so is enabled everytime checkbox is clicked.
function doneTasksCounter() {
  let storedArray = JSON.parse(localStorage.getItem("array"));
  let doneTasksCount = storedArray.filter((item) => item.isDone).length;

  document.querySelector(".tasksDone").innerHTML =
    "&nbsp" + `${doneTasksCount}`;
}

//Function RESET for button "Reset".-> Removes tasks from local storage, reloads page.

function resetFunction() {
  $storedArray.length = 0;
  localStorage.setItem("array", JSON.stringify($storedArray));
  document.location.reload();
}

//Function that shows tasks saved in local storage after refresh page.

window.onload = function () {
  let taskFromArray = "";
  for (let i = 0; i < $storedArray.length; i++) {
    taskFromArray = $storedArray[i];

    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.className = "element";

    if (taskFromArray.isDone) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }

    let label = document.createElement("label");

    label.htmlFor = "id";
    label.className = "label";
    label.innerHTML = `${taskFromArray.taskName} <br/>`;

    $myTaskList.append(checkbox, label);
  }

  addEventListenerToCheckbox();

  tasksCounter();
  doneTasksCounter();
};
