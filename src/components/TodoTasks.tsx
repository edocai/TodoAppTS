import { ITask } from "../interfaces"
import '../App.css'

interface TodoTasksProps {
    task: ITask
}

function TodoTasks({ task }: TodoTasksProps) {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button>Delete</button>
        </div>
    )
}

export default TodoTasks
