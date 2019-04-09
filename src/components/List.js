import React from 'react';

const List = ({children}) => {
  return (
    <ul className="List">
      {children}
    </ul>
  );
};

export default List;
