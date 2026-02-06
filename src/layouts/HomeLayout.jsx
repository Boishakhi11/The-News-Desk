import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import MainFeature from "../components/HomeLayout/MainFeature";
import { Outlet } from "react-router";

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
      <main className="grid gap-2 grid-cols-12 w-11/12 mx-auto mt-7">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet>
            <MainFeature></MainFeature>
          </Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
