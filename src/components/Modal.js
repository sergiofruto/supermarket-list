import React from 'react';

const Modal = ({
  inputValue,
  handleAddItem,
  handleCancel,
  handleInputChange,
  disabledButton,
  isLoading,
}) => (
  <div className="overlay">
    <div className="overlay-content">
      <h2>Add Item</h2>
      <form className="add-form" action="" onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Add item"
          value={inputValue}
          onChange={handleInputChange}
          autoFocus
        />
        <div className="button-row">
          <button className="btn red" onClick={handleCancel} type="button">
            Cancel
          </button>
          <button
            type="submit"
            className="btn blue"
            onClick={handleAddItem}
            disabled={disabledButton || isLoading ? true : false}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Modal;
