let taskInput = document.getElementById("taskName");
let level = document.getElementById("taskLevel");
let add = document.getElementById("add");
let list = document.querySelector(".todoList");
let completedList = document.querySelector(".completedList"); 
let CompletedHead = document.querySelector(".CompletedHead");
let TodoHead = document.querySelector(".TodoHead");

add.onclick = function () {
    let val = taskInput.value.trim();
    let lvl = level.value;
    if (val == "") {
        alert("No title");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = val;
    li.appendChild(span);

    let tag = document.createElement("span");
    if (lvl == "1") tag.innerText = "Urgent";
    else if (lvl == "2") tag.innerText = "Normal";
    else tag.innerText = "Low";
    tag.classList.add("level");
    li.appendChild(tag);

    let CompB = document.createElement("button");
    CompB.innerText = "complete";
    CompB.onclick = function () {
        li.remove(); 
        li.querySelectorAll("button").forEach(btn => btn.remove()); 
        li.classList.add("completed");
        completedList.appendChild(li);
        UpdateView();
    };
    CompB.classList.add("delete");
    li.appendChild(CompB);

    let RemoveB = document.createElement("button");
    RemoveB.innerText = "remove";
    RemoveB.onclick = function () {
        li.remove();
        UpdateView(); 
    };
    RemoveB.classList.add("delete");
    li.appendChild(RemoveB);

    list.appendChild(li);
    taskInput.value = "";
    level.value = "2";

    UpdateView();
};

taskInput.addEventListener("keypress", function (e) {
    if (e.key == "Enter") add.click();
});

function UpdateView() {
    if (completedList.children.length <= 1) {
        completedList.classList.add("invisible");
        CompletedHead.classList.add("invisible");
    } else {
        completedList.classList.remove("invisible");
        CompletedHead.classList.remove("invisible");
    }

    if (list.children.length <= 1) {
        list.classList.add("invisible");
        TodoHead.classList.add("invisible");
    } else {
        list.classList.remove("invisible");
        TodoHead.classList.remove("invisible");
    }
}

window.onload = UpdateView;
