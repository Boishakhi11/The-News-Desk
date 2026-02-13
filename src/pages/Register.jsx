import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });

    form.reset();
  };

  return (
    <div className="w-11/12 mx-auto py-7 flex gap-5 flex-col items-center justify-center">
      <h1 className="font-semibold text-2xl text-center mt-20">
        Register Your Account
      </h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="text">Your Name</label>
            <input
              name="name"
              type="text"
              className="input validator required"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              placeholder="Enter Name"
              required
            />

            {/* Photo */}
            <label className="url">Photo URL</label>
            <input
              name="photo"
              type="url"
              className="input"
              placeholder="Enter image URL"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Enter Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Enter Password"
              required
            />

            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
            <p className="text-primary text-center mt-5">
              Already Have an Account?{" "}
              <Link to="/auth/login" className="text-secondary">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
