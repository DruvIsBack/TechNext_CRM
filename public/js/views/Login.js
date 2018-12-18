import React from 'react';
import "./assets/login/floating-labels.css";

export default ()=>
<div className="container">
    <form className="form-signin">
        <div className="text-center mb-4">
            <img
                className="mb-4"
                src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                alt
                width={72}
                height={72}
            />
            <h1 className="h3 mb-3 font-weight-normal">Welcome to ERP Solution</h1>
        </div>
        <div className="form-label-group">
            <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
            />
        </div>
        <div className="form-label-group">
            <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                required
            />
        </div>
        <div className="checkbox mb-3">
            <label>
                <input type="checkbox" defaultValue="remember-me"/> Remember me
            </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
        </button>
        <p className="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
    </form>
</div>
