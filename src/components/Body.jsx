import { useContext } from "react";
import { ContextTask } from "../contexts/TaskContext";
import { BsTrash } from "react-icons/bs";

export default function Body() {
    const {tasks, removeTask} = useContext(ContextTask);
    return (
        <>
            {tasks.map((item) => (
                <div key={item.id} className="task-container m-3">
                    <div>{item.name}</div>
                    <div><BsTrash color="red"size={24} onClick={() => removeTask(item.id)} /></div>
                </div>
            ))}
        </>
    )
}