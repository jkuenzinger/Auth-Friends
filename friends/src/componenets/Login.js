import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js'

const login = (props) => {
    const [credentials, setCredentials] = useState({});
        const login = e => {
            e.preventDefault();
            axiosWithAuth().post('heep://localhost:5000/api/.login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/')
            })
        }

const handleChanges = e => {
    setCredentials({
        ...credentials,
        [event.target.name]: event.target.value
    })
}

return(
    <div>
        <form>
            <input type='text' name='username' value={credentials.username} onchange={handleChanges}/>
            <input type='password' name='password' value={credentials.username} onchange={handleChanges}/>
            <button>Login</button>
        </form>
    </div>
    )
}
export default login;