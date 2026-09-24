// ============================================
// FUNÇÃO PRINCIPAL - cria uma nova tarefa
// ============================================
function addTask() {

    // pega os elementos do HTML
    let taskInput = document.getElementById("taskInput");
    let taskText  = taskInput.value.trim();   // .trim() remove espaços das pontas
    let taskList  = document.getElementById("taskList");

    // bloqueia tarefa vazia (ou só com espaços)
    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;   // encerra a função aqui, nada abaixo roda
    }

    // cria o <li> que vai envolver tudo
    let newTask = document.createElement("li");

    // cria o checkbox
    let taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";

    // cria o <span> com o texto da tarefa
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // monta o <li> por dentro (a ordem aqui = a ordem na tela)
    newTask.appendChild(taskCheckbox);
    newTask.appendChild(taskSpan);

    // --- COMPORTAMENTO DO CHECKBOX ---
    taskCheckbox.addEventListener("change", function() {

        // risca / desrisca o texto
        taskSpan.classList.toggle("completed");

        // reordena: como o newTask já está na lista, estas linhas MOVEM ele
        if (taskCheckbox.checked) {
            taskList.appendChild(newTask);   // concluída → fim da lista
        } else {
            taskList.prepend(newTask);       // voltou a fazer → topo da lista
        }

        checkAllDone();   // mudou a contagem de marcadas
    });

    // --- BOTÃO DA LIXEIRA ---
    let taskButton = document.createElement("button");
    taskButton.textContent = "🗑";           // o que aparece no botão
    taskButton.className = "thrash-icon";    // o nome usado pelo CSS

    taskButton.addEventListener("click", function() {
        taskList.removeChild(newTask);   // apaga a tarefa inteira
        checkEmptyList();                // a lista pode ter ficado vazia
        checkAllDone();                  // as que sobraram podem estar todas feitas
    });

    newTask.appendChild(taskButton);

    // entrega na tela (só agora a tarefa aparece)
    taskList.appendChild(newTask);

    // limpa o campo para a próxima tarefa
    taskInput.value = "";

    checkEmptyList();   // já tem tarefa → esconde a mensagem de lista vazia
    checkAllDone();     // a nova entra desmarcada → esconde o troféu
}


// ============================================
// AJUDANTE 1 - lista vazia
// ============================================
function checkEmptyList() {

    let taskList = document.getElementById("taskList");
    let mensagem = document.getElementById("emptyMessage");

    if (taskList.children.length === 0) {
        mensagem.style.display = "block";   // vazia → mostra
    } else {
        mensagem.style.display = "none";    // tem tarefa → esconde
    }
}


// ============================================
// AJUDANTE 2 - todas as tarefas concluídas
// ============================================
function checkAllDone() {

    let taskList = document.getElementById("taskList");
    let mensagem = document.getElementById("allDoneMessage");

    let total    = taskList.children.length;                              // quantos <li>
    let marcadas = taskList.querySelectorAll("input:checked").length;     // quantos marcados

    // total > 0 evita mostrar o troféu com a lista vazia
    if (total > 0 && marcadas === total) {
        mensagem.style.display = "block";   // todas feitas → mostra 🏆
    } else {
        mensagem.style.display = "none";    // ainda falta alguma → esconde
    }
}


// ============================================
// EXECUÇÃO INICIAL - roda quando a página abre
// ============================================
checkEmptyList();
checkAllDone();

let taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        addTask();
    }
});