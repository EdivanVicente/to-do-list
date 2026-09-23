function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText  = taskInput.value.trim();
    let taskList  = document.getElementById("taskList");
    let mensagem = document.getElementById("emptyMessage");

    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }
   function checkEmptyList(){
    taskList.children.length;
    
    
    if(checkEmptyList === 0){
        mensagem.style.display ="none"
    }else {
        mensagem.style.display = "block"
    }
   }
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
    taskCheckbox.addEventListener("change", function(){
        taskSpan.classList.toggle("completed")
    });

let taskButton = document.createElement("button");

taskButton.textContent = "🗑"; // o que aparece no botão

taskButton.className = "thrash-icon"; // o nome usado pelo CSS

taskButton.addEventListener("click", function() {
    taskList.removeChild(newTask);
});

newTask.appendChild(taskButton);
    // entrega na tela
    taskList.appendChild(newTask);

    taskInput.value = "";
}