import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";

const app = document.getElementById('app');
ReactDOM.render(
    <Router>
        <Route exact path="/" component={Layout}></Route>
        <Route path="/ok" component={Home}></Route>
    </Router>,
    app);
