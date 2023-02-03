import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Footer from "./Footer";
import { useState, useEffect } from "react"

const Home = () => {
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

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://127.0.0.1:8000/todo/task-detail/${id}/`)
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
       method: 'DELETE'
    });
    setTask(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed }

    const res = await fetch(`http://127.0.0.1:8000/todo/task-update/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    
    const data = await res.json()

    setTask(tasks.map((task) => task.id === id ? { ...task, completed: data.completed } : task))
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
        <Footer />
    </div>
  )
}

export default Home