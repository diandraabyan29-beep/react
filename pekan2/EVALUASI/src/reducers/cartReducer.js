export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { total: state.total + 1 };
    case "REMOVE_ITEM":
      return { total: Math.max(0, state.total - 1) };
    case "CLEAR_CART":
      return { total: 0 };
    default:
      return state;
  }
};
