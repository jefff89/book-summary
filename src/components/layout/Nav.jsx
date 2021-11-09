import classes from "./Nav.module.css";
import NavList from "./NavList";
import { useState } from "react";

const Nav = (props) => {
  const [toggleMenu, setToggleMenu] = useState(true);
  // const wid = window.innerWidth < 560;
  // useEffect(() => {
  //   if (wid) {
  //     setToggleMenu(false);
  //   }
  // }, [wid]);

  const toggleHandler = () => {
    if (!toggleMenu) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
  };

  return (
    <nav className={classes.nav}>
      <button className={classes["menu-toggle"]} onClick={toggleHandler}>
        toggle menu
      </button>
      {toggleMenu && <NavList onClick={props.onClick} />}
    </nav>
  );
};

export default Nav;
