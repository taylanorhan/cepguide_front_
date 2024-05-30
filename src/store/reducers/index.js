import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

const initialState = {
  example: 'Hello Redux'
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EXAMPLE':
      return {
        ...state,
        example: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer,
  user: userReducer,
  cart: cartReducer, 
});

export default rootReducer;

