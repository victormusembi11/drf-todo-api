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
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={title} onChange={(e) => {
                setTitle(e.target.value)
            }} />
        </div>
        <input type="submit" className="btn btn-block" value="Save Task"/>
    </form>
  )
}

export default AddTask