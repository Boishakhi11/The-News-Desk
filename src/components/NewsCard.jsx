import React from "react";
import { Link } from "react-router";
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { id, title, rating, total_view, author, image_url, details, others } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200">
      <div className="card-body">
        {/* Author and Date */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full border"
            />
            <div>
              <p className="text-sm font-semibold">{author.name}</p>
              <p className="text-xs text-accent">{formattedDate}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <FaRegBookmark className="text-xl cursor-pointer text-accent" />
            <FaShareAlt className="text-xl cursor-pointer text-accent" />
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg">{title}</h2>

        {/* Card Image */}
        <figure>
          <img
            src={image_url}
            alt={title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </figure>

        {/* Details */}
        <p className="text-[15px] text-accent">
          {details.length > 150 ? details.slice(0, 150) + "..." : details}
        </p>

        {/* Read More */}
        <Link
          to={`/news/${id}`}
          className="text-blue-600 text-sm font-semibold mt-2 inline-block"
        >
          Read More
        </Link>

        {/* Rating and Views */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={
                  i < rating.number ? "text-yellow-500" : "text-gray-300"
                }
              />
            ))}
            <span className="text-gray-600 ml-1">
              {rating.number.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye /> {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
