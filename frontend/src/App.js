import { useState, useEffect } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([])

  useEffect(() => {
    const getTask = async() => {
      const tasksFromServer = await fetchTasks()
      setTask(tasksFromServer)
    }

    getTask()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://127.0.0.1:8000/todo/task-list/')
    const data = await res.json()
    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://127.0.0.1:8000/todo/task-create/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTask([...tasks, data])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://127.0.0.1:8000/todo/task-delete/${id}/`, {
       method: 'DELETE '
    });
    setTask(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTask(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  return (
    <div className="container">
      <Header title="Todo App" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask === true ? <AddTask onAdd={addTask} /> : ''}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks to show'
      )}
    </div>
  );
}

export default App;
