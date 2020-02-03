import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Welcome from './main/Welcome'
import Login from './main/Login'
import AccountDashboard from './main/AccountDashboard'


function RouteConfig() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/accountdashboard" component={AccountDashboard}/>
                <Route path="/" component={Welcome} />
            </Switch>
        </Router>
    );
}

export default RouteConfig;
