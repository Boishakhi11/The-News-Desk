import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-11/12 mx-auto py-5">
        <Navbar></Navbar>
      </header>
      <main className="grow flex items-center justify-center">
        <p className="text-center text-2xl text-gray-600 font-semibold animate-bounce">
          About Page is Coming Soon....
        </p>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default About;
