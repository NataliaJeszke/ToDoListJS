document.getElementById("submit").addEventListener("click", addTaskToList);

document.getElementById("resetBtn").addEventListener("click", resetFunction);

//Function that creates elements - tasks in HTML
function addTaskToList() {
  let myTaskList = document.getElementById("taskList");

  let checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.className = "id";
  checkbox.checked = false;

  let taskName = document.getElementById("inputTask").value;
  let label = document.createElement("label");

  label.htmlFor = "id";
  label.className = "label";
  label.innerHTML = `${taskName} <br/>`;

  myTaskList.appendChild(checkbox);
  myTaskList.appendChild(label);

  saveList();

  addEventListenerToCheckbox();

  tasksCounter();
  doneTasksCounter();
}

//Function that loops through elements of DOM (checboxes) and creating objects with two elements that is pushed into the array and stored in local storage.
function saveList() {
  let listArray = [];

  let elements = document.getElementsByClassName("id");
  for (i = 0; i < elements.length; i++) {
    let isDone = false;
    if (elements[i].checked === true) {
      isDone = true;
    }

    let taskContent = document.getElementsByClassName("label");
    let taskName = taskContent[i].textContent;

    let task = {
      taskName: `${taskName}`,
      isDone: isDone,
    };
    listArray.push(task);
    localStorage.setItem("array", JSON.stringify(listArray));
    console.log(listArray);
  }
  doneTasksCounter();
}

function addEventListenerToCheckbox() {
  let elements = document.getElementsByClassName("id");
  for (i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", saveList);
  }
}

//Function that counts children of div with id "taskList"
function tasksCounter() {
  let elementsOfTaskList = document.getElementById("taskList");
  let numberOfElements =
    elementsOfTaskList.getElementsByTagName("label").length;
  document.querySelector(".tasksToDo").innerHTML = `${numberOfElements}`;
}

//Function gets array from local storage, finds "isDone" property and checks how many values "true" is in property "isDone", all with event listener for checkboxes.
function doneTasksCounter() {
  let storedArray = JSON.parse(localStorage.getItem("array"));
  let result = storedArray.map(({ isDone }) => isDone);
  let doneTasks = result.filter((done) => done === true).length;

  document.querySelector(".tasksDone").innerHTML = `${doneTasks}`;
}

//Function RESET for button "Reset".-> Removes tasks from local storage, reloads page.

function resetFunction() {
  let storedArray = JSON.parse(localStorage.getItem("array"));
  storedArray.length = 0;
  localStorage.setItem("array", JSON.stringify(storedArray));
  document.location.reload();
}

//Function that shows tasks saved in local storage after refresh page.

window.onload = function () {
  let storedArray = JSON.parse(localStorage.getItem("array"));

  function loopArray() {
    let taskFromArray = "";
    for (i = 0; i < storedArray.length; i++) {
      taskFromArray = storedArray[i];

      let myTaskList = document.getElementById("taskList");

      let checkbox = document.createElement("input");

      checkbox.type = "checkbox";
      checkbox.name = "name";
      checkbox.value = "value";
      checkbox.className = "id";

      if (taskFromArray.isDone === true) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }

      let label = document.createElement("label");

      label.htmlFor = "id";
      label.className = "label";
      label.innerHTML = `${taskFromArray.taskName} <br/>`;

      myTaskList.appendChild(checkbox);
      myTaskList.appendChild(label);
    }
  }

  loopArray();

  addEventListenerToCheckbox();

  tasksCounter();
  doneTasksCounter();
};
