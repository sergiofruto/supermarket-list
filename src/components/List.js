import React from 'react';

const List = ({children}) => {
  return (
    <ul className="list">
      {children}
    </ul>
  );
};

export default List;
