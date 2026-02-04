import React from "react";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
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
