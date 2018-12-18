import React, {Fragment} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";

//Member and Admin Access...
import Login from "./views/Login";

//Pages Available in Hands
import Home from "./views/Home";

//Common 404 Pages If Not Matched...
import NoMatch from "./views/NoMatch";

export default class Routes extends React.Component{
    render(){
        return(
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route component={NoMatch} />
                </Switch>
            </Fragment>
        );
    }
}