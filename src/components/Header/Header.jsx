import Logo from "./MS.png";
import "./Header.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Header = () => {
  let location = useLocation();
  return (
    <>
      <div className="Header">
        <img src={Logo}></img>
        <ul>
          <li>
            <Link className={location.pathname === "/" ? "active" : ""} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/about" ? "active" : ""}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/portfolio" ? "active" : ""}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/contact" ? "active" : ""}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Button>Download Resume</Button>
      </div>
    </>
  );
};

export default Header;
