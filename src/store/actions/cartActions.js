// cartActions.js
export const fetchCart = (userId) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_CART_REQUEST' });
    const response = await fetch(`/api/cart/${userId}`);
    const data = await response.json();
    console.log('API Response:', data); // Log API response
    dispatch({ type: 'FETCH_CART_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_CART_ERROR', payload: error.message });
  }
};

