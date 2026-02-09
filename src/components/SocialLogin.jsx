import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold">Login With</h1>
      <div className="space-y-2 mt-3">
        <button className="btn border-blue-400 w-full">
          Login with Google
        </button>
        <button className="btn border-gray-600 w-full">
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
