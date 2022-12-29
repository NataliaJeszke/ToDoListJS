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

    document.getElementById("arrPrint").innerHTML=storedArray;
}

//4. Taski mają się pojawiać jeden pod drugim;





