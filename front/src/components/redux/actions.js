import {
  //ADD_FAVORITES,
  //DELETEFAVS,
  FILTER,
  ORDER,
  ALLFAVS,
  GET_FAVORITES,
} from "./actions-types";

import axios from "axios";

// export const addFavorites = (favorito) => {
//  return { type: ADD_FAVORITES, payload: favorito };
// };

// export const deleteFavs = (id) => {
//   return { type: DELETEFAVS, payload: id };
// };

export const filterCards = (evento) => {
  return async function (dispatch) {
    await axios
      .get(`http://localhost:3001/rickandmorty/allfavorites?gender=${evento}`)
      .then((res) => dispatch({ type: FILTER, payload: res.data }));
  };
};

export const orderCards = (orden) => {
  return { type: ORDER, payload: orden };
};

export const allFavs = (todos) => {
  return { type: ALLFAVS, payload: todos };
};

export const getFavorites = () => {
  return async function (dispatch) {
    await axios
      .get(`http://localhost:3001/rickandmorty/allfavorites`)
      .then((res) => dispatch({ type: GET_FAVORITES, payload: res.data }));
  };
};
