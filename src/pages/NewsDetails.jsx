import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/HomeLayout/RightAside";
import Footer from "../components/Footer";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);

    setNews(newsDetails);
  }, [id, data]);
  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-9 gap-3 mt-5">
        <section className="col-span-6">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default NewsDetails;
