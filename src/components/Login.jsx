import Header from "./Header";
import { BACKGROUND_IMAGE } from "../utils/constant";
import { Link } from "react-router";
import { useState } from "react";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="background" />
      </div>
      <form className="bg-black absolute p-12 text-white w-3/12 mx-auto my-24 right-0 left-0 opacity-85">
        <h1 className="my-2 text-3xl font-bold">{isLoginForm ? "Sign In" : "Sign Up"}</h1>
        {!isLoginForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-lg border border-gray-500 bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-lg border border-gray-500 bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-lg border border-gray-500 bg-gray-700"
        />
        <button className="p-3 my-2 w-full rounded-lg border border-gray-500 bg-red-600 cursor-pointer">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-center">OR</p>
        {isLoginForm ? (
          <div className="text-center">
            <Link to="" className="flex justify-center underline mb-3">
              Forgot password?
            </Link>
            <p
              className="mt-3"
              onClick={() => setIsLoginForm((value) => !value)}
            >
              New to Netflix GPT?<p className="cursor-pointer mt-2">Sign Up Now</p>
            </p>
          </div>
        ) : (
          <div className="text-center">
            <span
              className="mt-3"
              onClick={() => setIsLoginForm((value) => !value)}
            >
              Already have an Account?
             <br />
            <p className="cursor-pointer mt-2">Sign In</p></span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
