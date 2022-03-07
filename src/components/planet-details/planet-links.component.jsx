import { NavLink } from "react-router-dom";

import data from "../../data";

const PlanetLinks = () => {
  const destinations = data.destinations;
  return (
    <div className="planet__links">
      {destinations.map((destination) => {
        return (
          <NavLink
            className={({ isActive }) =>
              isActive ? "planet-link active" : "planet-link"
            }
            to={`../${destination.name}`}
            key={destination.name}
          >
            {destination.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default PlanetLinks;
