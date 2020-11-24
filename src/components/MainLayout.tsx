import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
export const MainLayout = () =>{
    return (
        <>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
        </>

        )
}