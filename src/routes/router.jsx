import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Category from "../pages/Category";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Carrer from "../pages/Carrer";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: Category,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/career",
    Component: Carrer,
  },
  {
    path: "/news-deatis/:id",
    Component: NewsDetails,
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);

export default router;
