import { createContext } from "react";
const FavContext = createContext({
  data: [],
  totalFav: 0,
  addData: (formData) => {},
  addFavData: (favoriteData) => {},
  favorites: [],
  removeFav: (id) => {},
  favItem: (id) => {},
});

export default FavContext;
