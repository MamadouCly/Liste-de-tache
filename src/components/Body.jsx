import { useContext } from "react";
import { ContextTask } from "../contexts/TaskContext";
import { BsTrash, BsPencil } from "react-icons/bs";

export default function Body() {
  const { tasks, removeTask, modifierTask, isChecked, filtrer, handleChangeFilter } = useContext(ContextTask);
  
  let taskFiltered = tasks;

  if(filtrer === "Faites") {
    taskFiltered = taskFiltered.filter((item) => item.done === true);
  } else if(filtrer === "Non faites") {
    taskFiltered = taskFiltered.filter((item) => item.done === false);
  }
  
  return (
    <>
      <select className="mt-5" onChange={handleChangeFilter}>
        <option value={"Toute"}>Toute</option>
        <option value={"Faites"}>Faites</option>
        <option value={"Non faites"}>Non faites</option>
      </select>

      {taskFiltered.map((item) => (
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
