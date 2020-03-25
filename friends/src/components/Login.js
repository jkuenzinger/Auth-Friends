import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js'

const Login = (props) => {
    const [credentials, setCredentials] = useState({});
        const login = e => {
            e.preventDefault();
            axiosWithAuth()
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
                console.log('sucessful login', res.data.payload)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/')
            })
        }

const handleChanges = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
}

return(
    <div>
        <form onSubmit={login}>
            <input type='text' name='username' value={credentials.username} onChange={handleChanges}/>
            <input type='password' name='password' value={credentials.password} onChange={handleChanges}/>
            <button>Login</button>
        </form>
    </div>
    )
}
export default Login;