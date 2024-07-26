import React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";

const App: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Outlet />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
      ],
    },
  ];

  return useRoutes(routes);
};

export default App;
