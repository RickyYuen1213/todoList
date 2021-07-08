import Tag from 'components/Tag';
import { TaskContext } from 'hooks/task/TaskProvider';
import { Task } from 'models/task';
import React, { useCallback, useContext, useState } from 'react';
import './index.scss';

const TAGS = [{
    label: "All",
    id: "{}"
},
{
    label: "Completed",
    id: '{"completed":true}'
},
{
    label: "Active",
    id: '{"completed":false}'
}]

const TaskInputBar = () => {
    const { addTask, setFilter, filter } = useContext(TaskContext)
    const [task, setTask] = useState(new Task())
    const handleKeyPress = useCallback(({ key }) => {
        if (key == 'Enter') {
            addTask({ ...task, timestamp: Date.now()})
            setTask(new Task())
        }
    }, [task])

    const handleChange = useCallback(({ target: { value } }) => {
        setTask(t => t.update({ title: value }))
    }, [])

    const handleClickTag = useCallback(({ target: { id } }) => {
        try {
            setFilter(JSON.parse(id))
        } catch {
            setFilter(null)
        }
    }, [])
    return <div className="bar__container">
        <input
            key={task.id}
            className="bar__input"
            autoFocus
            placeholder={"What needs to be done?"}
            defaultValue={task.title}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
        />
        <div className="bar__filters">
            {TAGS.map(tag => <Tag
                id={tag.id}
                key={tag.id}
                active={JSON.stringify(filter) === tag.id}
                onClick={handleClickTag}>
                {tag.label}
            </Tag>)}
        </div>
    </div>
}

export default TaskInputBar