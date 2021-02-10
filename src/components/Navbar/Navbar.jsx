import React from "react";
import { NavLink } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
import { FaArrowCircleRight } from "react-icons/fa";
import Styles from "./Navbar.module.scss";
import Logos from "../../logos";
const Navbar = ({ handleSubmit, handleChange }) => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.header}>
        <div className={Styles.logo}>
          <img src={Logos.LogoTwo} alt="cloud" />
          <h1>Aragon News</h1>
        </div>
        <div className={Styles.profile_meta}>
          <div className={Styles.signIn}>Sign In</div>
          <div className={Styles.getStarted}>Get Started</div>
        </div>
      </div>
      <div className={Styles.navMenu}>
        <ul className={Styles.menuItems}>
          <li>
            <NavLink exact to="/" activeClassName={Styles.active_nav}>
              General
            </NavLink>
          </li>
          <li>
            <NavLink to="/science" activeClassName={Styles.active_nav}>
              Science
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" activeClassName={Styles.active_nav}>
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink to="/sports" activeClassName={Styles.active_nav}>
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink to="/business" activeClassName={Styles.active_nav}>
              Business
            </NavLink>
          </li>
          <li>
            <NavLink to="/entertainment" activeClassName={Styles.active_nav}>
              Entertainment
            </NavLink>
          </li>
        </ul>
        <div className={Styles.navSearch}>
          <form action="">
            <input
              type="text"
              name="search_query"
              placeholder="Search Keywords..."
              onChange={(e) => handleChange(e)}
            />
            <button onSubmit={(e) => handleSubmit(e)}>
              <FaArrowCircleRight className={Styles.submitIcon} />
            </button>
          </form>
          <VscSearch className={Styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
