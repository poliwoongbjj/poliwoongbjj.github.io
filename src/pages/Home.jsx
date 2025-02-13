import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-white p-8">
        <h2 className="text-2xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mt-8">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3>Project 1</h3>
            <p>Description 1</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3>Project 2</h3>
            <p>Description 2</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3>Project 3</h3>
            <p>Description 3</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
