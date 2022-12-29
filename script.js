let listArray=[];

document.getElementById("submit").addEventListener("click", pushToArray);

function pushToArray(){
    // let getFromLocal=localStorage.getItem("Task")
    task = document.getElementById("inputTask").value;
    listArray.push(`${task}`);
    
    localStorage.setItem("array", JSON.stringify(listArray));
    let storedArray=JSON.parse(localStorage.getItem("array"));

    let taskFromArray = storedArray[storedArray.length-1];

    let myTaskList = document.getElementById("taskList");
         
    let checkbox = document.createElement('input');
 
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.className = "id";
    
    
    let label = document.createElement('label');

    label.htmlFor = "id";
    label.className="label"
    label.innerHTML=`${taskFromArray} <br/>`;
    
    myTaskList.appendChild(checkbox);
    myTaskList.appendChild(label);
    
    console.log(storedArray.length);

}
//5. Po kliknięciu w checkboxa wykreśl taska


  
//////Checkbox with strike ////

    let taskDone2 = document.getElementsByClassName("id");

    taskDone2.addEventListener('click',()=>{
        if(checkbox.checked){
            let textCross = document.getElementsByClassName("label");

    textCross.classList.add="cross";
        }
    });
//     function taskDone(){
//         let checkbox = document.getElementsByClassName('id');
//   if (checkbox.checked != true)
//   {
//     let textCross = document.getElementsByClassName("label");

//     textCross.classList.add="cross";
//   }

//     }




