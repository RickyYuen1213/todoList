import axios from 'axios';

export const fetchTasks = async (skip, limit) => {
    const config = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos'
    }
    return axios(config)
        .then(res => {
            return res.data.slice(skip, skip + limit)
        })
}