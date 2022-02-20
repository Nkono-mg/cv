import React from "react";
import { NavLink } from "react-router-dom";

const NoutFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Page 404 not found</h3>
        <NavLink end to="/">
          Accueil
        </NavLink>
      </div>
    </div>
  );
};

export default NoutFound;
