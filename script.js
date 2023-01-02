let listArray=[];
let storedArray=[];

document.getElementById("submit").addEventListener("click", pushToArray);

function pushToArray(){
    // let getFromLocal=localStorage.getItem("Task")
    task = document.getElementById("inputTask").value;
    listArray.push(`${task}`);
    
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
    label.innerHTML=`${taskFromArray} <br/>`;
    
    myTaskList.appendChild(checkbox);
    myTaskList.appendChild(label);
    
    console.log(storedArray.length);


}
//5. Resetuj listę, usuń z local storage z buttonem "reset"


function resetFunction(){
    storedArray=JSON.parse(localStorage.getItem("array"));
    storedArray.length = 0;
    localStorage.setItem("array", JSON.stringify(storedArray));
    document.location.reload();
}





