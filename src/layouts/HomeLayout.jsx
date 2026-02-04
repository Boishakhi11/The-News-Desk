import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      <section>
        <LatestNews></LatestNews>
      </section>
      <main>
        <section className="left_nav"></section>
        <section className="main">
          <layout></layout>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
