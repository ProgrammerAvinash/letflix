import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg"
          alt="bg"
        />
      </div>
      <form className="w-3/12 absolute my-40 p-10 mx-auto right-0 left-0 bg-black bg-opacity-80 text-white ">
        <h1 className="m-2">{isSigninForm ? "Sign In" : "Sign Up"}</h1>
        {!isSigninForm ? (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 text-xs bg-gray-400  bg-opacity-50 w-full"
          />
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="E-mail Address "
          className="p-2 m-2 text-xs bg-gray-400  bg-opacity-50 w-full"
        />
        <input
          type="password"
          placeholder="Password "
          className="p-2 m-2 text-xs  bg-gray-400 bg-opacity-50 w-full "
        />
        <button className="p-2 m-2  w-full text-white bg-red-700 text-sm">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-xs " onClick={toggleSignInForm}>
          {isSigninForm ? (
            <span>
              New to netflix ? <b className="cursor-pointer">Sign up</b>
            </span>
          ) : (
            <span>
              Already a user ? <b className="cursor-pointer">Sign In</b>
            </span>
          )}
        </p>
      </form>
    </div>
  );
}

export default Login;
