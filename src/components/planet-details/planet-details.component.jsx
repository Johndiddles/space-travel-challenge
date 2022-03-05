import { useState, useEffect } from "react";
import { useParams } from "react-router";
import data from "../../data";
import "./planet-details.style.scss";

const PlanetDetails = () => {
  const planets = data.destinations;
  const [presentPlanet, setPresentPlanet] = useState(null);
  //   const [allPlanetNames, setAllPlanetNames] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const thisPlanet = planets.filter((planet) => planet.name === name);
    setPresentPlanet(thisPlanet[0]);
  }, [name, planets]);

  console.log(presentPlanet);

  if (presentPlanet) {
    return (
      <div className="single-planet-details">
        <div className="left">
          <img src={`${presentPlanet.images.png}`} alt={presentPlanet.name} />
        </div>
        <div className="right">
          <div className="planet__name">{presentPlanet.name}</div>
          <div className="planet__description">{presentPlanet.description}</div>
          <div className="planet__footer">
            <div className="footer__tile">
              <p className="footer__title">avg. distance</p>
              <p className="footer__value">{presentPlanet.distance}</p>
            </div>
            <div className="footer__tile">
              <p className="footer__title">est. travel time</p>
              <p className="footer__value">{presentPlanet.travel}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>loading...</div>;
};

export default PlanetDetails;
