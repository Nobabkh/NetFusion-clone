import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import AiCallCenter from "./Components/Pages/AiCallCenter.jsx";
import Home from "./Components/Home/Home.jsx";
// import Home from "./Components/Home/Home.jsx";
// import DescriptionCard from "./Components/CustomPrompts/DescriptionCard.jsx";
// import DescriptionCards from "./Components/CustomPrompts/DescriptionCards.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aiCallCenter",
        element: <AiCallCenter></AiCallCenter>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
