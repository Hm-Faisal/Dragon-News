import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import MainContent from "../components/categoryNews/MainContent";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"} />,
      },
      {
        path: "/category/:id",
        element: <MainContent />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <h1>login com</h1> },
      { path: "/auth/register", element: <h1>Register Here</h1> },
    ],
  },
  {
    path: "*",
    element: <h1>404 Error</h1>,
  },
]);

export default router;
