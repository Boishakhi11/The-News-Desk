import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold mb-9">Find Us On</h1>
      <div className="join bg-base-200 join-vertical space-y-5 items-start">
        <button className="btn join-item">
          {" "}
          <FaFacebook> </FaFacebook>Facebook
        </button>
        <button className="btn join-item">
          {" "}
          <FaInstagram> </FaInstagram>Instragram
        </button>
        <button className="btn join-item">
          {" "}
          <FaTwitter></FaTwitter>Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
