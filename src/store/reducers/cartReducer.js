// cartReducer.js
const initialState = {
  cart: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CART_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_CART_SUCCESS':
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    case 'FETCH_CART_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;



