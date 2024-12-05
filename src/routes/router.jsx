import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01" replace />,
      },
      {
        path: "category/:id",
        element: <CategoryNews />,
        loader: async ({ params }) => {
          console.log(params.id);
          const data = await fetch(
            `https://openapi.programming-hero.com/api/news/category/0${params.id}`
          ).then((res) => res.json());
          return data;
        },
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News</h1>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path: '/auth/login',
            element: <h1>Login</h1>
        },
        {
            path: '/auth/register',
            element: <h1>Sign Up</h1>
        }
    ]
  },
  {
    path: "*",
    element: <h1>ERROR</h1>,
  },
]);

export default router;
