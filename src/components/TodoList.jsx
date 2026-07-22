import TodoItem from "./TodoItem";

function TodoList({
  tasks,
  deleteTask,
  toggleTask,
  editTask,
}) {
  if (tasks.length === 0) {
    return <h3 className="empty">No Tasks Added</h3>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TodoList;