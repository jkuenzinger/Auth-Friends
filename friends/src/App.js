import React from 'react';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import CreateFriend from './components/CreateFriend';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
  <Router>  
    <div>
        <Link to='/login'>Login</Link>
        <Link to='/newfriend'>Create New Friend</Link>

        <Route path='/login' component={Login}/>
        <PrivateRoute exact path='/' component={Friends}/>
        <PrivateRoute path='/newfriend' component={CreateFriend}/>
    </div>
  </Router>
  );
}

export default App;
