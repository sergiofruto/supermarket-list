import React from 'react';

const ListItem = ({children}) => {
  return (
    <li className="ListItem">
      {children}
    </li>
  );
};

export default ListItem;