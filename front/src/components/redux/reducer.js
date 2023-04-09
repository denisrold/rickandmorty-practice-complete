import {
  // ADD_FAVORITES,
  // DELETEFAVS,
  FILTER,
  ORDER,
  ALLFAVS,
  GET_FAVORITES,
} from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    // case ADD_FAVORITES:
    //   return {
    //     ...state,
    //     allCharacters: [...state.allCharacters, actions.payload],
    //     myFavorites: [...state.myFavorites, actions.payload],
    //   };
    //myFavorites: [...state.myFavorites, actions.payload] };
    case ALLFAVS:
      return {
        ...state,
        myFavorites: [...state.allCharacters],
      };
    // // case DELETEFAVS: {
    // //   let filteredList = state.allCharacters.filter(
    // //     (favs) => favs.id !== actions.payload
    // //   );

    //   return {
    //     ...state,
    //     myFavorites: filteredList,
    //     allCharacters: filteredList,
    //   };
    // }

    case FILTER:
      // let filtered = state.allCharacters.filter(
      //   (character) => character.gender === actions.payload
      // );
      return {
        ...state,
        myFavorites: actions.payload,
      };

    case ORDER:
      let orders = [...state.myFavorites];
      if (actions.payload === "Ascendente") {
        orders.sort((a, b) => a.id - b.id);
      }
      if (actions.payload === "Descendente") {
        orders.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: orders,
      };

    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: actions.payload,
      };
    default:
      return { ...state };
  }
};
export default reducer;
