import { useState } from "react";

function ToDoList() {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const addTask = () => {
    if (tarea.trim() === "") return; 

    const nuevaTarea = {
      texto: tarea,
    };

    setLista([...lista, nuevaTarea]);
    setTarea("");
  };

  return (
    <div className="main">
      <h1>ToDoList</h1>
      <div>
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Escribe una tarea"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {lista.map((t) => (
          <li>{t.texto}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
