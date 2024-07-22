import React from "react";
import { useRoutes, Outlet } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  const routes = [
    {
      path: "",
      element: <Outlet />,
      children: [{ path: "", element: <Dashboard /> }],
    },
  ];

  return useRoutes(routes);
};

export default App;
