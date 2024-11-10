import TodoItem from "../TodoItem/TodoItem"; 
function TodoList({tasks, toggleComplete, editText, removeTask}) {
    console.log(tasks);

    return (
        <div>
            <ul>
                {tasks.map((task) => {                    
                    return <TodoItem key={task.id} task={task} toggleComplete={toggleComplete} editText={editText} removeTask={removeTask}/>;
                }
                )}
            </ul>
        </div>
    );
}

export default TodoList;