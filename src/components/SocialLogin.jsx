import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold">Login With</h1>
      <div className="space-y-2 mt-3">
        <button className="btn button-outline btn-primary w-full h-auto py-3 flex items-center justify-center gap-2">
          <FcGoogle className="text-2xl shrink-0" />
          <span className="text-sm sm:text-base">Login with Google</span>
        </button>
        <button className="btn button-outline btn-secondary w-full h-auto py-3 flex items-center justify-center gap-2">
          <FaGithub className="text-2xl shrink-0" />
          <span className="text-sm sm:text-base">Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
