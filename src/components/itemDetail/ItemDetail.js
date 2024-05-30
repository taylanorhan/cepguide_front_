import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './ItemDetail.css';
import ImageCarousel from '../itemDetail/ImageCarousel';
import items from '../../mockData/items.json';
import { GlobalContext } from '../../context/GlobalState';

const getItemDetail = (id) => items.find((item) => item.id === id);

function ItemDetail() {
  const params = useParams();
  const itemId = parseInt(params?.id);
  const item = itemId ? getItemDetail(itemId) : null;
  const { cart, addItemToCartList } = useContext(GlobalContext);
  const cartItem = cart.find((c) => c.id === itemId);
  const [isAdded, setIsAdded] = useState(!!cartItem);
  const [selectedPersons, setSelectedPersons] = useState(
    cartItem ? cartItem.adults : 1
  );
  const [selectedChildren, setSelectedChildren] = useState(
    cartItem ? cartItem.children : 0
  );
  const [finalPrice, setFinalPrice] = useState(
    cartItem ? cartItem.price : item ? item.price : 0
  );
  const navigate = useNavigate();

  const handlePersonsChange = (e) => {
    const value = e.target.value;
    setSelectedPersons(value ? Number(value) : '');
  };
  const handleChildrenChange = (e) => {
    const value = e.target.value;
    setSelectedChildren(value ? Number(value) : '');
  };


  useEffect(() => {
    if (item) {
      const newPrice =
        item.price * selectedPersons + item.price * 0.5 * selectedChildren;
      setFinalPrice(newPrice);
    }
  }, [selectedPersons, selectedChildren, item]);

  if (!item) {
    return <div>Item not found</div>;
  }
  return (
    <div className="item-detail-container">
      <Link to="/Excursions" className="back-button">
        &#8592; Back
      </Link>
      <h1 className="tour-title">{item.name}</h1>
      <ImageCarousel images={item.image} />
      <div className="item-detail">
        <div className="item-main">
          <div className="item-info">
            <p className="item-short-description">
              {item['short-description']}
            </p>
            <hr className="border" />
            <div className="list">
              <p className="item-cancel-d">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-1 h-1"
                  width="28"
                  height="28"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                {item.cancel}
              </p>
              <p className="avaliable-d">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#172554"
                  class="w-6 h-6"
                  width="28"
                  height="28"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                Avaliable in:{' '}
                <span style={{ color: '#172554' }}> En, Ger and Ru</span>
              </p>
              <p className="item-place">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="#172554"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
                Place: <span style={{ color: '#333' }}> {item.place}</span>
              </p>
              <p className="item-duration">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM61.66,37.66l-32,32A8,8,0,0,1,18.34,58.34l32-32A8,8,0,0,1,61.66,37.66Zm176,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,69.66ZM184,128a8,8,0,0,1,0,16H128a8,8,0,0,1-8-8V80a8,8,0,0,1,16,0v48Z"></path>
                </svg>
                {item.duration}
              </p>
            </div>
            <div>
              <h3 className="do-this">Do this because</h3>
              <ul>
                {item.do.map((item, index) => (
                  <li key={index}>
                    <p className="item-do">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"></path>
                      </svg>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="do-this">What to expect?</h3>
              <p className="expectation-text">{item.Expectation}</p>
            </div>
            <div>
              <h3 className="do-this">What's included?</h3>
              <ul>
                {item.description.map((item, index) => (
                  <li key={index}>
                    <p className="item-description">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="#166534"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="booking-details">
      <span className="final-price">₺{finalPrice.toFixed(2)}</span>
      <div className="input-group">
        <label htmlFor="adults" className="input-label">Adults:</label>
        <input
          id="adults"
          type="number"
          className="item-detail-input"
          value={selectedPersons}
          onChange={handlePersonsChange}
          min="1"
          max="7"
          placeholder="1"
        />
      </div>
      <div className="input-group">
        <label htmlFor="children" className="input-label">Children:</label>
        <input
          id="children"
          type="number"
          className="item-detail-input"
          value={selectedChildren}
          onChange={handleChildrenChange}
          min="0"
          max="4"
          placeholder="0"
        />
      </div>
      <button
        className="item-btn"
        disabled={isAdded}
        onClick={() => {
          addItemToCartList({
            ...item,
            adults: selectedPersons || 1,
            children: selectedChildren || 0,
            price: finalPrice,
          });
          setIsAdded(true);
        }}
      >
                {isAdded ? (
                  <Link
                    to="/cart"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate.push('/cart');
                    }}
                  >
                    Go to Cart
                  </Link>
                ) : (
                  'Purchase'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
