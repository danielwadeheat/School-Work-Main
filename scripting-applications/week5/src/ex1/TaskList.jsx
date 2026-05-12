import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onEdit }) {
  if (tasks.length === 0) return <p>No tasks in this filter.</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onEdit={onEdit} />
      ))}
    </ul>
  );
}
