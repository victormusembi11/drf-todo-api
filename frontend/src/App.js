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

  return (
    <div className="App">
      <Header title="Todo App" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks to show'}
    </div>
  );
}

export default App;
