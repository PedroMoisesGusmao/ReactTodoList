import styles from "./TodoApp.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoList from "../TodoList/TodoList";
import { useState } from "react";

function TodoApp() {
    const [tasks, setTask] = useState([]);

    const [filter, setFilter] = useState("all");

    const filteredTasks = tasks.filter(task => {
            if (filter === "completed") return task.concluida
            else if (filter === "incomplete") return !task.concluida
            return true
        });

    const handlerAddTask = (text) => {
        setTask([...tasks, {
            id: Date.now(),
            text,
            concluida: false
        }])
    }

    const toggleComplete = (taskId) => {
        setTask(
            tasks.map((task) => task.id === taskId ? {...task, concluida: !task.concluida} : task));
    }

    const editText = (taskId, newText) => {
        setTask(
            tasks.map((task) => task.id === taskId ? {...task, text: newText} : task));
    }

    const removeTask = (taskId) => {
        setTask(
            tasks.filter((task) => task.id !== taskId)
        )
    }
    return (
        <div>
            <h1 id={styles.titulo}>Lista de Tarefas</h1>
            <TodoForm handlerAddTask={handlerAddTask}/>
            <TodoFilter setFilter={setFilter}/>
            <TodoList tasks={filteredTasks} toggleComplete={toggleComplete} editText={editText} removeTask={removeTask}/>
        </div>
    )
}

export default TodoApp;