import { useContext } from "react";
import { ContextTask } from "../contexts/TaskContext";
import { BsTrash, BsPencil } from "react-icons/bs";

export default function Body() {
  const { tasks, removeTask, modifierTask, isChecked } = useContext(ContextTask);

  return (
    <>
      {tasks.map((item) => (
        <div key={item.id} className="task-container m-3" style={{background: item.done ? "orange" : "#000", color: item.done ? "#999" : "#fff"}}>
          <div className="fw-bold name">
            <input type="checkbox" checked={item.done} onChange={() => isChecked(item.id)} /> {item.name}
            </div>
          <div className="fw-bold priority">Priorité : {item.option}</div>
          <div className="me-2">
            <BsPencil
              color="green"
              size={24}
              onClick={() => modifierTask(item.id)}
            />
          </div>
          <div className="icon">
            <BsTrash
              color="red"
              size={24}
              onClick={() => removeTask(item.id)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      ))}
    </>
  );
}
