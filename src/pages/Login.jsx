import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log({ email, password });
    signIn(email, password)
      .then((userCredential) => {
        const result = userCredential.user;
        navigate(`${location.state ? location.state : "/"}`);
        toast.success(`Welcome ${result.displayName || result.email}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });

    form.reset();
  };
  return (
    <div className="w-11/12 mx-auto py-7 flex gap-5 flex-col items-center justify-center">
      <h1 className="font-semibold text-2xl text-center mt-20">
        Login To Your Account
      </h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignIn} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-400">{error}</p>}

            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
            <p className="text-primary text-center mt-5">
              Don't Have an Account?{" "}
              <Link to="/auth/register" className="text-secondary">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
