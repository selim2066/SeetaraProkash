import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import {getStoredReadList} from '../../localDB'
import {getStoredWishlist} from '../../localDB'
import Book from "../Books/Book";






const ListedBooks = () => {

    const allBooks = useLoaderData();
  const [readList, setReadList]=useState([])
  const [wishList, setWishlist]=useState([])


  //for readlish
  useEffect(() => {
    const storedReadlist = getStoredReadList();
    const storedReadlistInt = storedReadlist.map((id) => parseInt(id));

    const readBookList = allBooks.filter(book=>storedReadlistInt.includes(book.bookId))
    setReadList(readBookList)
  }, []);


// for wish list
useEffect(()=>{
    const storedWishlist=getStoredWishlist()
    const storedWishlistInt=storedWishlist.map((id)=>parseInt(id))

    const wishList = allBooks.filter(book=>storedWishlistInt.includes(book.bookId))
    setWishlist(wishList)

  },[])

  return (
    <div>
      <h2 className="my-10">this is Listed Books</h2>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-3xl">Books I Readed : {readList.length}</h2>
          {
            readList.map(book => <Book book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2 className="text-4xl">My wishlist of Books: {wishList.length}</h2>
          {
            wishList.map(book=> <Book book={book}></Book>)
          }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
//import {getStoredReadList} from './../../localDB'
//{wishList.length}

/**
 *   useEffect(()=>{
    const storedWishlist=getStoredWishlist()
    const storedWishlistInt=storedWishlist.map((id)=>parseInt(id))

    const wishList = allBooks.filter(book=>storedWishlistInt.includes(book.bookId))
    setWishlist(wishList)

  },[])
 */