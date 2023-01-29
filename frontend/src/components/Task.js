import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
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