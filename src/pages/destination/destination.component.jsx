import Planet from "../../components/planets/planets.component";
import "./destination.style.scss";

const Destination = () => {
  return (
    <div className="destination">
      <p className="destination__header">
        <span>01</span> pick your destination
      </p>
      <Planet />
    </div>
  );
};

export default Destination;
