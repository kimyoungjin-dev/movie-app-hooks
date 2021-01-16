import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to="/">home</Link>
      </ul>
      <ul>
        <Link to="/about">about</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
