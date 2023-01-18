import { useState, ChangeEvent } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)



  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input type="text" placeholder='Task' />
          <input type="number" placeholder='Deadline' />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todo-list"></div>
    </div>
  )
}

export default App
