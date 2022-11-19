function addTable() {
    var element = document.getElementById('oneTable');
    if(element){
        alert('Таблица уже существует!');
    }
    else{
        let table = document.createElement("table");
        table.id = 'oneTable';
        let line = document.createElement("tr");
        let element1 = document.createElement("th");
        let element2 = document.createElement("th");
        element1.innerHTML = "Номер строки";
        element2.innerHTML = "Значение";
        line.appendChild(element1);
        line.appendChild(element2);
        table.appendChild(line);
        document.body.appendChild(table);
        addStr.disabled = false;
        deleteStr.disabled = false;
        inputStr.disabled = false; 
    }
}
function addLine () {
    let table = document.getElementById('oneTable');
    i+=1;
    let number = inputStr.value;
    let line = document.createElement("tr");
    let element1 = document.createElement("th");
    let element2 = document.createElement("th");
    element1.innerHTML = i;
    element2.innerHTML = number;
    line.appendChild(element1);
    line.appendChild(element2);
    table.appendChild(line);
}
function deleteLine() {
    let table = document.getElementById('oneTable');
    let number = inputStr.value;
    let k = 1;
    for (k=1; k < table.childElementCount; k++){
        if (table.childNodes[k].childNodes[0].innerHTML == number){
            break;
        }
    }
    if (k<table.childElementCount){
        table.removeChild(table.childNodes[k]);
    }
}
let i = 0;
const createButton = document.getElementById("createButton");
createButton.addEventListener("click", addTable);
const addStr = document.getElementById("addStr");
const deleteStr = document.getElementById("deleteStr");
const inputStr = document.getElementById("inputStr");
const addButton = document.getElementById("addStr");
addStr.addEventListener("click", addLine);
const deleteButton = document.getElementById("deleteStr");
deleteButton.addEventListener("click", deleteLine);