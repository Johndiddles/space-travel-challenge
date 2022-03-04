import { Link } from "react-router-dom";
import "./navbar.style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__link">
        00 Home
      </Link>
      <Link to="/" className="navbar__link">
        01 Destination
      </Link>
      <Link to="/" className="navbar__link">
        {" "}
        02 Crew
      </Link>
      <Link to="/" className="navbar__link">
        {" "}
        03 Technology
      </Link>
    </div>
  );
};

export default Navbar;
