import styles from "./TodoFilter.module.css"

function TodoFilter({setFilter}) {
    return (
        <div className={styles.filters}>
            <button onClick={() => setFilter("all")}>Todas</button>
            <button onClick={() => setFilter("completed")}>Completas</button>
            <button onClick={() => setFilter("incomplete")}>Incompletas</button>
        </div>
    );
}

export default TodoFilter;