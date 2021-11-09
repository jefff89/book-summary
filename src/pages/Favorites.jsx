import React from "react";
import { useContext } from "react";
import Book from "../components/Books/Book";
import FavContext from "../components/store/FavContext";
const Favorites = () => {
  const favCtx = useContext(FavContext);

  let content;
  if (favCtx.totalFav === 0) {
    content = (
      <h2 style={{ textAlign: "center", marginTop: "5em", color: "white" }}>
        NO FAVORITES YET! Let's add some...
      </h2>
    );
  } else {
    content = <Book data={favCtx.favorites} />;
  }
  return <>{content}</>;
};

export default Favorites;
