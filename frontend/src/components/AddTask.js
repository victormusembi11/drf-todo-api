import { useState } from "react" 

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      alert('Please add a Task!')
      return
    }

    onAdd({ title })

    setTitle('')
  }


  return (
    <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label className="form-label">Task</label>
            <input type="text" className="form-control" placeholder="Add Task" value={title} onChange={(e) => {
                setTitle(e.target.value)
            }} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddTask