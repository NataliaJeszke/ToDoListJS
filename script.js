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
    console.log(listArray);
}

//2. Dodac arraya do local storage



