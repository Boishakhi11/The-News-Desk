import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";
import MainFeature from "../components/HomeLayout/MainFeature";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
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
        <aside className="col-span-3 sticky h-fit top-0">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 sticky h-fit top-0">
          <RightAside></RightAside>
        </aside>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
