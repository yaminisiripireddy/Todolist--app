function TodoItem({ task, deleteTask, toggleTask, editTask }) {
  return (
    <div className="todo-item">
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "gray" : "black",
        }}
      >
        {task.text}
      </span>

      <div className="buttons">
        <button
          className="complete"
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? "Undo" : "Done"}
        </button>

        <button
          className="edit"
          onClick={() => editTask(task.id)}
        >
          Edit
        </button>

        <button
          className="delete"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;