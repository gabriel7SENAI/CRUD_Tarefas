import { adicionarDado, lerDados, atualizarDado, deletarDado } from "./crud.js";

const tarefaInput = document.getElementById("tarefaInput");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

// Adicionar tarefa
btnAdicionar.addEventListener("click", async () => {
  const texto = tarefaInput.value.trim();
  if (!texto) return alert("Digite uma tarefa");

  await adicionarDado("tarefas", { titulo: texto, feita: false });

  tarefaInput.value = "";
  mostrarTarefas();
});

// Mostrar tarefas (Read)
async function mostrarTarefas() {
  const tarefas = await lerDados("tarefas");
  listaTarefas.innerHTML = "";

  if (!tarefas) return;

  for (const key in tarefas) {
    const tarefa = tarefas[key];

    const li = document.createElement("li");
    li.className = tarefa.feita ? "feita" : "";
    li.textContent = tarefa.titulo + (tarefa.feita ? " ✅" : "");

    // Botão marcar como feita/pendente (Update)
    const btnAtualizar = document.createElement("button");
    btnAtualizar.textContent = tarefa.feita ? "Desmarcar" : "Marcar";
    btnAtualizar.onclick = () => {
      atualizarDado(`tarefas/${key}`, { feita: !tarefa.feita });
      mostrarTarefas();
    };

    // Botão deletar (Delete)
    const btnDeletar = document.createElement("button");
    btnDeletar.textContent = "Deletar";
    btnDeletar.onclick = () => {
      deletarDado(`tarefas/${key}`);
      mostrarTarefas();
    };

    li.appendChild(btnAtualizar);
    li.appendChild(btnDeletar);
    listaTarefas.appendChild(li);
  }
}

// Inicializa lista
mostrarTarefas();
