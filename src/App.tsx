import { useState, ChangeEvent } from 'react'
import './App.css'
import { ITask } from './interfaces'

function App() {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    if(event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  function addTask(): void {
    const newTask = { taskName: task, deadline: deadline}
    setTodoList([...todoList, newTask])
  }

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input type="text" placeholder='Task' name='task' onChange={handleChange} />
          <input type="number" placeholder='Deadline' name='deadline' onChange={handleChange} />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todo-list"></div>
    </div>
  )
}

export default App
