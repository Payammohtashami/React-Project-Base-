import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import HomePage from "Pages/Home";
import LoginPage from "Pages/Login";
import Error404 from "Pages/Error404";

interface RouteTypes{
  path: string,
  component: React.FC
}

const RoutesApp: React.FC = () => {
  const publicRoutes:RouteTypes[] = [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/error/404",
      component: Error404,
    },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        {publicRoutes.map(({path, component: Component}, index) => {
          return (
            <Route
              key={index}
              path={path}
              element={<Component />}
            />
            );
          })}
          <Route path="/*" element={<Navigate to="/error/404" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RoutesApp;
