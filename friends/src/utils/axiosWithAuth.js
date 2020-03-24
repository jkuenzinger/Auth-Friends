import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    if(token === 'undefined'){
        console.log('user not authenticated')
    } else {
        console.log('user is authenticated', {
            'Content-Type': 'application/json',
            'authorization': `${token}`
        })
    }
        return axios.create({
            headers:{
                'Content-Type': 'application/json',
                'authorization': `${token}`
            },
            baseURL: 'http://localhost:5000'
        })
}