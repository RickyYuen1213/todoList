import actions from "./action";

const { ADD_TASK, REMOVE_TASK, UPDATE_TASK, FETCH_TASKS_START, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAIL, SET_TASK_FILTER } = actions

export const initialState = {
    list: [],
    filter: {},
    loading: false,
    error_message: '',
}

function reducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                list: [action.task, ...state.list]
            }
        case REMOVE_TASK:
            return {
                ...state,
                list: state.list.filter(task => task.id !== action.taskId)
            }
        case UPDATE_TASK:
            return {
                ...state,
                list: state.list.map(task => {
                    if (task.id === action.task.id) {
                        return action.task
                    }
                    return task
                })
            }
        case FETCH_TASKS_START:
            return {
                ...state,
                loading: true,
                error_message: '',
            }
        case FETCH_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                list: [...state.list, ...action.tasks],
                error_message: ''
            }
        case FETCH_TASKS_FAIL:
            return {
                ...state,
                loading: false,
                error_message: action.error_message
            }
        case SET_TASK_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state
    }
}

export default reducer