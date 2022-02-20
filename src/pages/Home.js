import React from "react";
import Menu from "../Navbar/Menu";

const Home = () => {
  return (
    <div className="home">
      <Menu />
      <div className="homeContent">
        <div className="content">
          <h1>RAKOTOARISOA Jean Nkono</h1>
          <h2>Développeur React et Node.js</h2>
          <div className="pdf">
            <a href="./media/cv.pdf" target="_blank" rel="noopener noreferrer">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
