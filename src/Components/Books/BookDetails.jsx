import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  const {
    bookName,
    review,
    totalPages,
    author,
    image,
    category,
    tags,
    publisher,
    rating,
    yearOfPublishing,
  } = book;

  return (
    <div className="card card-side flex justify-between gap-5 shadow-sm my-20 py-20 bg-white text-black">
      <figure className="flex-1 ">
        <img className="h-[564px] p-5 w-full object-contain rounded-lg" src={image} alt={bookName} />
      </figure>

      <div className="card-body flex-1">
        <h2 className="text-4xl font-bold">{bookName}</h2>
        <p className="font-semibold text-gray-600">By : {author}</p>
        <hr />
        <h4 className="font-semibold text-gray-600">{category}</h4>
        <hr />
        <p>
          <span className="font-bold">Review: </span> {review}
        </p>
        <br />
        <div className="flex  items-center gap-2">
          <span className="font-bold">Tag</span>
          <div className="flex gap-5">
            {tags.map((tag) => (
              <button className="btn btn-soft btn-success bg-[#23BE0A]/15 border-none btn-sm rounded-4xl">
                #{tag}
              </button>
            ))}
          </div>
        </div>
        <hr />
        <div>
          <h4 className="flex gap-10">
            <span className="text-gray-500 font-bold">Number of Pages :</span>{" "}
            <span className="font-bold">{totalPages}</span>
          </h4>
          <h4 className="flex gap-10">
            <span className="text-gray-500 font-bold">Publisher :</span>{" "}
            <span className="font-bold">{publisher}</span>
          </h4>
          <h4 className="flex gap-10">
            <span className="text-gray-500 font-bold">Year of Publishing:</span>{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </h4>
          <h4 className="flex gap-10">
            <span className="text-gray-500 font-bold">Rating:</span>{" "}
            <span className="font-bold">{rating}</span>
          </h4>
        </div>
        {/* button */}
        <div className="card-actions justify-start mt-5">
          <button className="btn bg-white text-black">Read</button>
          <button className="btn btn-primary">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
// console.log(typeof bookId, typeof data, typeof id)
//card card-side  shadow-sm my-20 bg-white text-black
