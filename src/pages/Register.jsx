import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="w-11/12 mx-auto py-7 flex gap-5 flex-col items-center justify-center">
      <h1 className="font-semibold text-2xl text-center mt-20">
        Register Your Account
      </h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="text">Your Name</label>
            <input
              type="text"
              className="input validator required"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              placeholder="Enter Name"
            />

            {/* Photo */}
            <label className="url">Photo URL</label>
            <input type="url" className="input" placeholder="Enter image URL" />

            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Enter Email" />

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter Password"
            />

            <button className="btn btn-primary mt-4">Register</button>
            <p className="text-primary text-center mt-5">
              Already Have an Account?{" "}
              <Link to="/auth/login" className="text-secondary">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
