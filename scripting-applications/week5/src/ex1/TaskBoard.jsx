import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Build components", done: false },
    { id: 2, text: "Lift state to App", done: true }
  ]);
  const [filter, setFilter] = useState("all");

  function addTask(text) {
    setTasks((prev) => [...prev, { id: Date.now(), text, done: false }]);
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function editTask(id, newText) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  }

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  return (
    <section>
      <h2>Exercise 1: Task Board</h2>
      <TaskForm onAdd={addTask} />
      <label>
        Filter:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">all</option>
          <option value="active">active</option>
          <option value="done">done</option>
        </select>
      </label>
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onEdit={editTask} />
    </section>
  );
}
