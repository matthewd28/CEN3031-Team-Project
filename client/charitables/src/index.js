import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Switch,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home";
import Find from "./routes/Find";
import Volunteer from "./routes/Volunteer";
import Donate from "./routes/Donate";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Contributions from "./routes/Contributions";
import Navbar from "./components/Navbar";
import CreatePost from "./routes/CreatePost";

//Imports navigation bar to be seen on entry point of app
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

//Defines the names of the paths for each web page
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "find",
        element: <Find />,
      },
      {
        path: "volunteer",
        element: <Volunteer />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "contributions",
        element: <Contributions />,
      },
      {
        path: "createpost",
        element: <CreatePost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
