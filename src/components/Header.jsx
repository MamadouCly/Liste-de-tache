import { useContext } from "react";
import { ContextTask } from "../contexts/TaskContext";

export default function Header() {
  const { addTask, input, etat, handleChange, handleChangePriority } = useContext(ContextTask);

  return (
    <>
      <div className="mt-4 header">
      <input
        type="text"
        placeholder="Entrez une tâche"
        name="input"
        value={input}
        onChange={handleChange}
      />
      <select onChange={handleChangePriority}>
        <option value={"Prioritaire"}>Prioritaire</option>
        <option value={"Moyenne"}>Moyenne</option>
        <option value={"Basse"}>Basse</option>
      </select>
      <button className="btn ms-2" type="button" onClick={() => addTask(input)}>
        Ajouter
      </button>
    </div>
    <hr />
    </>
  );
}
