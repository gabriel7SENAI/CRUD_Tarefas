import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLrhYWElrZsQC6ZC848IFnCrdkeEsBeX4",
  authDomain: "crud-notas-27a3f.firebaseapp.com",
  projectId: "crud-notas-27a3f",
  storageBucket: "crud-notas-27a3f.firebasestorage.app",
  messagingSenderId: "664747147337",
  appId: "1:664747147337:web:1e98608cf6666130087f98",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
