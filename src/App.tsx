import { useState, ChangeEvent } from 'react'
import './App.css'
import TodoTasks from './components/TodoTasks'
import { ITask } from './interfaces'

function App() {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  function addTask(): void {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todoList, newTask])
    setTask('')
    setDeadline(0)
  }

  function deleteTask(taskToDelete: string): void {
    setTodoList(todoList.filter(task => {
      return task.taskName !== taskToDelete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input type="text" placeholder='Enter Task' value={task} name='task' onChange={handleChange} />
          <input type="number" placeholder='Deadline' value={deadline} name='deadline' onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todo-list">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTasks key={key} task={task} deleteTask={deleteTask} />
        })}
      </div>
    </div>
  )
}

export default App
