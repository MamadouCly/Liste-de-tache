import { createContext, useState } from "react";

// On crée un contexte vide
export const ContextTask = createContext();

// On crée un fournisseur de contexte
export default function ContextProvider({children}) {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
    const [input, setInput] = useState("");
    const [etat, setEtat] = useState("Prioritaire");

    // Fonction pour ajouter une tâche
    const addTask = (task) => {
        if(!task.trim()) {
            alert("Veuillez d'abord écrire votre tâche !");
            return;
        }

        const date = Date.now();
        const newTask = [...tasks, {id: date, name: input, option: etat, done: false}];
        
        setTasks(newTask);
        localStorage.setItem("tasks", JSON.stringify(newTask));
        setInput("");
    };

    // Fonction pour changer l'etat
    const handleChange = (event) => {
        const {name, value} = event.target;
        setInput(value);
    };

    // Fonction pour changer l'etat de priorité
    const handleChangePriority = (event) => {
        const {name, value} = event.target;
        setEtat(value);
    };
    
    // Fonction pour supprimer une tâche
    const removeTask = (id) => {
        setTasks((prev) => {
            const newTask = prev.filter((item) => item.id !== id);
            localStorage.setItem("tasks", JSON.stringify(newTask));

            return newTask
        });
    };

    // Fonction pour modifier une tâche
    const modifierTask = (id) => {
        const newContent = prompt("Ecit votre nouvelle tâche !");
        const priority = prompt("Priorité ?");
        setTasks((prev) => {
            const update = prev.map((item) => (
                item.id === id ? {...item, name: newContent, option: priority} : item
            ));

            localStorage.setItem("tasks", JSON.stringify(update));
            return update;
        });
    };

    // Fonction pour marquer une tâche comme faite
    const isChecked = (id) => {
        setTasks((prev) => {
            const update = prev.map((item) => (
                item.id === id ? {...item, done: !item.done} : item
            ));
            localStorage.setItem("tasks", JSON.stringify(update));
            return update;
        });
    }

    return (
        <ContextTask.Provider value={{tasks, addTask, handleChange, input, removeTask, handleChangePriority, modifierTask, isChecked}}>
            {children}
        </ContextTask.Provider>
    ); 
}