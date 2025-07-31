import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Error from "./Components/Error/Error.jsx";
import Home from "./Components/Home/Home.jsx";
import ListedBooks from "./Components/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./Components/PageToRead/PagesToRead.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "home",
        element:<Home></Home>
      },
      {
        path:"listedBooks",
        element:<ListedBooks></ListedBooks>
      },
      {
        path:"pToRead",
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
