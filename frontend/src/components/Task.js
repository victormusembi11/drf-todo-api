import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.title}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
          />
      </h3>
    </div>
  )
}

export default Task