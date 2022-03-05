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
        to="/destination/Moon"
        className={
          window.location.href.includes("destination")
            ? "navbar__link active"
            : "navbar__link"
        }
        // className={({ isActive }) =>
        //   isActive ? "navbar__link active" : "navbar__link"
        // }
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
