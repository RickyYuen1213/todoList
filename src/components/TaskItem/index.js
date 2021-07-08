import React, { useCallback, useContext} from 'react'
import { TaskContext } from 'hooks/task/TaskProvider';
import './index.scss'
import { ReactComponent as TickIcon } from 'assets/images/tick.svg'
import { ReactComponent as DeleteIcon } from 'assets/images/delete.svg'


const TaskItem = ({ task }) => {
    const { updateTask, removeTask } = useContext(TaskContext)

    const handleTextChange = useCallback(({ target: { value } }) => {
        updateTask(task.update({ title: value }))
    }, [task])

    const toggleComplete = useCallback(() => {
        updateTask(task.update({ completed: !task.completed }))
    }, [task])

    const handleRemove = useCallback(() => {
        removeTask(task.id)
    }, [task])

    return <div className="task__container">
        <TickIcon className="icon-btn" fill={task.completed ? 'green' : 'black'} onClick={toggleComplete} />
        <DeleteIcon className="icon-btn" onClick={handleRemove} />
        <div className="task__text-container">
            <input
                className="task__input"
                defaultValue={task.title}
                onChange={handleTextChange}
            />
        </div>
    </div>
}

export default TaskItem