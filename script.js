let task = "";
let listArray=[];


function addFunction(){
    task = document.getElementById("inputTask").value;
    localStorage.setItem(`List`, `${task}`);
};

document.getElementById("submit").addEventListener("click", pushToArray);

function pushToArray(){
    let getFromLocal=localStorage.getItem("List")
    listArray.push(`${getFromLocal}`);
    
    localStorage.setItem("array", JSON.stringify(listArray));
    let storedArray=JSON.parse(localStorage.getItem("array"));
    console.log(storedArray);
}

//3. Wyciągnąć arraya z local storage i przekazać zawartość do html



