import React, { useReducer, useCallback, useEffect } from 'react';
import reducer, { initialState } from './reducer'
import { fetchTasks } from 'apis/task'
import { addT, removeT, updateT, fetchStart, fetchSuccess, fetchFail, setTaskFilter } from './action';
import { Task } from 'models/task';
import { useIndexedDB } from 'react-indexed-db';
import { DBConfig } from 'db/indexeddb'
import { isStoreExisting } from 'index'
export const TaskContext = React.createContext();

const TaskContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { add, deleteRecord, update, getAll } = useIndexedDB(DBConfig.objectStoresMeta[0].store)

    useEffect(() => startLoadTasks(), [])
    const addTask = useCallback((task) => {
        dispatch(addT(task));
        add(task)
    })

    const removeTask = useCallback((taskId) => {
        dispatch(removeT(taskId))
        deleteRecord(taskId)
    })

    const updateTask = useCallback((task) => {
        dispatch(updateT(task))
        update(task)
    })

    const startLoadTasks = useCallback(() => {
        dispatch(fetchStart())
        isStoreExisting.then(exist => {
            const request = exist ? getAll() : fetchTasks(0, 10)
            request
                .then(tasks => {
                    dispatch(fetchSuccess(tasks.map(t => {
                        const task = new Task(t)
                        if (!exist) {
                            add(task)
                        }
                        return task
                    }).sort((a, b) => b.timestamp - a.timestamp)))
                })
                .catch((err) => {
                    console.error(err)
                    dispatch(fetchFail('Something went wrong.'))
                })
        })
    })

    const setFilter = useCallback((filter) => {
        dispatch(setTaskFilter(filter))
    })

    return (
        <TaskContext.Provider value={{
            ...state,
            addTask,
            removeTask,
            updateTask,
            startLoadTasks,
            setFilter
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}


export default TaskContextProvider