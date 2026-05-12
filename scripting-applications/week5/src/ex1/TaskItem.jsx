export default function TaskItem({ task, onToggle, onEdit }) {
  return (
    <li>
      <span className={task.done ? "done" : ""}>{task.text}</span>
      <button onClick={() => onToggle(task.id)}>
        {task.done ? "Undo" : "Complete"}
      </button>
      <button
        onClick={() => {
          const updated = prompt("Edit task:", task.text);
          if (updated && updated.trim()) onEdit(task.id, updated.trim());
        }}
      >
        Edit
      </button>
    </li>
  );
}
