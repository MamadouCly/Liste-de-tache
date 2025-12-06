import { useContext } from "react";
import { ContextTask } from "../contexts/TaskContext";

export default function Header() {
  const { addTask, input, handleChange } = useContext(ContextTask);

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Entrez une tâche"
        name="input"
        value={input}
        onChange={handleChange}
      />
      <button className="btn btn-primary" type="button" onClick={() => addTask(input)}>
        Ajouter
      </button>
    </div>
  );
}
