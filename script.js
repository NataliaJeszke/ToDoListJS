let listArray=[];
let storedArray=[];


document.getElementById("submit").addEventListener("click", addTaskToList);


//Function that pushes elements into the array and sends array to local storage. Also displays tasks in a div with id "taskList".
function addTaskToList(){

    // task = {
    //     "titleTask": document.getElementById("inputTask").value,
    //     "isDone": false
    // }
    // listArray.push(task)
    
    // localStorage.setItem("array", JSON.stringify(listArray));

    // storedArray=JSON.parse(localStorage.getItem("array"));

    // let taskFromArray = storedArray[storedArray.length-1];

    let myTaskList = document.getElementById("taskList");
         
    let checkbox = document.createElement('input');
 
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.className = "id";
    checkbox.checked=false;

    let taskName = document.getElementById("inputTask").value;
    let label = document.createElement('label');

    label.htmlFor = "id";
    label.className="label";
    label.innerHTML=`${taskName} <br/>`;
    
    myTaskList.appendChild(checkbox);
    myTaskList.appendChild(label);
    
    saveList();
    console.log(listArray);


}

function saveList(){
    let elements =document.getElementsByClassName("id");
    for(i=0; i<elements.length; i++){
        let isDone = false;
        if (elements[i].checked === true) {
            isDone= true;
        }
        
        let taskContent = document.getElementsByClassName("label");
        let taskName = taskContent[i].textContent;

        let task = {
            "taskName":`${taskName}`,
            "isDone": isDone
        };
        listArray.push(task);
    }
}


//Function RESET for button "Reset".-> Removes tasks from local storage, reloads page.

function resetFunction(){
    storedArray=JSON.parse(localStorage.getItem("array"));
    storedArray.length = 0;
    localStorage.setItem("array", JSON.stringify(storedArray));
    document.location.reload();
}

//Function that shows tasks saved in local storage.

window.onload = function(){
    storedArray=JSON.parse(localStorage.getItem("array"));

    function loopArray(){
        let taskFromArray="";
        for (i=0; i<storedArray.length; i++){
            taskFromArray= storedArray[i];
    
            let myTaskList = document.getElementById("taskList");
            
            let checkbox = document.createElement('input');
    
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.className = "id";

            if(taskFromArray.isDone === true){
                checkbox.checked=true;
            } else {
                checkbox.checked=false;
            }


            let label = document.createElement('label');

            label.htmlFor = "id";
            label.className="label";
            label.innerHTML=`${taskFromArray.titleTask} <br/>`;
            
            myTaskList.appendChild(checkbox);
            myTaskList.appendChild(label);
        }

    }

    loopArray();
}


//8. 1. Kliknięcie checkboxa/dodanie taska, 2. loop przejście po wszystkich elementach listy tasków i zrobienie na tej podstawie arraya, 3. zapisanie arraya do localstorage, 4. na onload na podstawie arraya wygenerować listę.