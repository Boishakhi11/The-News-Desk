import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, SetNameError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      SetNameError("Name should be more than 5 characters");
      return;
    } else {
      SetNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
            toast.success("Account created Succesfully");
          })
          .catch((error) => {
            toast.error(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
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
              //minLength="3"
              //maxLength="30"
              placeholder="Enter Name"
              required
            />

            {nameError && <p className="text-red-400">{nameError}</p>}

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
