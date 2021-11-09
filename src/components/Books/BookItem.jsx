import classes from "./BookItem.module.css";
import Card from "../UI/card";
import Button from "../UI/Button";
import { useContext } from "react";
import FavContext from "../store/FavContext";

const BookItem = (props) => {
  const favCtx = useContext(FavContext);
  const inFavorites = favCtx.favItem(props.id);
  const toggleHandler = () => {
    if (inFavorites) {
      favCtx.removeFav(props.id);
    } else {
      favCtx.addFavData({
        name: props.name,
        writer: props.writer,
        img: props.img,
        summary: props.summary,
        id: props.name,
      });
    }
  };

  return (
    <Card className={classes.card}>
      <li className={classes.grid}>
        <figure>
          <img src={props.img} alt={props.name} />
          <figcaption className={classes.caption}>
            <h2>{props.name}</h2>
            <h3>{props.writer}</h3>
            <p>{props.summary}</p>
          </figcaption>
        </figure>
        <Button onClick={toggleHandler} className={classes.button}>
          {inFavorites ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </li>
    </Card>
  );
};

export default BookItem;
