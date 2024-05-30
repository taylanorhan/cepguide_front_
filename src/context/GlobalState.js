import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  orders: [],
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setUser = (user) => { 
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  const setCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "SET_CART",
      payload: cart,
    });
  };

  const addItemToCartList = (item) => {
    dispatch({
      type: "ADD_ITEM_IN_CART",
      payload: item,
    });
  };

  const updateItemInCart = (item) => {
    dispatch({
      type: "UPDATE_ITEM_IN_CART",
      payload: item,
    });
  };

  const removeItemFromCartList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_IN_CART",
      payload: item,
    });
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const addItemToOrderList = (item) => {
    dispatch({
      type: "ADD_ITEM_IN_ORDER",
      payload: item,
    });
  };

  const removeItemFromOrderList = (item) => {
    dispatch({
      type: "REMOVE_ITEM_IN_ORDER",
      payload: item,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        orders: state.orders,
        user: state.user,
        setUser,
        setCart,
        addItemToCartList,
        updateItemInCart,
        removeItemFromCartList,
        clearCart,
        addItemToOrderList,
        removeItemFromOrderList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
