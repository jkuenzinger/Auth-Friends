import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
            render={props =>
            localStorage.getItem('token') ? (
                <Component {...props}/>
            ):(
                <Redirect to='/Login'/>
            )}
            />
);
export default PrivateRoute;