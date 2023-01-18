import { ITask } from "../interfaces"
import '../App.css'

interface TodoTasksProps {
    task: ITask
    deleteTask(taskToDelete: string): void
}

function TodoTasks({ task, deleteTask }: TodoTasksProps) {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => deleteTask(task.taskName)}>Delete</button>
        </div>
    )
}

export default TodoTasks
