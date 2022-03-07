import { NavLink } from "react-router-dom";
import "./navbar.style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "navbar__link active" : "navbar__link"
        }
      >
        <span>00</span> Home
      </NavLink>

      <NavLink
        id="destination_link"
        to="/destination/Moon"
        className={({ isActive }) => {
          if (isActive || window.location.href.includes("destination")) {
            return "navbar__link active";
          } else {
            return "navbar__link";
          }
        }}
      >
        <span>01</span> Destination
      </NavLink>

      <NavLink
        to="/crew"
        className={({ isActive }) =>
          isActive ? "navbar__link active" : "navbar__link"
        }
      >
        <span>02</span> Crew
      </NavLink>

      <NavLink
        to="/technology"
        className={({ isActive }) =>
          isActive ? "navbar__link active" : "navbar__link"
        }
      >
        <span>03</span> Technology
      </NavLink>
    </div>
  );
};

export default Navbar;
