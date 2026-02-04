import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="bg-base-200 w-11/12 mx-auto flex justify-center items-center gap-2.5">
      <p className="bg-secondary text-white p-2 border">Latest</p>
      <p className="font-semibold">
        <Marquee speed={60} pauseOnHover>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain — as it happened !Match Highlights:
          Germany vs Spain — as it happened
        </Marquee>
      </p>
    </div>
  );
};

export default LatestNews;
