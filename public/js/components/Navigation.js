import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Navigation extends React.Component{
    constructor(){
        super();
        this.state = {
            collapsed: true,
        };
    }
    toggleCollapse(){
        const collapsed =!this.state.collapsed;
        this.setState({collapsed});
    }
    render(){
        const { location } = this.props;
        const {collapsed } = this.state;
        const homeClass = location.pathname === '/' ? "active" : "";
        /*const usersClass = location.pathname.match(/^\/users/) ? "active" : "";
        const articlesClass = location.pathname.match(/^\/articles/) ? "active" : "";*/
        const navClass = collapsed ? "collapse" : "";
        return(
            <div class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <a href="#/" class="navbar-brand">My React App</a>
                        <button class="navbar-toggle" type="button" onClick={this.toggleCollapse.bind(this)}>
                            <span class="sr-only">Toggle Navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class={"navbar-collapse " + navClass} id="navbar-main">
                        <ul class="nav navbar-nav">
                            <li class={homeClass}>
                                <Link to="/" onClick={this.toggleCollapse.bind(this)}>Home</Link>
                            </li>
                            {/*<li class={usersClass}>
                                <Link to="users" onClick={this.toggleCollapse.bind(this)}>Users</Link>
                            </li>
                            <li class={articlesClass}>
                                <Link to="articles" onClick={this.toggleCollapse.bind(this)}>Articles</Link>
                            </li>*/}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}