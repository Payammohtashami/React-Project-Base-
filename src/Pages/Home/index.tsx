import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/login">login page</Link>
    </div>
  );
};

export default HomePage;
