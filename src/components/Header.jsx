import { useContext } from "react";
import { ContextTask } from "../contexts/TaskContext";

export default function Header() {
  const { addTask, input, etat, handleChange, handleChangePriority } = useContext(ContextTask);

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Entrez une tâche"
        name="input"
        value={input}
        onChange={handleChange}
      />
      <select onChange={handleChangePriority}>
        <option value={etat}>Prioritaire</option>
        <option value={etat}>Moyenne</option>
        <option value={etat}>Basse</option>
      </select>
      <button className="btn btn-primary ms-2" type="button" onClick={() => addTask(input)}>
        Ajouter
      </button>
    </div>
  );
}
