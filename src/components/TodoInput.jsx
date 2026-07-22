function TodoInput({ task, setTask, addTask }) {
  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTask();
        }}
      />

      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TodoInput;