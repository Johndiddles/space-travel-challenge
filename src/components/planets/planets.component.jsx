import { NavLink, Routes, Route } from "react-router-dom";

import PlanetDetails from "../planet-details/planet-details.component";

import data from "../../data";
import "./planets.style.scss";

const Planet = () => {
  const destinations = data.destinations;

  return (
    <div className="planet">
      <div className="planet__links">
        {destinations.map((destination) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? "planet-link active" : "planet-link"
              }
              to={`${destination.name}`}
              key={destination.name}
            >
              {destination.name}
            </NavLink>
          );
        })}
      </div>

      <Routes>
        <Route path=":name" element={<PlanetDetails />} />
      </Routes>
    </div>
  );
};

export default Planet;
