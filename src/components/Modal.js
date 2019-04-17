import React from 'react';

const Modal = ({
  inputValue,
  handleAddItem,
  handleCancel,
  handleInputChange,
  disabledButton
}) => (
  <div className="overlay">
    <div className="overlay-content">
      <h2>Add Item</h2>
      <form className="add-form" action="">
        <input
          type="text"
          placeholder="Add item"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="button-row">
          <button className="btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn blue"
            onClick={handleAddItem}
            disabled={disabledButton}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Modal;