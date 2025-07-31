import React from "react";

const Book = ({ book }) => {
  const {
    bookName,
    author,
    image,
    category,
    tags,
    publisher,
    rating,
    yearOfPublishing,
  } = book;

  return (
    <div className="card bg-white text-black w-96 shadow-lg rounded-2xl p-6">
      <figure className="bg-amber-400 py-8 rounded-2xl">
        <img className="h-[266px] py-2" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By : {author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
