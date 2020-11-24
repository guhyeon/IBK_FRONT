import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Page404} from 'src/components/common/Page404'
import { MainLayout } from '../MainLayout';
export const Router = () =>{
    return (
    <Switch>
        <Route exact path ="/404" component = {Page404}/>
        <Route path ="/">
            <MainLayout/>
        </Route>
    </Switch>
    )
}