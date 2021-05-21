import { Redirect, Route } from 'react-router-dom'
import React from 'react'
import AuthService from '../services/AuthService'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = AuthService.isAuthenticated();
    const isRenderProp = rest.hasOwnProperty('render');
    return (<Route {...rest} render={props => (
        isAuthenticated ? (

            isRenderProp ? rest.render(props) : <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
        )
    )}/>)
}

export default PrivateRoute;
