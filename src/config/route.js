import React from "react";
import Index from "../pages/LandingPage";
import NotFoundPage from "../pages/NotFound";
import AuthencationPage from "../pages/Authencation";
import Login from "../pages/Authencation/pages/Login";
import Register from "../pages/Authencation/pages/Register";

const router = [
  {
    path: "/",
    exact: true,
    loader: null,
    element: <Index />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/auth",
    element: <AuthencationPage />,
    exact: true,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default router;
