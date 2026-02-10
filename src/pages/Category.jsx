import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const Category = () => {
  const { id } = useParams(); //string
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const breakingNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setCategoryNews(breakingNews);
    } else {
      const filterData = data.filter((news) => news.category_id == id);
      setCategoryNews(filterData);
    }
  }, [id, data]);

  return (
    <div>
      <h1 className="font-semibold">
        Total <span className="text-secondary">{categoryNews.length}</span> data
        found
      </h1>
      <div className="grid grid-cols-1 gap-3 mt-4">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
