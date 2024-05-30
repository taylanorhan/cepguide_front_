const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'SET_CART':
      return {
        ...state,
        cart: action.payload
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    default:
      return state;
  }
};

export default AppReducer;
