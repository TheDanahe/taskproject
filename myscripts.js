var numTasks = 0;
var numClasses = 0;

const defaultColor = "#0000ff";

// Adds Class Section
function addClass() {
    numClasses++;

    let div = document.createElement("div");
    div.setAttribute("id", "class" + numClasses);
    div.setAttribute("class", "class");

    let setColor = document.createElement("button");
    setColor.innerHTML = "Set Border Color";
    setColor.setAttribute("id", "setcolorbutton");
    setColor.setAttribute("onClick", "setColor(" + numClasses + ")");

    let title = document.createElement("button");
    title.setAttribute("id", "title" + numClasses);
    title.setAttribute("class", "title");
    title.setAttribute("onClick", "editTitle(" + numClasses + ")");
    title.style.display = "none";

    let titlebox = document.createElement("input");
    titlebox.setAttribute("id", "titlebox" + numClasses);
    titlebox.attributes.type = "textfield";

    let done = document.createElement("button");
    done.innerHTML = "Set Class Name";
    done.setAttribute("id", "titledonebutton" + numClasses);
    done.setAttribute("onClick", "doneTitle(" + numClasses + ")");

    let addtaskbutton = document.createElement("button");
    addtaskbutton.innerHTML = "Add Task";
    addtaskbutton.setAttribute("id", "addtaskbutton");
    addtaskbutton.setAttribute("onClick", "addTask(" + numClasses + ")");
    addtaskbutton.style.display = "block";

    let removeclassbutton = document.createElement("button");
    removeclassbutton.innerHTML = "Remove Class";
    removeclassbutton.setAttribute("id", "removeclassbutton");
    removeclassbutton.setAttribute("onClick", "removeClass(" + numClasses + ")");

    div.appendChild(title);
    div.appendChild(titlebox);
    div.appendChild(done);
    //div.appendChild(setColor);
    div.appendChild(removeclassbutton);
    div.appendChild(addtaskbutton);

    //document.body.appendChild(div);
    document.getElementById("wrapper").appendChild(div);
}

// edits class title
function editTitle(classNum) {
    document.getElementById("title" + classNum).style.display = "none";
    document.getElementById("titlebox" + classNum).style.display = "inline";
    document.getElementById("titledonebutton" + classNum).style.display = "inline";
}

// done for class
function doneTitle(classNum) {
    let titleToAdd = document.querySelectorAll("#titlebox" + classNum)[0].value;
    document.getElementById("titlebox" + classNum).style.display = "none";
    document.getElementById("title" + classNum).style.display = "inline";
    document.getElementById("title" + classNum).innerHTML = titleToAdd;
    document.getElementById("titledonebutton" + classNum).style.display = "none";
}

// deletes class
function removeClass(classNum) {
    document.getElementById("class" + classNum).remove();
}

function addTask(classNum) {
    numTasks++;

    let div = document.createElement("div");
    div.setAttribute("id", "task" + numTasks);
    div.setAttribute("class", "task");

    let text = document.createElement("button");
    text.setAttribute("id", "text" + numTasks);
    text.setAttribute("class", "task");
    text.setAttribute("onClick", "edit(" + numTasks + ")");
    text.style.display = "none";

    let taskbox = document.createElement("input");
    taskbox.setAttribute("id", "taskbox" + numTasks);
    taskbox.attributes.type = "textfield";

    let done = document.createElement("button");
    done.innerHTML = "done";
    done.setAttribute("id", "donebutton" + numTasks);
    done.setAttribute("onClick", "done(" + numTasks + ")");

    let removetaskbutton = document.createElement("button");
    removetaskbutton.innerHTML = "Remove Task";
    removetaskbutton.setAttribute("id", "removetaskbutton" + numTasks);
    removetaskbutton.setAttribute("onClick", "removeTask(" + numTasks + ")");

    div.appendChild(text);
    div.appendChild(taskbox);
    div.appendChild(done);
    div.appendChild(removetaskbutton);

    document.getElementById("class" + classNum).appendChild(div);
}

// done for task
function done(taskNum) {
    let taskToAdd = document.querySelectorAll("#taskbox" + taskNum)[0].value;
    document.getElementById("taskbox" + taskNum).style.display = "none";
    document.getElementById("text" + taskNum).style.display = "inline";
    document.getElementById("text" + taskNum).innerHTML = taskToAdd;
    document.getElementById("donebutton" + taskNum).style.display = "none";
}

// edit task
function edit(taskNum) {
    document.getElementById("text" + taskNum).style.display = "none";
    document.getElementById("taskbox" + taskNum).style.display = "inline";
    document.getElementById("donebutton" + taskNum).style.display = "inline";
}

// deletes task
function removeTask(taskNum) {
    document.getElementById("task" + taskNum).remove();
}

// set color of class border
function setColor(classNum) {
    let colorSelect = document.createElement("input");
    colorSelect.setAttribute("type", "color");
    colorSelect.setAttribute("id", "color-picker" + numClasses);
    colorSelect.setAttribute("value", "#ff0000");

    colorSelect.addEventListener("input", updateFirst, false);
    colorSelect.addEventListener("change", updateAll, false);
    colorSelect.select();

    document.getElementById("class" + classNum).appendChild(colorSelect);
}

function updateFirst(event) {
  const div = document.querySelector("div");
  if (div) {
    div.style.color = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll("div").forEach((div) => {
    div.style.color = event.target.value;
  });
}