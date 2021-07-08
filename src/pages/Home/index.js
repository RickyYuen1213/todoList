import React, { useEffect, useContext } from 'react';
import { TaskContext } from 'hooks/task/TaskProvider'
import TaskItem from 'components/TaskItem'
import TaskInputBar from 'components/TaskInputBar'
import './index.scss'
const Home = () => {
  const { list, filter, loading } = useContext(TaskContext)

  //TODO: add error message popup in useEffect 
  return <div className="root">
    <TaskInputBar />
    {loading ? <div>loading</div> :
      <div>
        {list.filter(task => {
          let result = true
          Object.entries(filter).map(([key, val]) => {
            if (task[key] != val)
              result = false
          })
          return result
        }).map(task => <TaskItem key={task.id} task={task} />)}
      </div>}
  </div>
}

export default Home