import { createContext, useState } from "react";

// On crée un contexte vide
export const ContextTask = createContext();

// On crée un fournisseur de contexte
export default function ContextProvider({children}) {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
    const [input, setInput] = useState("");

    // Fonction pour ajouter une tâche
    const addTask = (task) => {
        if(!task.trim()) {
            alert("Veuillez d'abord écrire votre tâche !");
            return;
        }

        const date = Date.now();
        const newTask = [...tasks, {id: date, name: task}]
        
        setTasks(newTask);
        localStorage.setItem("tasks", JSON.stringify(newTask));
        setInput("");
    };

    // Fonction pour changer l'etat
    const handleChange = (event) => {
        const {name, value} = event.target;
        setInput(value);
    }
    
    // Fonction pour supprimer une tâche
    const removeTask = (id) => {
        setTasks((prev) => {
            const newTask = prev.filter((item) => item.id !== id);
            localStorage.setItem("tasks", JSON.stringify(newTask));

            return newTask
        });
    }

    return (
        <ContextTask.Provider value={{tasks, addTask, handleChange, input, removeTask}}>
            {children}
        </ContextTask.Provider>
    ); 
}