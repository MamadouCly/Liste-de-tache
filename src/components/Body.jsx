import { useContext } from "react";
import { ContextTask } from "../contexts/TaskContext";
import { BsTrash } from "react-icons/bs";

export default function Body() {
    const {tasks, removeTask} = useContext(ContextTask);
    return (
        <>
            {tasks.map((item) => (
                <div key={item.id} className="task-container m-3">
                    <div className="fw-bold name">{item.name}</div>
                    <div className="fw-bold priority">Priorité : {item.option}</div>
                    <div className="icon"><BsTrash color="red"size={24} onClick={() => removeTask(item.id)} style={{cursor: "pointer"}} /></div>
                </div>
            ))}
        </>
    )
}