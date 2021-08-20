import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes } from '../../routes';

export const AppRouter = () => {
    return(
        <Switch>
            {publicRoutes.map(route => {
                return(
                    <Route path={route.path} component={route.Component} />
                )
            })}
        </Switch>
    )
}