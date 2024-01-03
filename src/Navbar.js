import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./packaged-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/fontawesome-free-solid";

function Navbar() {
  const [navOpen, setNavOpen] = useState("false");

  return (
    <nav>
      <img src={Logo} alt="Packaged Legacy"></img>
      <ul className={navOpen ? "nav-list" : "show-list"}>
        <li>
          <Link onClick={() => setNavOpen((open) => !open)} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => setNavOpen((open) => !open)} to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link onClick={() => setNavOpen((open) => !open)} to="/why">
            Why South Yorkshire?
          </Link>
        </li>
        <li>
          <Link onClick={() => setNavOpen((open) => !open)} to="/download">
            Download our Guide
          </Link>
        </li>
        <li>
          <Link onClick={() => setNavOpen((open) => !open)} to="/faq">
            FAQs
          </Link>
        </li>
        <li>
          <Link onClick={() => setNavOpen((open) => !open)} to="/policies">
            Policies & Procedures
          </Link>
        </li>
      </ul>
      <button className={navOpen ? "" : "arrow-button button-rotate"}>
        <FontAwesomeIcon
          icon={faArrowCircleDown}
          onClick={() => setNavOpen((open) => !open)}
        />
      </button>
    </nav>
  );
}

export default Navbar;
