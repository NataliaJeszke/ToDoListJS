let listArray=[];
let storedArray=[];

document.getElementById("submit").addEventListener("click", pushToArray);


//Function that pushes elements into the array and sends array to local storage. Also displays tasks in a div with id "taskList".
function pushToArray(){
    // let getFromLocal=localStorage.getItem("Task")

    // task = document.getElementById("inputTask").value;
    // listArray.push(`${task}`);

    task = {
        "titleTask": document.getElementById("inputTask").value,
        "isDone": false
    }
    listArray.push(task)
    
    localStorage.setItem("array", JSON.stringify(listArray));

    storedArray=JSON.parse(localStorage.getItem("array"));

    let taskFromArray = storedArray[storedArray.length-1];

    let myTaskList = document.getElementById("taskList");
         
    let checkbox = document.createElement('input');
 
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.className = "id";
    checkbox.checked=false;


    let label = document.createElement('label');

    label.htmlFor = "id";
    label.className="label";
    label.innerHTML=`${taskFromArray.titleTask} <br/>`;
    
    myTaskList.appendChild(checkbox);
    myTaskList.appendChild(label);
    
    console.log(storedArray.length);

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


//6. utworzyć obiekty w array'u czyli taski z wartością string i boolean (odhaczony task, nieodhaczony task). Podmienić do powyższych funkcji.

//7. Wyświetlić na refresh taski zrobione i te które są do zrobienia.

