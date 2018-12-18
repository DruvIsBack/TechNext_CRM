import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Routes from './routes';

const app = document.getElementById('app');

ReactDOM.render(
    <Router>
        <Routes/>
    </Router>,
app);
