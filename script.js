let task = "";
let listArray=[];


function addFunction(){
    task = document.getElementById("inputTask").value;
    localStorage.setItem(`Task`, `${task}`);
};

document.getElementById("submit").addEventListener("click", pushToArray);

function pushToArray(){
    let getFromLocal=localStorage.getItem("Task")
    listArray.push(`${getFromLocal}`);
    
    localStorage.setItem("array", JSON.stringify(listArray));
    let storedArray=JSON.parse(localStorage.getItem("array"));
    console.log(storedArray);

    const paragraph = document.createElement("p");
    paragraph.setAttribute("class", "listParagraph");
    const node = document.createTextNode(`${task}`);
    paragraph.appendChild(node);
    const element = document.getElementById("taskList")
    element.appendChild(paragraph);

}

//4. Taski mają się pojawiać jeden pod drugim;






