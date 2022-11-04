window.addEventListener("load", initEvents);

let tableHeader = ["Id", "Task Name", "Task Desc", "Task Date", "Select Task"];
let table;
let body;
function initEvents() {
    table = document.querySelector("#table");
    document.querySelector("#addTask").addEventListener("click", addTask);
    document.querySelector("#deleteTask").addEventListener("click", deleteTask);
    generateHeader();
}

function generateHeader() {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for(let key of tableHeader) {
        let th = document.createElement("th");
        th.innerHTML = key;
        row.appendChild(th);
    }
    table.appendChild(thead);
    body = table.createTBody();
}

// function addTask() {
//     let taskName = document.querySelector("#box_1").value;
//     let taskTitle = document.querySelector("#box_2").value;
//     let row = table.insertRow();
//     taskId++;
//     let column = row.insertCell();
//     column.innerHTML = taskId;

//     column = row.insertCell();
//     column.innerHTML = taskName;

//     column = row.insertCell();
//     column.innerHTML = taskTitle;

//     column = row.insertCell();
//     let date = new Date();
//     column.innerHTML = date;
// }

function addTask() {
    let taskName = document.querySelector("#box_1");
    let taskDesc = document.querySelector("#box_2");
    obj.addTask(taskName.value, taskDesc.value);
    taskName.value = "";
    taskDesc.value = "";
    showTask();
}

function showTask() {
    body.innerHTML = "";
    obj.taskList.forEach(function(task) {
        let row = body.insertRow();
        let column = row.insertCell();
        column.innerHTML = task.id;

        column = row.insertCell();
        column.innerHTML = task.name;

        column = row.insertCell();
        column.innerHTML = task.details;

        column = row.insertCell();
        column.innerHTML = task.date;

        let inputTag = document.createElement("input");
        inputTag.setAttribute("type","checkbox");
        inputTag.setAttribute("value", task.id);
        column = row.insertCell();
        column.appendChild(inputTag);
        inputTag.addEventListener("change", selectTask);
    });
}

function selectTask() {
    console.log(this.value);
    obj.toggleTask(this.value);
}

function deleteTask() {
    obj.deleteTask();
    showTask();
}