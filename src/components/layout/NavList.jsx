import React, { useContext, useState, useEffect } from "react";
import classes from "./NavList.module.css";
import { NavLink } from "react-router-dom";
import FavContext from "../store/FavContext";

const NavList = (props) => {
  const [popsBtn, setPopsBtn] = useState(false);
  const favCtx = useContext(FavContext);
  const { totalFav } = favCtx;
  const btnPops = `${classes.badge} ${popsBtn ? classes.pops : ""}`;
  useEffect(() => {
    if (totalFav === 0) {
      return;
    }
    setPopsBtn(true);
    const timer = setTimeout(() => {
      setPopsBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [totalFav]);
  return (
    <ul className={classes.menu}>
      <li>
        {/* without exact the homepage will always be active-colored  */}
        <NavLink to="/" exact activeStyle={{ color: "tomato" }}>
          Home
        </NavLink>
      </li>
      <li>
        {/* you can also add activeClassName={classes.active} to NavLink instead of activeStyle */}
        <NavLink to="/summary" activeStyle={{ color: "tomato" }}>
          Add Summary
        </NavLink>
      </li>
      <li>
        <NavLink to="/favorites" activeStyle={{ color: "tomato" }}>
          Favorites
          <span className={btnPops}>{totalFav}</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={classes.logout} onClick={props.onClick}>
          Logout
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
