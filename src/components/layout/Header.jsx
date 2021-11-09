import classes from "./Header.module.css";
import Nav from "./Nav";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <h2>Book Summary</h2>
      </div>
      <Nav onClick={props.onClick} />
    </header>
  );
};

export default Header;
