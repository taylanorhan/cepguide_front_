import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalState";
import "./Cart.css";

function Cart() {
  const { cart, user, setCart, clearCart } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (user && user._id) { // Check if user and user._id are defined
          console.log('Fetching cart for user:', user._id);
          const response = await axios.get('http://localhost:3000/cart', {
            params: { userId: user._id }
          });
          console.log('Cart response:', response.data);
          setCart(response.data);
        } else {
          console.log('User is not defined or user._id is missing');
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, [user, setCart]);

  const handleCheckout = async () => {
    console.log('handleCheckout called');
    console.log('User:', user); 
    console.log('Cart:', cart); 
     
    try {
      if (user && cart.length) {
        console.log('User ID:', user.user._id);
        console.log('Cart Items:', cart);

        const response = await axios.post('http://localhost:3000/orders', {
          userId: user.user._id, 
          items: cart
        });

        if (response.status === 201) {
          console.log('Order Successful:', response.data);
          // clearCart();
          navigate('/checkout');
        } else {
          console.error('Order failed:', response.statusText);
        }
      } else {
        console.log('User or cart is not defined');
      }
    } catch (error) {
      if (error.response) {
        console.error('Order Error:', error.response.data);
      } else if (error.request) {
        console.error('Order Error: No response from server', error.request);
      } else {
        console.error('Order Error:', error.message);
      }
    }
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {!cart.length ? (
        <p>No Excursions Added! Please add something to your cart.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <Link to={`/item/${item.id}`}>
                  <img src={item.image} alt={item.name} className="cart-image" />
                </Link>
                <div className="item-details">
                  <div className="item-name-price">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">₺{item.price.toFixed(2)}</div>
                    <div>Adults: {item.adults}</div>
                    <div>Children: {item.children}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="item-btn" onClick={handleCheckout}>Next</button>
          <Link to="/excursions">
            <button className="item-btn back-btn">Back to Excursions</button>
          </Link>
          <button style={{backgroundColor:"red"}} className="item-btn" onClick={() => clearCart()}>Clear</button>
        </>
      )}
    </div>
  );
}

export default Cart;
