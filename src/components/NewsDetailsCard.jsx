import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div>
      <h1 className="font-semibold mb-3 text-xl">Dragon News</h1>
      <div className="w-11/12 mx-auto space-y-4">
        <img
          className="w-full h-[350px] bg-cover"
          src={news.image_url}
          alt="Image of the news"
        />
        <h2 className="font-semibold">{news.title}</h2>
        <p className="text-primary">{news.details}</p>
        <Link
          to={`/category/${news.category_id}`}
          className="cursor-pointer p-2 rounded-md btn btn-secondary text-white"
        >
          All News in This Category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
