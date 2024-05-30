import React from 'react';
import Item from '../item/Item';
import './ItemList.css';
import { Link } from 'react-router-dom';

function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Link to={`/item/${item.id}`} key={item.id}>
          <Item
            name={item.name}
            price={item.price}
            image={item.image}
            cancel={item.cancel}
          />
        </Link>
      ))}
    </div>
  );
}

export default ItemList;
