import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="w-11/12 mx-auto py-7 flex gap-5 flex-col items-center justify-center">
      <h1 className="font-semibold text-2xl text-center mt-20">
        Login To Your Account
      </h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary mt-4">Login</button>
            <p className="text-primary text-center mt-5">
              Don't Have an Account?{" "}
              <Link to="/auth/register" className="text-secondary">
                Register
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
