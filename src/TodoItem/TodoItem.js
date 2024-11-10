import styles from "./TodoItem.module.css";
import { useState } from "react";

function TodoItem({task, toggleComplete, editText, removeTask}) {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(task.text);

    const handleInputKeyUp = (event) => {
        if (event.key === 'Enter') {
          setEditing(false);
          editText(task.id, text);
        }
      };

    const handleEditClick = () => setEditing(true);

    const handleInputChange = (event) => setText(event.target.value);
    
    return (
        <li className={styles.item}>
            {!editing ? 
                <span className={styles.pointer} onClick={() => toggleComplete(task.id)}>
                    {task.concluida ? <s>{text}</s> : text}
                </span>
                : 
                <input
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    onKeyUp={handleInputKeyUp}
                    onBlur={() => setEditing(false)}
                    autoFocus
                />
            }
            <button className={styles.button} onClick={handleEditClick}>Editar</button>
            <button className={styles.button} onClick={() => removeTask(task.id)}>Remover</button>
        </li>
    )
}

export default TodoItem;