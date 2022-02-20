import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/jo.png" alt="profil-pic" />
          <h2>
            <strong>Nkono</strong>
          </h2>
          <h4>Développeur React/Node.js</h4>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink end to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink end to="/cv/nkono/knowledge" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv/nkono/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Développeur React et Node.js</p>
        </div>
      </div>
    </div>
  );
};
export default Menu;
