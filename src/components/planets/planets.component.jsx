import { Routes, Route } from "react-router-dom";

import PlanetDetails from "../planet-details/planet-details.component";

import "./planets.style.scss";

const Planet = () => {
  return (
    <div className="planet">
      <Routes>
        <Route path=":name" element={<PlanetDetails />} />
      </Routes>
    </div>
  );
};

export default Planet;
