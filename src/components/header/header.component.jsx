import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Navbar from "../navbar/navbar.component";

import "./header.style.scss";
import logo from "../../assets/shared/logo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  function navMenuHandler() {
    const nav = document.getElementById("navbar");
    if (open) {
      nav.classList.remove("activeNav");
      setOpen(false);
    } else {
      nav.classList.add("activeNav");
      setOpen(true);
    }
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="logo__img" />
        </Link>
      </div>
      <div className="navMenu">
        {open ? (
          <IoCloseSharp onClick={navMenuHandler} />
        ) : (
          <FaBars onClick={navMenuHandler} />
        )}
      </div>
      <Navbar handleMenu={navMenuHandler} />
    </div>
  );
};

export default Header;
