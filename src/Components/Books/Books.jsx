import { useEffect, useState } from "react";

const Books = () => {
const [books, setBooks]=useState([])
useEffect(()=>{
    fetch('../../../public/booksData.json')
    .then(res =>res.json())
    .then(data=>setBooks(data))
},[])
    return (
        <div>
            <h1 className="text-5xl text-center">Books</h1>
            <p>length: {books.length}</p>
        </div>
    );
};

export default Books;