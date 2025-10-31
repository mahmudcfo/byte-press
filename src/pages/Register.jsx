import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-120px)]">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl py-5">
        <h2 className="text-center font-semibold text-2xl ">
          Register your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label text-base">Your Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter your name"
            />

            {/* Photo URL */}
            <label className="label text-base pt-3">Photo URL</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter your photo url"
            />

            {/* Email */}
            <label className="label text-base pt-3">Email address</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Enter your email address"
            />

            {/* Password */}
            <label className="label text-base pt-3">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Enter your password"
            />

            <button className="btn btn-primary mt-4">Register</button>
          </fieldset>

          <div className="mx-auto font-semibold pt-5">
            <p>
              Already Have An Account?
              <Link to="/auth/login" className="text-secondary">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
