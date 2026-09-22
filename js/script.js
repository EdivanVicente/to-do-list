function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText  = taskInput.value;
    let taskList  = document.getElementById("taskList");
   
    // cria o li
    let newTask = document.createElement("li");

    // cria o checkbox
    let taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";

    // cria o span com o texto
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // monta o li por dentro (ordem = ordem na tela)
    newTask.appendChild(taskCheckbox);
    newTask.appendChild(taskSpan);
    // monta a lixeira 
   // monta a lixeira
2
let taskButton = document.createElement("button");
3
taskButton.textContent = "🗑"; // o que aparece no botão
4
taskButton.className = "thrash-icon"; // o nome usado pelo CSS
5
newTask.appendChild(taskButton);
    // entrega na tela
    taskList.appendChild(newTask);

    taskInput.value = "";
}