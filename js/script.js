function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value;

    let taskList = document.getElementById("taskList");
    
    let newTask = document.createElement("li");

    newTask.textContent = taskText;

    console.log(newTask);

    taskInput.value = "";
}