import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import MainContent from "../components/categoryNews/MainContent";
import AuthLayout from "../layout/AuthLayout";
import Login from "../components/authform/Login";
import Register from "../components/authform/Register";
import News from "../layout/News";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    loader: () =>
      fetch("https://openapi.programming-hero.com/api/news/category/01"),
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
    path: "/news/:id",
    element: (
      <PrivateRouter>
        <News />
      </PrivateRouter>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },
  {
    path: "*",
    element: <h1>404 Error</h1>,
  },
]);

export default router;
