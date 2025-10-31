import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-120px)]">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl py-5">
        <h2 className="text-center font-semibold text-2xl ">
          Login your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label text-base">Email address</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Enter your email address"
            />
            <label className="label text-base pt-3">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Enter your password"
            />

            <button className="btn btn-primary mt-4">Login</button>
          </fieldset>
          <div className="mx-auto font-semibold pt-5">
            <p>
              Don't Have An Account?
              <Link to="/auth/register" className="text-secondary">
                {" "}
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
