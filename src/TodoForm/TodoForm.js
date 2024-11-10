import styles from "./TodoForm.module.css";

function TodoForm({handlerAddTask}) {
    return (
        <div className={styles.input_area}>
            <input
            type = "text"
            placeholder = "Nova tarefa"
            id = {styles.input}
            />
            <button
            className={styles.button}
            onClick={(e) => {
                const input = document.getElementById(styles.input).value.trim()
                if (input) {
                    handlerAddTask(input)
                } else {
                    window.alert("Ei, o input não pode ser vazio");
                }
            }}>Adicionar</button>
        </div>
    );
}

export default TodoForm;