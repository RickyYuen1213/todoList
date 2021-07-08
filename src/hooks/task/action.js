const ACTIONS = {
    ADD_TASK: 'task/add' ,
    REMOVE_TASK: 'task/remove' ,
    UPDATE_TASK: 'task/update',
    FETCH_TASKS_START: 'task/fetch-all-start',
    FETCH_TASKS_SUCCESS: 'task/fetch-all-success',
    FETCH_TASKS_FAIL: 'task/fetch-all-fail',
    SET_TASK_FILTER: 'task/set-filter'
}

export default ACTIONS

export const addT = task => ({ type: ACTIONS.ADD_TASK, task })

export const removeT = taskId => ({ type: ACTIONS.REMOVE_TASK, taskId })

export const updateT = task =>({ type: ACTIONS.UPDATE_TASK, task })

export const fetchStart = () => ({ type: ACTIONS.FETCH_TASKS_START })

export const fetchSuccess = (tasks) => ({ type: ACTIONS.FETCH_TASKS_SUCCESS, tasks })

export const fetchFail = (error_message) => ({ type: ACTIONS.FETCH_TASKS_FAIL, error_message })

export const setTaskFilter = (filter) => ({ type: ACTIONS.SET_TASK_FILTER, filter })

