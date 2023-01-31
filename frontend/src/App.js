import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTask] = useState(
    [
        {
            id: 1,
            title: 'Meal prep',
            completed: false
        },
        {
            id: 2,
            title: 'Sleep',
            completed: false
        }
    ]
  )

  // Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTask(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  return (
    <div className="container">
      <Header title="Todo App" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
}

export default App;
