import React from 'react';
import { ReactComponent as Logo } from '../assets/icon-trash.svg';

const ListItem = ({ id, value, removeItem }) => (
    <li className="list-item">
      {value}
      <button className="item-delete-btn" onClick={() => removeItem(id)}>
        <Logo />
      </button>
    </li>
);

export default ListItem;
