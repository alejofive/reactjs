import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <div className="bg-white p-5 flex justify-between items-center fixed top-0 left-0 right-0">
      <h1 className="text-black font-bold text-3xl">Ejemplos</h1>
      <nav className="flex">
        <Link to="/">useState</Link>
        <Link to="/useEffect" className="ml-3">
          useEffect
        </Link>
        <Link to="/useContext" className="ml-3">
          useContext
        </Link>
        <Link to="/redux" className="ml-3">
          Redux
        </Link>
        <Link to="/query" className="ml-3">
          Query
        </Link>
      </nav>
    </div>
  );
};

export default nav;
