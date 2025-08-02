import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 px-20 py-30">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/img/sitara prokash.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          
          <button className="btn my-10 bg-green-600">View the List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
