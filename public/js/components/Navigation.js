import React, {Fragment, Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Navigation extends Component{
    render(){
        <Fragment>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </Fragment>
    }
}
