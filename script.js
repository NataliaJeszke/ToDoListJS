let task = "";
localStorage.setItem(`List`, `${task}`);

function addFunction(){
    task = document.getElementById("inputTask").value;

};

const list = Object.assign({}, [`${task}`,'b','c']);
console.log(list);

//1. Utworzyć obiekt i dodać do niego task. Sprawdzić obiekt w konsoli.