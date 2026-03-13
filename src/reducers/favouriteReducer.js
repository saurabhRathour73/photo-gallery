export const favouriteReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVOURITE":
      const exists = state.includes(action.payload);

      let updated;

      if (exists) {
        updated = state.filter((id) => id !== action.payload);
      } else {
        updated = [...state, action.payload];
      }

      // save favourites in localStorage
      localStorage.setItem("favourites", JSON.stringify(updated));

      return updated;

    default:
      return state;
  }
};