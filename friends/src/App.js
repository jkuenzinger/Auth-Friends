import React from 'react';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import CreateFriend from './components/CreateFriend'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <div>
        <Link to='/login'>Login</Link>
        <Link to='/newfriend'>Create New Friend</Link>

        <Route patch='/login' component={login}/>
        <PrivateRoute exact path='/'/>
        <PrivateRoute patch='/newfriend'/>
    </div>
  );
}

export default App;
