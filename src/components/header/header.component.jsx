import Navbar from "../navbar/navbar.component";

import "./header.style.scss";
import logo from "../../assets/shared/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" className="logo__img" />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
