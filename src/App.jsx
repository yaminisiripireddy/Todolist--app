import { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const editTask = (id) => {
    const updated = prompt(
      "Edit Task",
      tasks.find((task) => task.id === id)?.text
    );

    if (!updated || !updated.trim()) return;

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: updated }
          : task
      )
    );
  };

  return (
    <div className="container">
      <h1>React Todo App ✅</h1>

      <TodoInput
        task={task}
        setTask={setTask}
        addTask={addTask}
      />

      <div className="counter">
        Total: {tasks.length} | Completed:{" "}
        {tasks.filter((t) => t.completed).length}
      </div>

      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;