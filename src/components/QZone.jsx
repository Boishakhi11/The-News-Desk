import React from "react";
import swimImage from "../assets/swimming.png";
import classImage from "../assets/class.png";
import playgroundImage from "../assets/playground.png";

const QZone = () => {
  return (
    <div>
      <h1 className="font-semibold mb-9"> Q-Zone</h1>
      <div>
        <img src={swimImage} alt="A girl is swiming" />
        <img src={classImage} alt="A classroom with students" />
        <img src={playgroundImage} alt="childrens playing in a playground" />
      </div>
    </div>
  );
};

export default QZone;
