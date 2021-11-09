import FavContext from "./FavContext";
import { useState } from "react";

// const defaultFormState = {
//   data: [],
//   toatalFav: 0,
// };
// const addFormReducer = (state, action) => {
//   if (action.type === "ADD") {
//     return [state.data, action.data];
//   }
// };

const FavContextProvider = (props) => {
  // const [addFormState, dispatchFormState] = useReducer(
  //   addFormReducer,
  //   defaultFormState
  // );

  const [userFavorites, setUserFavorites] = useState([]);

  const [addFormData, setAddFormData] = useState([]);

  const addFavHandler = (favoriteData) => {
    setUserFavorites((preUserFavorites) => {
      return preUserFavorites.concat(favoriteData);
    });
  };

  const addDataHandler = (formData) => {
    setAddFormData((prestate) => {
      return prestate.concat(formData);
    });
  };

  const removeFavHandler = (id) => {
    setUserFavorites((preState) => {
      return preState.filter((prev) => prev.id !== id);
    });
  };

  const favItemHandler = (id) => {
    return userFavorites.find((userFavorite) => userFavorite.id === id);
  };

  const favContext = {
    data: addFormData,
    addData: addDataHandler,
    totalFav: userFavorites.length,
    addFavData: addFavHandler,
    favorites: userFavorites,
    removeFav: removeFavHandler,
    favItem: favItemHandler,
  };

  return (
    <FavContext.Provider value={favContext}>
      {props.children}
    </FavContext.Provider>
  );
};

export default FavContextProvider;
