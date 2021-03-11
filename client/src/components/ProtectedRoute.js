import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import * as security from '../security'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route exact
            {...rest}
            render={props =>
                security.CheckAuthentication() ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

export default ProtectedRoute
