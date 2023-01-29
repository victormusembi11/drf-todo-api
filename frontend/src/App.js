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

  return (
    <div className="App">
      <Header title="Todo App" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
