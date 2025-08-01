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
    <div className="card bg-white text-black w-96 shadow-lg rounded-2xl p-6 ">
      <figure className="bg-amber-400 py-8 rounded-2xl">
        <img className="h-[266px] py-2" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex gap-5">
          {tags.map((tag) => (
            <button className="btn btn-soft btn-success bg-[#23BE0A]/15 border-none btn-sm rounded-4xl">
              {tag}
            </button>
          ))}
        </div>

        <h2 className="card-title text-2xl ">{bookName}</h2>
        <p className="text-sm font-bold text-black/50">By : {author}</p>
        <hr />

        <div className="card-actions justify-between">
          <div className="badge py-4 badge-outline border-none  font-semibold text-black/50">{category}</div>
          <div className="badge py-4 badge-outline border-none">
            {rating}
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500 opacity-100 w-5 h-5"
                aria-label="1 star"
                defaultChecked
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
