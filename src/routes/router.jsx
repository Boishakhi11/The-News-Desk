import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Category from "../pages/Category";

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
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);

export default router;
