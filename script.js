let task = "";
let listArray=[];


function addFunction(){
    task = document.getElementById("inputTask").value;
    localStorage.setItem(`Task`, `${task}`);

    getTask=localStorage.getItem(`Task`);

    let myTaskList = document.getElementById("taskList");
             
    let checkbox = document.createElement('input');
     
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
     
    let label = document.createElement('label');

    label.htmlFor = "id";
    label.className="label"
    label.innerHTML=`${getTask} <br/>`;
     
    myTaskList.appendChild(checkbox);
    myTaskList.appendChild(label);
};


document.getElementById("submit").addEventListener("click", pushToArray);

function pushToArray(){
    let getFromLocal=localStorage.getItem("Task")
    listArray.push(`${getFromLocal}`);
    
    localStorage.setItem("array", JSON.stringify(listArray));
    let storedArray=JSON.parse(localStorage.getItem("array"));
    // console.log(storedArray);

}

//4. Taski mają się pojawiać jeden pod drugim;






