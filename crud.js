// crud.js
import {
  ref,
  set,
  push,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";
import { database } from "./firebaseConfig.js";

// Create
export function adicionarDado(caminho, dado) {
  const novaRef = push(ref(database, caminho));
  return set(novaRef, dado);
}

// Read
export async function lerDados(caminho) {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, caminho));
  return snapshot.exists() ? snapshot.val() : null;
}

// Update
export function atualizarDado(caminho, dado) {
  return update(ref(database, caminho), dado);
}

// Delete
export function deletarDado(caminho) {
  return remove(ref(database, caminho));
}
