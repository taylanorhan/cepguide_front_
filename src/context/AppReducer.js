const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "ADD_ITEM_IN_CART":
      const updatedCart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    case "UPDATE_ITEM_IN_CART":
      const cartWithUpdatedItem = state.cart.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      localStorage.setItem("cart", JSON.stringify(cartWithUpdatedItem));
      return {
        ...state,
        cart: cartWithUpdatedItem,
      };
    case "REMOVE_ITEM_IN_CART":
      const cartAfterRemoval = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(cartAfterRemoval));
      return {
        ...state,
        cart: cartAfterRemoval,
      };
    case "CLEAR_CART":
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
      };
    case "ADD_ITEM_IN_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case "REMOVE_ITEM_IN_ORDER":
      return {
        ...state,
        orders: state.orders.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default AppReducer;
