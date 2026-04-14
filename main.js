import { adicionarDado, lerDados, atualizarDado, deletarDado } from "./crud.js";

const tarefaInput = document.getElementById("tarefaInput");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", async () => {
  const texto = tarefaInput.value;

  if (texto === "") {
    alert("Digite uma tarefa");
    return;
  }

  await adicionarDado("tarefas", {
    titulo: texto,
    feita: false,
  });

  tarefaInput.value = "";
  mostrarTarefas();
});

async function mostrarTarefas() {
  const tarefas = await lerDados("tarefas");

  listaTarefas.innerHTML = "";
  if (!tarefas) return;

  for (const id in tarefas) {
    const tarefa = tarefas[id];

    const li = document.createElement("li");

    // Texto
    if (tarefa.feita) {
      li.textContent = tarefa.titulo + " (feita)";
    } else {
      li.textContent = tarefa.titulo;
    }

    // Botão marcar / desmarcar
    const btnMarcar = document.createElement("button");

    if (tarefa.feita) {
      btnMarcar.textContent = "Desmarcar";
    } else {
      btnMarcar.textContent = "Marcar";
    }

    btnMarcar.addEventListener("click", async () => {
      await atualizarDado("tarefas/" + id, {
        feita: !tarefa.feita,
      });

      mostrarTarefas();
    });

    // Botão deletar
    const btnDeletar = document.createElement("button");
    btnDeletar.textContent = "Deletar";

    btnDeletar.addEventListener("click", async () => {
      await deletarDado("tarefas/" + id);
      mostrarTarefas();
    });

    li.appendChild(btnMarcar);
    li.appendChild(btnDeletar);
    listaTarefas.appendChild(li);
  }
}

mostrarTarefas();
