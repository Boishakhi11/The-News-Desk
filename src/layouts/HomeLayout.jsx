import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      <section className="mt-5">
        <LatestNews></LatestNews>
      </section>
      <section className="mt-5 w-11/12 mx-auto">
        <Navbar></Navbar>
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
